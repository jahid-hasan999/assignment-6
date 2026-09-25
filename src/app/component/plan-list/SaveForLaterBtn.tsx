'use client';

import { PlanContext } from '@/context/PlanContext';
import { FitlogData } from '@/type/page';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const SaveForLaterBtn = ({ user }: { user: FitlogData }) => {
  const context = useContext(PlanContext);

  if (!context) {
    return <p>NOTHING HERE YET</p>;
  }

  const { savedIds, setSavedIds } = context;

  const handleSaveBtn = () => {
    const alreadySaved = savedIds.some(item => item.id === user.id);

    if (alreadySaved) {
      toast.error('Already saved');
      return;
    }

    setSavedIds(prev => [...prev, user]);

    toast.success('Saved for later');
  };

  return (
    <button
      className="flex items-center gap-2 rounded-lg border border-[#343a44] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#181c22]"
      onClick={handleSaveBtn}
    >
      <span>♡</span>
      Save for later
    </button>
  );
};

export default SaveForLaterBtn;
