'use client';

import { PlanContext } from '@/context/PlanContext';
import { FitlogData } from '@/type/page';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import Loading from './Loading';
import SortBy from '../component/shared/SortBy';
import { toast } from 'react-toastify';

const MyPlanPage = () => {
  const context = useContext(PlanContext);

  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

  const [loading, setLoading] = useState(true);

  const [doneIds, setDoneIds] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'duration' | 'calories' | 'rating'>(
    'duration',
  );

  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Loading state
  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (!context) {
    throw new Error('MyPlanPage must be used inside PlanProvider');
  }

  const { planAdd, setPlanAdd, savedIds, setSavedIds } = context;

  const currentItems = activeTab === 'today' ? planAdd : savedIds;

  // Metrics
  const exercises = planAdd.length;

  const minutes = planAdd.reduce(
    (total, item) => total + Number(item.duration || 0),
    0,
  );

  const calories = planAdd.reduce(
    (total, item) => total + Number(item.caloriesBurned || 0),
    0,
  );


 const handleRemoveFromPlan = (id: string | number) => {
   setPlanAdd(prev => prev.filter(item => String(item.id) !== String(id)));

   toast.success('Removed from today’s plan');
 };


 const handleRemoveSaved = (id: string | number) => {
   setSavedIds(prev => prev.filter(item => String(item.id) !== String(id)));

   toast.success('Removed from saved');
 };

 
  const handleMarkDone = (id: string | number) => {
    setDoneIds(prev => {
      if (prev.includes(String(id))) {
        return prev.filter(itemId => itemId !== String(id));
      }

      return [...prev, String(id)];
    });
  };

  const sortedItems = [...currentItems].sort((a, b) => {
    let valueA = 0;
    let valueB = 0;

    if (sortBy === 'duration') {
      valueA = Number(a.duration || 0);
      valueB = Number(b.duration || 0);
    }

    if (sortBy === 'calories') {
      valueA = Number(a.caloriesBurned || 0);
      valueB = Number(b.caloriesBurned || 0);
    }

    if (sortBy === 'rating') {
      valueA = Number(a.rating || 0);
      valueB = Number(b.rating || 0);
    }

    if (sortOrder === 'asc') {
      return valueA - valueB;
    }

    return valueB - valueA;
  });
  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Exercises */}
          <div className="rounded-xl border border-[#252a32] bg-[#151920] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Exercises
            </p>

            <h2 className="mt-2 text-3xl font-bold">{exercises}</h2>
          </div>

          <div className="rounded-xl border border-[#252a32] bg-[#151920] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Minutes
            </p>

            <h2 className="mt-2 text-3xl font-bold">{minutes}</h2>
          </div>

          <div className="rounded-xl border border-[#252a32] bg-[#151920] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Calories
            </p>

            <h2 className="mt-2 text-3xl font-bold">{calories}</h2>
          </div>
        </div>

        <div className="mt-10 border-b border-[#252a32]">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('today')}
              className={`pb-4 text-sm font-semibold transition ${
                activeTab === 'today'
                  ? 'border-b-2 border-[#b8ff00] text-[#b8ff00]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab('saved')}
              className={`pb-4 text-sm font-semibold transition ${
                activeTab === 'saved'
                  ? 'border-b-2 border-[#b8ff00] text-[#b8ff00]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Saved
            </button>
          </div>

          <div>
            <SortBy
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
          </div>
        </div>

        {loading ? (
          <Loading />
        ) : currentItems.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-extrabold">NOTHING HERE YET</h2>

            <p className="mt-3 max-w-md text-sm text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 rounded-lg bg-[#b8ff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#a8eb00]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {sortedItems.map((item: FitlogData) => {
              const isDone = doneIds.includes(String(item.id));

              return (
                <div
                  key={item.id}
                  className={`rounded-xl border border-[#252a32] bg-[#151920] p-3 transition ${
                    isDone ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2
                        className={`text-xs font-extrabold uppercase ${
                          isDone ? 'line-through' : ''
                        }`}
                      >
                        {item.name}
                      </h2>

                      <p className="mt-1 text-[10px] text-gray-400">
                        {item.equipment}
                      </p>

                      <div className="mt-2 flex flex-wrap gap-4 text-[9px] text-gray-400">
                        <span>◷ {item.duration} min</span>

                        <span>🔥 {item.caloriesBurned} kcal</span>

                        <span> ⭐ {item.rating}</span>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      <Link
                        href={`/library/${item.id}`}
                        className="rounded-full border border-[#343a44] px-4 py-2 text-[10px] font-medium text-gray-300 transition hover:bg-[#20242b] hover:text-white"
                      >
                        View Details
                      </Link>

                      {activeTab === 'today' && (
                        <button
                          onClick={() => handleMarkDone(item.id)}
                          className={`flex items-center gap-1 rounded-full px-4 py-2 text-[10px] font-semibold transition ${
                            isDone
                              ? 'bg-[#b8ff00] text-black'
                              : 'bg-[#b8ff00] text-black hover:bg-[#a8eb00]'
                          }`}
                        >
                          <span>✓</span>

                          {isDone ? 'Done' : 'Mark as Done'}
                        </button>
                      )}

                      <button
                        onClick={() =>
                          activeTab === 'today'
                            ? handleRemoveFromPlan(item.id)
                            : handleRemoveSaved(item.id)
                        }
                        className="px-1 text-sm text-gray-500 transition hover:text-white"
                        aria-label="Remove workout"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;
