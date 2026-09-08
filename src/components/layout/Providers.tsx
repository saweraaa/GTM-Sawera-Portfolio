"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--linen)",
            color: "var(--ink)",
            border: "1px solid var(--line)",
            borderRadius: "14px",
            fontFamily: "var(--font-sans)",
          },
        }}
      />
    </ThemeProvider>
  );
}
