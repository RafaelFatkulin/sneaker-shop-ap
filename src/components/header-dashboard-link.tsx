"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export function HeaderDashboardLink() {
  const pathname = usePathname();

  const isDashboard = pathname?.startsWith("/dashboard");

  if (isDashboard) {
    return null;
  }

  return (
    <Button
      variant="outline"
      asChild
    >
      <Link
        className="text-lg"
        href="/dashboard"
      >
        To Dashboard
      </Link>
    </Button>
  );
}
