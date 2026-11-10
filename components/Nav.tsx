"use client";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { useSession } from "next-auth/react";

interface NavItem {
  label: string;
  href: string;
}

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const { data: session } = useSession();

  const navStuff: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Make Post", href: "/post" },
    { label: "View", href: "/ideas" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-3 md:px-10 py-3 shadow-sm bg-white z-50">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-1 z-50" onClick={() => setNavOpen(false)}>
        <Image
          src="/logo.png"
          alt="Naija Venture Hub Logo"
          width={500}
          height={500}
          className="w-10 h-10 object-contain"
          priority
        />
        <p className="text-lg font-semibold max-md:hidden">Naija Venture Hub</p>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center text-lg gap-6">
        {navStuff.map((item: NavItem, index: number) => (
          <Link key={index} href={item.href} className="hover:text-emerald-800 transition-colors">
            {item.label}
          </Link>
        ))}
      </div>

      {/* Profile / Sign In Link */}
      <div className="flex items-center gap-3 max-lg:ml-auto">
        <Link href={session ? "/profile" : "/signin"} className="text-lg flex items-center">
          {session?.user?.image ? (
            <img 
              src={session.user.image} 
              alt={session.user?.name ?? "Profile"} 
              className="w-8 h-8 rounded-full object-cover border border-neutral-300"
            />
          ) : (
            <span className="text-sm font-semibold px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors">
              Sign In
            </span>
          )}
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="text-2xl lg:hidden z-50 p-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          {navOpen ? <IoCloseOutline /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Navbar Overlay */}
      {navOpen && (
        <div className="bg-white h-dvh fixed w-full top-0 left-0 flex justify-center items-center lg:hidden z-40">
          <div className="flex flex-col items-center text-xl gap-8">
            {navStuff.map((item: NavItem, index: number) => (
              <Link 
                key={index} 
                href={item.href} 
                onClick={() => setNavOpen(false)}
                className="hover:text-emerald-800 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}