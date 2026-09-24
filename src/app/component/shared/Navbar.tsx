import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="border-b border-zinc-800 bg-[#15171D] text-white">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FITLOG"
            width={30}
            height={30}
            className="object-contain"
          />

          <span className="text-sm font-bold tracking-wide">FITLOG</span>
        </Link>

        {/* Navigation */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1">
          <Link
            href="/"
            className="rounded-full bg-[#18220d] px-4 py-1.5 text-xs font-medium text-lime-400"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-4 py-1.5 text-xs text-zinc-400 transition hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Status Badges */}
        <div className="flex items-center gap-5 text-xs">
          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-zinc-300 hover:text-white"
          >
            <span>Plan</span>

            <span className="rounded-full bg-lime-400 px-2 py-0.5 text-[9px] font-bold text-black">
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-zinc-300 hover:text-white"
          >
            <span>Saved</span>

            <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-[9px] text-zinc-400">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
