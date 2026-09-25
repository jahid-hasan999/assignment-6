const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0d0f12] px-4 text-center text-white">
      <div>
        <p className="text-sm font-semibold text-[#b8ff00]">404 ERROR</p>

        <h1 className="mt-3 text-5xl font-extrabold">PAGE NOT FOUND</h1>

        <p className="mt-4 text-sm text-gray-400">
          The workout or page you are looking for does not exist.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-lg  bg-[#b8ff00] px-6 py-3 text-sm font-bold text-black"
        >
          Go to workouts
        </a>
      </div>
    </main>
  );
};

export default NotFound;
