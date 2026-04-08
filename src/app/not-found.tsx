import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-8xl font-headline font-extrabold text-primary mb-4">
        404
      </h1>
      <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">
        Page Not Found
      </h2>
      <p className="text-on-surface-variant mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button href="/" variant="gradient">
        Back to Home
      </Button>
    </div>
  );
}
