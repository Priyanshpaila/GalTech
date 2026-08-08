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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let mounted = true;
    void import("@/config/companyDetails").then(({ companyDetails }) => {
      if (!mounted) return;
      setNavigation([...companyDetails.navigation]);
      setBrand(companyDetails.branding.shortName);
    });

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      mounted = false;
      window.removeEventListener("scroll", handleScroll);
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

  // Only apply transparency on homepage top
  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !scrolled && !mobileOpen;

  const navItemClass = `flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent text-white border-b border-white/10 py-1"
          : "bg-white/95 text-ink backdrop-blur-md shadow-sm border-b border-slate-200/80 py-0"
      }`}
    >
      <nav
        className="page-shell flex h-[72px] items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Brand Logo / Title */}
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-label={`${brand} home`}
        >
          <div className={`transition-all duration-300 ${isTransparent ? " shadow-md backdrop-blur-md" : ""}`}>
            <Image
              src="/galtech-logo.png"
              alt="GALTech Infosolutions"
              width={1080}
              height={356}
              priority
              className="h-auto w-[140px] sm:w-[160px]"
            />
          </div>
        </Link>

        {/* Center Desktop Navigation Links */}
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
                      ? isTransparent
                        ? "bg-white/15 text-white"
                        : "bg-brand/10 text-brand"
                      : isTransparent
                        ? "text-slate-200 hover:bg-white/10 hover:text-white"
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
                      ? isTransparent
                        ? "bg-white/15 text-white"
                        : "bg-brand/10 text-brand"
                      : isTransparent
                        ? "text-slate-200 hover:bg-white/10 hover:text-white"
                        : "text-slate-700 hover:bg-slate-100 hover:text-brand"
                  }`}
                >
                  {item.label}

                  <ChevronDown
                    aria-hidden="true"
                    className={`ml-1 size-3.5 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
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
                          className="block px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand"
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
        </div>

        {/* Right Action Button (Quanta Style Sleek Pill) */}
        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/contact"
            className={`inline-flex h-10 items-center justify-center rounded-full px-5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              isTransparent
                ? "bg-white text-slate-950 hover:bg-slate-200 shadow-md"
                : "bg-brand text-white hover:bg-sky shadow-sm"
            }`}
          >
            Enquire now
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={`grid size-10 place-items-center rounded-full border transition-colors xl:hidden ${
            isTransparent
              ? "border-white/30 text-white hover:bg-white/10"
              : "border-slate-300 text-ink hover:bg-slate-100"
          }`}
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-slate-200 bg-white text-ink xl:hidden"
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
                      className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                        isCurrent(item.href)
                          ? "bg-brand/10 text-brand"
                          : "text-slate-800 hover:bg-slate-100 hover:text-brand"
                      }`}
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
                        className="flex-1 px-4 py-3 text-base font-semibold text-slate-800"
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
                        className="mr-2 grid size-10 place-items-center rounded-lg text-slate-700 hover:bg-white"
                      >
                        <ChevronDown
                          aria-hidden="true"
                          className={`size-5 transition-transform ${
                            expanded ? "rotate-180" : ""
                          }`}
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
                              className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-white hover:text-brand"
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
