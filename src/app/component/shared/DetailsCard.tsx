import { FitlogData } from '@/type/page';
import Image from 'next/image';
import Link from 'next/link'
import SaveForLaterBtn from '../plan-list/SaveForLaterBtn';
import AddPlanBtn from '../plan-list/AddPlanBtn';
interface DetailsCardProps {
  user: FitlogData;
}

const DetailsCard = ({ user }: DetailsCardProps) => {

  const {
    image,
    name,
    muscleGroups,
    description,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
  } = user;
  return (
    <section className=" bg-[#0d0f12] px-4 py-10 text-white">
      <div className="mx-auto justify-center container ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mx-auto">
          <div className="relative h-80 sm:h-[450px] lg:h-full lg:min-h-[600px] overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
              {name}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
              {description}
            </p>

            <div className="mt-4 flex gap-3">
  <span className="rounded-full bg-[#b8ff00] px-4 py-1 text-xs font-bold text-black">
    {muscleGroups[0]}
  </span>

  <span className="rounded-full bg-[#b8ff00] px-4 py-1 text-xs font-bold text-black">
    {muscleGroups[1]}
  </span>
</div>

            <div className="mt-5 overflow-hidden rounded-xl border border-[#252a32] bg-[#151920]">
              <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                <span className="text-[10px] font-bold tracking-wider text-gray-400">
                  EQUIPMENT
                </span>

                <span className="text-xs text-gray-200">{equipment}</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                <span className="text-[10px] font-bold tracking-wider text-gray-400">
                  DIFFICULTY
                </span>

                <span className="text-xs text-gray-200">{difficulty}</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                <span className="text-[10px] font-bold tracking-wider text-gray-400">
                  SETS
                </span>

                <span className="text-xs text-gray-200">{sets}</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                <span className="text-[10px] font-bold tracking-wider text-gray-400">
                  REPS
                </span>

                <span className="text-xs text-gray-200">{reps}</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                <span className="text-[10px] font-bold tracking-wider text-gray-400">
                  DURATION
                </span>

                <span className="text-xs text-gray-200">{duration}</span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between border-b border-[#252a32] px-4 py-3">
                <span className="text-[10px] font-bold tracking-wider text-gray-400">
                  CALORIES
                </span>

                <span className="text-xs text-gray-200">
                  {caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[10px] font-bold tracking-wider text-gray-400">
                  RATING
                </span>

                <span className="text-xs text-gray-200">{rating}</span>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-extrabold tracking-wide">
                INSTRUCTIONS
              </h2>

              <ol className="mt-4 space-y-3">
                {instructions?.map((instruction: string, index: number) => (
                  <li
                    key={index}
                    className="flex gap-3 text-xs leading-5 text-gray-400"
                  >
                    <span className="text-gray-500">{index + 1}.</span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
             
              <AddPlanBtn user={user}/>

             <SaveForLaterBtn user={user}/>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsCard;
