'use client';

import { PlanContext } from "@/context/PlanContext";
import { FitlogData } from "@/type/page";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddPlanBtn = ({ user }: { user: FitlogData }) => {
  const context = useContext(PlanContext);
  if (!context) {
    return <p>NOTHING HERE YET</p>
  }

  const { planAdd, setPlanAdd } = context;

  const handleAdd = () => {
    const addCard = planAdd.some(
      (item: FitlogData) => item.id === user.id
    );

    if (addCard) {
      toast.error("allready added");
      return;
    }

    setPlanAdd([...planAdd, user]);
    toast(" Add to today's plan");
  }
  return (
    <div>
      <button
        className="flex items-center gap-2 rounded-lg bg-[#b8ff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#a8eb00]"
        onClick={handleAdd}
      >
        <span>▣</span>
        Add to today's plan
      </button>
    </div>
  );
};

export default AddPlanBtn;
