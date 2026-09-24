'use client';

import { FitlogData } from "@/type/page";
import React, {  createContext , ReactNode, useState } from "react";


interface PlanContextProp{
planIds:FitlogData[],
  setPlanIds: React.Dispatch<React.SetStateAction<FitlogData[]>>;
  savedIds: FitlogData[],
  setSavedIds:React.Dispatch<React.SetStateAction<FitlogData[]>>;
}
export const PlanContex = createContext<PlanContextProp | undefined>(
  undefined,
);


export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [planIds, setPlanIds] = useState<FitlogData[]>([]);
  const [savedIds, setSavedIds] = useState<FitlogData[]>([]);
 
  
  const shareData = {
    planIds,
    setPlanIds,
    savedIds,
    setSavedIds,
  };


  return (
  
    <div>
      <PlanContex.Provider value={shareData}>

        {children}
      </PlanContex.Provider>

  </div>
  
  )

    
    
};

export default  PlanProvider;
