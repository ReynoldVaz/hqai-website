import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Mock storage (inline the data)
const mockStorage = {
  getProducts: async () => [],
  getServices: async () => [],
  getEvents: async () => []
};

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

let isInitialized = false;

async function initialize() {
  if (isInitialized) return;
  
  // Register API routes
  app.get("/api/products", async (_req, res) => {
    const products = await mockStorage.getProducts();
    res.json(products);
  });

  app.get("/api/services", async (_req, res) => {
    const services = await mockStorage.getServices();
    res.json(services);
  });

  app.get("/api/events", async (_req, res) => {
    const events = await mockStorage.getEvents();
    res.json(events);
  });

  app.post("/api/contact", async (req, res) => {
    console.log("Contact form submitted:", req.body);
    res.json({ success: true });
  });

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    console.error(err);
  });

  // Serve static files in production
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  
  // Try multiple possible paths for the public directory
  const possiblePaths = [
    path.join(__dirname, "..", "dist", "public"),
    path.join(process.cwd(), "dist", "public"),
    path.join(__dirname, "public"),
  ];
  
  let publicPath = possiblePaths[0];
  for (const p of possiblePaths) {
    try {
      const fs = await import("fs");
      if (fs.existsSync(p)) {
        publicPath = p;
        console.log(`Found public directory at: ${publicPath}`);
        break;
      }
    } catch (e) {
      console.log(`Path not found: ${p}`);
    }
  }
  
  app.use(express.static(publicPath));
  
  // Catch-all route for SPA
  app.get("*", (_req, res) => {
    const indexPath = path.join(publicPath, "index.html");
    console.log(`Serving index.html from: ${indexPath}`);
    res.sendFile(indexPath, (err) => {
      if (err) {
        console.error(`Error serving index.html:`, err);
        res.status(500).send("Internal Server Error");
      }
    });
  });
  
  isInitialized = true;
}

export default async (req: Request, res: Response) => {
  await initialize();
  return app(req, res);
};
