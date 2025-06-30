"use client";

import { ReactNode, Suspense } from "react";
import { ClerkProvider as OriginalClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useIsDarkMode } from "@/hooks/useIsDarkMode";

function ClerkProvider({ children }: { children: ReactNode }) {
  const isDarkMode = useIsDarkMode();
  console.log({ isDarkMode });

  return (
    <Suspense fallback="loading">
      <OriginalClerkProvider appearance={isDarkMode ? { baseTheme: [dark] } : undefined}>{children}</OriginalClerkProvider>
    </Suspense>
  );
}

export default ClerkProvider;
