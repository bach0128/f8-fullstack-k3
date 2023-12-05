"use client";

import { useState, useEffect } from "react";
import sun from "../[page]/assets/image/sun.png";
import moon from "../../app/[page]/assets/image/moon.png";
import Image from "next/image";

import { useTheme } from "next-themes";

export default function Theme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("light");

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button className="theme" onClick={handleTheme}>
      {theme === "dark" ? (
        <Image
          alt="none"
          src={sun}
          style={{ maxWidth: "24px", height: "auto" }}
        />
      ) : (
        <Image
          alt="none"
          src={moon}
          style={{ maxWidth: "24px", height: "auto" }}
        />
      )}
    </button>
  );
}
