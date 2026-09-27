'use client';

import { PlanContext } from '@/context/PlanContext';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const context = useContext(PlanContext);
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  if (!context) {
    return null;
  }

  const { planAdd, savedIds } = context;

  return (
    <nav className="border-b border-zinc-800 bg-[#15171D] text-white">
      <div className="container mx-auto flex h-14 items-center px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FITLOG"
            width={30}
            height={30}
            className="object-contain"
          />

          <span className="text-sm font-bold tracking-wide">FITLOG</span>
        </div>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
              pathname === '/'
                ? 'bg-[#18220d] text-lime-400'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
              pathname === '/my-plan'
                ? 'bg-[#18220d] text-lime-400'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-3 md:gap-5 text-xs">
          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white"
          >
            <span>Plan</span>

            <span className="rounded-full bg-lime-400 px-2 py-0.5 text-[9px] font-bold text-black">
              {planAdd.length}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white"
          >
            <span>Saved</span>

            <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-[9px] text-zinc-400">
              {savedIds.length}
            </span>
          </Link>

          {/* Hamburger - Mobile Only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md p-1 text-zinc-300 hover:bg-zinc-800 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-zinc-800 bg-[#15171D] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {/* Workout */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`rounded-md px-4 py-3 text-sm ${
                pathname === '/'
                  ? 'bg-[#18220d] text-lime-400'
                  : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              Workout
            </Link>

            {/* My Plan */}
            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className={`rounded-md px-4 py-3 text-sm ${
                pathname === '/my-plan'
                  ? 'bg-[#18220d] text-lime-400'
                  : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              My Plan
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
