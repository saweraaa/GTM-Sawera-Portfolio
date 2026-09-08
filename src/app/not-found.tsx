import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-32">
      <p className="type-label">Error 404</p>
      <h1 className="type-display-l mt-5 max-w-[16ch]">
        This page is not in the pipeline.
      </h1>
      <p className="type-lead mt-6">
        The link is broken or the page has moved. Everything else is one click away.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="/" size="lg">
          Back to home
        </Button>
        <Button href="/work" variant="outline" size="lg">
          Browse case studies
        </Button>
      </div>
    </Container>
  );
}
