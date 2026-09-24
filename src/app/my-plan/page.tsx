'use client';

import { PlanContext } from "@/context/PlanContext";
import { useContext, useState } from "react";

const MyPlanPage = () => {
  const context = useContext(PlanContext)
  
  return (
    <div>
      <h1 className="text-5xl text-white my-3.5 ml-3.5 font-bold">MY PLAN</h1>
      <p>Cap of five lifts for today.Finish them, then load more</p>
    </div>
  );
};

export default MyPlanPage;
