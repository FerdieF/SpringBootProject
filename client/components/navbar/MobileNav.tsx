"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/config/nav-links";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            aria-label="Open menu"
            className="rounded-xl border border-slate-200 p-2"
          >
            <Menu className="h-5 w-5 text-slate-700" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-72 bg-white px-6">
          <div className="mt-12 flex flex-col gap-8">
            {/* Nav links */}

            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative w-fit text-sm font-medium text-slate-600 transition hover:text-slate-900",
                      active && "text-slate-900",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "bg-accent absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full transition-transform",
                        active && "scale-x-100",
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="h-px bg-slate-200" />

            {/* Auth */}
            <div className="flex flex-col gap-3">
              <Link
                href="/sign-in"
                className="text-foreground rounded-lg border bg-slate-50 px-4 py-2 text-center text-sm font-medium hover:bg-slate-100"
              >
                Sign in
              </Link>

              <Link
                href="/sign-up"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg px-4 py-2 text-center text-sm font-medium"
              >
                Sign up
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
