const Loading = () => {
  return (
    <div className="flex min-h-[300px] items-center justify-center bg-[#0d0f12]">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-zinc-700 border-t-[#b8ff00]" />

        <p className="mt-4 text-sm text-gray-400">Loading workouts…</p>
      </div>
    </div>
  );
};

export default Loading;
