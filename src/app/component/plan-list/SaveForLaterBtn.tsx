'use client';

import { PlanContext } from "@/context/PlanContext";
import { FitlogData } from "@/type/page";
import { useContext } from "react";
import { toast } from "react-toastify";


const SaveForLaterBtn = ({ user }: { user: FitlogData }) => {
  const context = useContext(PlanContext);
  if (!context) {
    return <p>NOTHING HERE YET</p>;
  };
   const { savedIds, setSavedIds } = context;
  
    const handleSaveBtn = () => {
      const addCardSave = savedIds.some(
        (item: FitlogData) => item.id === user.id
      );
  
      if (addCardSave) {
        toast.error("allready added");
        return;
      }
  
      setSavedIds([...savedIds, user]);
      toast("save data");
    }

  


  return (
    <div>
      <button
        className="flex items-center gap-2 rounded-lg border border-[#343a44] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#181c22]"
        onClick={handleSaveBtn}
      >
        <span>♡</span>
        Save for later
      </button>
    </div>
  );
};

export default SaveForLaterBtn;
