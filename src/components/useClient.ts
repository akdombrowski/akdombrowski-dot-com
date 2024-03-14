"use client";
import "client-only";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export default function useClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
