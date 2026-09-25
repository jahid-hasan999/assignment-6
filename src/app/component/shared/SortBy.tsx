'use client';

interface SortByProps {
  sortBy: 'duration' | 'calories' | 'rating';
  setSortBy: React.Dispatch<
    React.SetStateAction<'duration' | 'calories' | 'rating'>
  >;

  sortOrder: 'asc' | 'desc';
  setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
}

const SortBy = ({
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}: SortByProps) => {
  return (
    <div className="flex items-center justify-end gap-2">
      <span className="text-[10px] text-gray-500">Sort By</span>

      <div className="relative">
        <select
          value={sortBy}
          onChange={e =>
            setSortBy(e.target.value as 'duration' | 'calories' | 'rating')
          }
          className="appearance-none rounded-lg border border-[#252a32] bg-[#151920] px-3 py-2 pr-8 text-[10px] text-gray-300 outline-none"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>

        {/* Chevron */}
        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-500">
          ˅
        </span>
      </div>

      {/* Ascending / Descending */}
      <button
        onClick={() => setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))}
        className="rounded-lg border border-[#252a32] bg-[#151920] px-3 py-2 text-[10px] text-gray-300 transition hover:border-[#b8ff00] hover:text-[#b8ff00]"
        title={sortOrder === 'asc' ? 'Ascending' : 'Descending'}
      >
        {sortOrder === 'asc' ? '↑' : '↓'}
      </button>
    </div>
  );
};

export default SortBy;
