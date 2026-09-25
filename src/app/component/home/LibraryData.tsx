import { FitlogData } from '@/type/page';
import LibraryCard from '../shared/LibraryCard';

const getData = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  return res.json();
};

const LibraryData = async () => {
  const datas: FitlogData[] = await getData();

  return (
    <section id="library" className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-wide">THE LIBRARY</h1>
      <p className="text-gray-400 mt-1 mb-6">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas.map(item => (
          <LibraryCard key={item.id} user={item} />
        ))}
      </div>
    </section>
  );
};

export default LibraryData;
