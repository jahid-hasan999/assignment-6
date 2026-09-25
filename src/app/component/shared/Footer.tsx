import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="  border-b border-zinc-800 bg-[#15171D] text-white  p-4">
      <aside className="grid grid-cols-1 md:grid-cols-2 justify-between container mx-auto">
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
        <p>
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log
          honest.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
