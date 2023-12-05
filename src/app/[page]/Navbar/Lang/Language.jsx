"use client";

import { useState } from "react";

export default function Language() {
  const [toggleLanguage, setToggleLanguage] = useState(true);
  const handleLang = () => {
    setToggleLanguage(toggleLanguage === "true" ? "false" : "true");
  };
  return (
    <button className="lang" onClick={handleLang}>
      {toggleLanguage === "true" ? "vi" : "en"}
    </button>
  );
}
