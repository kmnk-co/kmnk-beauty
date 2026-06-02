"use client";

import { useEffect } from "react";

export default function BookPage() {
  useEffect(() => {
    window.location.replace("https://cal.com/kmnk-beauty");
  }, []);

  return <p>Redirecting...</p>;
}
