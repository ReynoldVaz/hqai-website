import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import archiver from "archiver";
import path from "path";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get(api.products.list.path, async (_req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get(api.services.list.path, async (_req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get(api.events.list.path, async (_req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    // Mock email submission
    console.log("Contact form submitted:", req.body);
    res.json({ success: true });
  });

  // Download codebase as zip
  app.get("/api/download-code", (req, res) => {
    res.setHeader("Content-Type", "application/zip");
    res.setHeader("Content-Disposition", "attachment; filename=hqai-website.zip");

    const archive = archiver("zip", { zlib: { level: 9 } });

    archive.on("error", (err) => {
      console.error("Archiver error:", err);
      res.status(500).json({ error: "Failed to create zip file" });
    });

    archive.pipe(res);

    // Add directories and files
    const rootPath = path.join(process.cwd());
    
    // Exclude these patterns
    const ignorePatterns = [
      "node_modules",
      ".git",
      "dist",
      "build",
      ".env",
      ".env.local",
      ".DS_Store",
      ".turbo",
      "*.log",
      ".replit",
      ".vscode"
    ];
    
    // Add client directory (excluding node_modules and build artifacts)
    archive.directory(path.join(rootPath, "client"), "client", {
      ignore: (filePath: string) => {
        return ignorePatterns.some(pattern => filePath.includes(pattern));
      }
    });
    
    // Add server directory
    archive.directory(path.join(rootPath, "server"), "server");
    
    // Add shared directory
    archive.directory(path.join(rootPath, "shared"), "shared");
    
    // Add script directory
    archive.directory(path.join(rootPath, "script"), "script");
    
    // Add config files
    archive.file(path.join(rootPath, "package.json"), { name: "package.json" });
    archive.file(path.join(rootPath, "package-lock.json"), { name: "package-lock.json" });
    archive.file(path.join(rootPath, "tsconfig.json"), { name: "tsconfig.json" });
    archive.file(path.join(rootPath, "vite.config.ts"), { name: "vite.config.ts" });
    archive.file(path.join(rootPath, "tailwind.config.ts"), { name: "tailwind.config.ts" });
    archive.file(path.join(rootPath, "postcss.config.js"), { name: "postcss.config.js" });
    archive.file(path.join(rootPath, "drizzle.config.ts"), { name: "drizzle.config.ts" });
    archive.file(path.join(rootPath, "components.json"), { name: "components.json" });

    archive.finalize();
  });

  return httpServer;
}
