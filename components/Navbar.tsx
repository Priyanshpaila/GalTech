"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { CompanyDetails } from "@/config/companyDetails";

type NavigationItem = CompanyDetails["navigation"][number];

export default function Navbar() {
  const pathname = usePathname();
  const [navigation, setNavigation] = useState<NavigationItem[]>([]);
  const [brand, setBrand] = useState("GALTech");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    void import("@/config/companyDetails").then(({ companyDetails }) => {
      if (!mounted) return;
      setNavigation([...companyDetails.navigation]);
      setBrand(companyDetails.branding.shortName);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const isCurrent = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const navItemClass =
    "flex h-11 items-center justify-center rounded-button px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand";

  return (
    <header
      className="
    sticky top-0 z-50
    border-b border-slate-200
    bg-white
    text-ink
  "
    >
      <nav
        className="page-shell flex h-[76px] items-center justify-between"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="group flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-label={`${brand} home`}
        >
          <Image
            src="/galtech-logo.png"
            alt="GALTech Infosolutions"
            width={1080}
            height={356}
            priority
            className="h-auto w-[156px] mix-blend-multiply sm:w-[178px]"
          />
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => {
            const hasChildren = item.children.length > 0;

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${navItemClass} ${
                    isCurrent(item.href)
                      ? "bg-brand/10 text-brand"
                      : "text-slate-700 hover:bg-slate-100 hover:text-brand"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const open = desktopDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDesktopDropdown(item.label)}
                onMouseLeave={() => setDesktopDropdown(null)}
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={open}
                  onClick={() => setDesktopDropdown(open ? null : item.label)}
                  className={`${navItemClass} ${
                    open || isCurrent(item.href)
                      ? "bg-brand/10 text-brand"
                      : "text-slate-700 hover:bg-slate-100 hover:text-brand"
                  }`}
                >
                  {item.label}

                  <ChevronDown
                    aria-hidden="true"
                    className={`size-4 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.16 }}
                      role="menu"
                      className="absolute left-0 top-full z-50 mt-2 min-w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white py-2 text-ink shadow-xl"
                    >
                      <Link
                        href={item.href}
                        role="menuitem"
                        onClick={() => setDesktopDropdown(null)}
                        className="block border-b border-slate-100 px-5 py-3 text-sm font-bold text-brand hover:bg-slate-50"
                      >
                        View all {item.label}
                      </Link>

                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          role="menuitem"
                          onClick={() => setDesktopDropdown(null)}
                          className="block px-5 py-3 text-sm font-medium transition-colors hover:bg-slate-50 hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          <Link
            href="/contact"
            className="button-primary ml-3 inline-flex h-11 items-center justify-center bg-brand px-6 text-sm text-white hover:bg-sky"
          >
            Enquire now
          </Link>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-button border border-slate-300 text-ink transition-colors hover:border-brand/35 hover:bg-brand/5 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand xl:hidden"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-slate-200 bg-white xl:hidden"
          >
            <div className="page-shell max-h-[calc(100vh-76px)] overflow-y-auto py-4">
              {navigation.map((item) => {
                const hasChildren = item.children.length > 0;
                const expanded = mobileDropdown === item.label;
                if (!hasChildren)
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobile}
                      className={`block rounded-xl px-4 py-3.5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${isCurrent(item.href) ? "bg-brand/10 text-brand" : "text-slate-800 hover:bg-slate-100 hover:text-brand"}`}
                    >
                      {item.label}
                    </Link>
                  );
                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-transparent data-[open=true]:border-slate-200 data-[open=true]:bg-slate-50"
                    data-open={expanded}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className="flex-1 px-4 py-3.5 text-base font-semibold text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} links`}
                        aria-expanded={expanded}
                        onClick={() =>
                          setMobileDropdown(expanded ? null : item.label)
                        }
                        className="mr-2 grid size-10 place-items-center rounded-lg text-slate-700 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                      >
                        <ChevronDown
                          aria-hidden="true"
                          className={`size-5 transition-transform ${expanded ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    <AnimatePresence>
                      {expanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden px-4 pb-3"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={closeMobile}
                              className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-white hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <Link
                href="/contact"
                onClick={closeMobile}
                className="button-primary mt-4 inline-flex w-full items-center justify-center bg-brand px-5 text-white"
              >
                Enquire now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
