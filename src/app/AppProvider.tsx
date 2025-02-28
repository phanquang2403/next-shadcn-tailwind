"use client";
import { clientSessionToken } from "@/lib/clientToken";
import { useState } from "react";

interface AppProviderProps {
  readonly children: React.ReactNode;
  readonly initialSessionToken?: string;
}
export default function AppProvider({
  children,
  initialSessionToken = "",
}: AppProviderProps) {
  useState(() => {
    if (typeof window !== "undefined") {
      clientSessionToken.value = initialSessionToken;
    }
  });

  return <>{children};</>;
}
