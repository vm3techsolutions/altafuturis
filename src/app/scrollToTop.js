"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Detect route changes

export default function ScrollToTop() {
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Runs when the route changes

  return null; // No need to return an empty div
}
