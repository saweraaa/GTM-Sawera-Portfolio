"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-32">
      <p className="type-label">Something broke</p>
      <h1 className="type-display-l mt-5 max-w-[18ch]">
        That did not go to plan.
      </h1>
      <p className="type-lead mt-6">
        An unexpected error occurred. Try again, or email directly if it persists.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button onClick={reset} size="lg">
          Try again
        </Button>
        <Button href="/" variant="outline" size="lg">
          Back to home
        </Button>
      </div>
    </Container>
  );
}
