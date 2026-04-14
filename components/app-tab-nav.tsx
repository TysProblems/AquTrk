"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Droplets, User } from "lucide-react";

import { cn } from "@/lib/utils";

const tabs = [
  { href: "/bottle", label: "Bottle", icon: Droplets },
  { href: "/calendar", label: "Calendar", icon: Calendar },
  { href: "/profile", label: "Profile", icon: User },
] as const;

export function AppTabNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/60 bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur supports-[backdrop-filter]:bg-background/80"
      aria-label="App"
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around gap-1 px-2 py-2">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-lg py-2 text-xs font-medium transition-colors",
                active ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="size-5 shrink-0" aria-hidden />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
