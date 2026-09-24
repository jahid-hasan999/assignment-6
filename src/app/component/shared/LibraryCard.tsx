import Image from 'next/image';
import Link from 'next/link';
import { Clock, Flame, Star } from 'lucide-react';
import { FitlogData } from '@/type/page';

interface CardProps {
  user: FitlogData;
}

const LibraryCard = ({ user }: CardProps) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = user;

  return (
    <Link
      href={`/library/${id}`}
      className="block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
    >
      <div className="relative bg-gray-100">
        <Image src={image} alt={name} width={450} height={400} />
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {muscleGroups.map(group => (
            <span
              key={group}
              className="bg-indigo-50 text-indigo-700 text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wide"
            >
              {group}
            </span>
          ))}
        </div>

        <h2 className="text-lg font-bold text-gray-800 uppercase">{name}</h2>
        <p className="text-sm text-gray-500 mb-4">{equipment}</p>

        <div className="flex items-center justify-between border-t pt-3 text-sm text-gray-700">
          <span className="flex items-center gap-1">
            <Clock size={16} /> {duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={16} className="text-orange-500" /> {caloriesBurned}{' '}
            kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />{' '}
            {rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;
