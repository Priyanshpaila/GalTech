"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, HelpCircle, User } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { CompanyDetails } from "@/config/companyDetails";

type NavigationItem = CompanyDetails["navigation"][number];

export default function Navbar() {
  const pathname = usePathname();
  const [navigation, setNavigation] = useState<NavigationItem[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    void import("@/config/companyDetails").then(({ companyDetails }) => {
      if (!mounted) return;
      setNavigation([...companyDetails.navigation]);
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

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#ffffff] text-[#2d2c2b] border-b border-[#e2ded9] shadow-sm">
      <nav
        className="page-shell flex h-[72px] items-center justify-between"
        aria-label="Headspace Primary navigation"
      >
        {/* BRAND LOGO: galtech-logo.png */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8]"
          aria-label="GALTech Home"
        >
          <Image
            src="/galtech-logo.png"
            alt="GALTech Infosolutions"
            width={160}
            height={52}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Center Desktop Navigation Links (Headspace Apercu Weight 500, #2d2c2b) */}
        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => {
            const hasChildren = item.children.length > 0;

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex h-10 items-center justify-center rounded-full px-4 text-base font-medium transition-colors hover:bg-[#f9f6f0] hover:text-[#000000] ${
                    isCurrent(item.href)
                      ? "bg-[#f9f6f0] text-[#1d4ed8] font-bold"
                      : "text-[#2d2c2b]"
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
                  className={`flex h-10 items-center justify-center rounded-full px-4 text-base font-medium transition-colors hover:bg-[#f9f6f0] hover:text-[#000000] ${
                    open || isCurrent(item.href)
                      ? "bg-[#f9f6f0] text-[#1d4ed8] font-bold"
                      : "text-[#2d2c2b]"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={`ml-1 size-4 transition-transform duration-200 ${
                      open ? "rotate-180 text-[#1d4ed8]" : "text-[#44423f]"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.98 }}
                      transition={{ duration: 0.16 }}
                      role="menu"
                      className="absolute left-0 top-full z-50 mt-2 min-w-64 overflow-hidden rounded-[20px] border border-[#e2ded9] bg-white py-2 text-[#2d2c2b] shadow-xl"
                    >
                      <Link
                        href={item.href}
                        role="menuitem"
                        onClick={() => setDesktopDropdown(null)}
                        className="block border-b border-[#e2ded9] px-5 py-3 text-sm font-bold text-[#1d4ed8] hover:bg-[#f9f6f0]"
                      >
                        View all {item.label}
                      </Link>

                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          role="menuitem"
                          onClick={() => setDesktopDropdown(null)}
                          className="block px-5 py-3 text-sm font-medium text-[#44423f] transition-colors hover:bg-[#f9f6f0] hover:text-[#2d2c2b]"
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

        {/* Right Side: Log In, Help & Mindful Blue Pill Button (#1d4ed8, 800px radius) */}
        <div className="hidden items-center gap-4 xl:flex">
          <Link
            href="/contact"
            className="text-sm font-medium text-[#44423f] hover:text-[#2d2c2b] transition-colors flex items-center gap-1.5"
          >
            <HelpCircle className="size-4" />
            <span>Help</span>
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-[#44423f] hover:text-[#2d2c2b] transition-colors flex items-center gap-1.5"
          >
            <User className="size-4" />
            <span>Log In</span>
          </Link>

          {/* Headspace Primary Mindful Blue Pill CTA */}
          <Link
            href="/products"
            className="button-pill-blue"
          >
            Try for Free
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-[#e2ded9] bg-white text-[#2d2c2b] hover:bg-[#f9f6f0] transition-colors xl:hidden"
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
            className="overflow-hidden border-t border-[#e2ded9] bg-white text-[#2d2c2b] xl:hidden"
          >
            <div className="page-shell max-h-[calc(100vh-76px)] overflow-y-auto py-6 space-y-2">
              {navigation.map((item) => {
                const hasChildren = item.children.length > 0;
                const expanded = mobileDropdown === item.label;
                if (!hasChildren)
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobile}
                      className={`block rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                        isCurrent(item.href)
                          ? "bg-[#f9f6f0] text-[#1d4ed8]"
                          : "text-[#2d2c2b] hover:bg-[#f9f6f0]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-transparent data-[open=true]:border-[#e2ded9] data-[open=true]:bg-[#f9f6f0]"
                    data-open={expanded}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className="flex-1 px-4 py-3 text-base font-semibold text-[#2d2c2b]"
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
                        className="mr-2 grid size-10 place-items-center rounded-xl text-[#44423f] hover:bg-white"
                      >
                        <ChevronDown
                          aria-hidden="true"
                          className={`size-5 transition-transform ${
                            expanded ? "rotate-180 text-[#1d4ed8]" : ""
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
                              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-[#44423f] transition-colors hover:bg-white hover:text-[#1d4ed8]"
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
              <div className="pt-4 border-t border-[#e2ded9] flex flex-col gap-3">
                <Link
                  href="/products"
                  onClick={closeMobile}
                  className="button-pill-blue text-center w-full"
                >
                  Try for Free
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="button-pill-dark text-center w-full"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

