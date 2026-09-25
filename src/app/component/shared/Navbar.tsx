'use client';

import { PlanContext } from '@/context/PlanContext';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const context = useContext(PlanContext);
  const pathname = usePathname();

  if (!context) {
    return null;
  }

  const { planAdd, savedIds } = context;

  return (
    <nav className="border-b border-zinc-800 bg-[#15171D] text-white">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
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

        {/* Navigation */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">
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

       
        <div className="flex items-center gap-5 text-xs">
         
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-zinc-300 hover:text-white"
          >
            <span>Plan</span>

            <span className="rounded-full bg-lime-400 px-2 py-0.5 text-[9px] font-bold text-black">
              {planAdd.length}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-zinc-300 hover:text-white"
          >
            <span>Saved</span>

            <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-[9px] text-zinc-400">
              {savedIds.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
