'use client';

import { PlanContext } from '@/context/PlanContext';
import { FitlogData } from '@/type/page';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const AddPlanBtn = ({ user }: { user: FitlogData }) => {
  const context = useContext(PlanContext);

  if (!context) {
    return <p>NOTHING HERE YET</p>;
  }

  const { planAdd, setPlanAdd } = context;

  const handleAdd = () => {
    // Maxium5 workouts
    if (planAdd.length >= 5) {
      toast.error('You can add maximum 5 workouts.');
      return;
    }

    // Duplicate check
    const alreadyAdded = planAdd.some(item => item.id === user.id);

    if (alreadyAdded) {
      toast.error('Already added');
      return;
    }

    // Add workout
    setPlanAdd(prev => [...prev, user]);

    toast.success("Added to today's plan");
  };

  return (
    <button
      className="flex items-center gap-2 rounded-lg bg-[#b8ff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#a8eb00]"
      onClick={handleAdd}
    >
      <span>▣</span>
      Add to today's plan
    </button>
  );
};

export default AddPlanBtn;
