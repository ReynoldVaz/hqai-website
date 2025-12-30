import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="glass-card w-full max-w-md p-8 rounded-2xl border-white/10 text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-16 w-16 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link href="/" className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90">
          Return Home
        </Link>
      </div>
    </div>
  );
}
