"use client";
import React, { useEffect, useState } from 'react';

export const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

type Props = { children: React.ReactNode; fallback?: React.ReactNode };

export default function ClientOnly({ children, fallback = null }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (isBrowser) setMounted(true);
  }, []);
  return mounted ? <>{children}</> : <>{fallback}</>;
}