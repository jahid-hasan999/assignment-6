import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-10 md:grid-cols-2 bg-[#15171D] rounded-2xl mt-6"
    >
      {/* Left Content */}
      <div>
        <span className="text-sm font-semibold text-yellow-300 px-1.5">
          WORKOUT LIBRARY
        </span>

        <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
          TRAIN WITH INTENT. LOG <br />
          EVERY SET.
        </h1>

        <p className="my-4 max-w-xl text-gray-400">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>

        <Link
          href="#library"
          className="inline-flex items-center gap-2 rounded-2xl bg-lime-400 px-5 py-3 font-bold text-black transition hover:bg-lime-300"
        >
          BROWSE WORKOUTS
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </Link>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end">
        <Image
          src="/banner.png"
          alt="Workout"
          width={450}
          height={450}
          className="h-auto w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
};

export default Banner;
