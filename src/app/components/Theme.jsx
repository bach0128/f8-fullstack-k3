"use client";

import { useState, useEffect } from "react";
import sun from "../pages/assets/image/sun.png";
import moon from "../../app/pages/assets/image/moon.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";
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
    <Button className="theme" onClick={handleTheme}>
      {theme === "dark" ? (
        <Image
          alt="image"
          src={sun}
          style={{ maxWidth: "24px", height: "auto" }}
        />
      ) : (
        <Image
          alt="image"
          src={moon}
          style={{ maxWidth: "24px", height: "auto", color: "orange" }}
        />
      )}
    </Button>
  );
}
