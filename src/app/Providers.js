"use client";
import { ThemeProvider } from "next-themes";

export default function ProvidersTheme({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
