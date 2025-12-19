// components/navbar/CenterNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/config/nav-links";
import { cn } from "@/lib/utils";

const CenterNav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-10 md:flex">
      {NAV_LINKS.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative text-sm font-medium text-slate-600 transition hover:text-slate-900",
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
  );
};

export default CenterNav;
