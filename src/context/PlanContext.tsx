'use client';

import { FitlogData } from "@/type/page";
import React, {  createContext , ReactNode, useState } from "react";


interface PlanContextProp{
planAdd:FitlogData[],
  setPlanAdd: React.Dispatch<React.SetStateAction<FitlogData[]>>;
  savedIds: FitlogData[],
  setSavedIds:React.Dispatch<React.SetStateAction<FitlogData[]>>;
}
export const PlanContext = createContext<PlanContextProp | undefined>(
  undefined,
);


export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [planAdd, setPlanAdd] = useState<FitlogData[]>([]);
  const [savedIds, setSavedIds] = useState<FitlogData[]>([]);
 
  
  const shareData = {
    planAdd,
    setPlanAdd,
    savedIds,
    setSavedIds,
  };


  return (
  
    <div>
      <PlanContext.Provider value={shareData}>

        {children}
      </PlanContext.Provider>

  </div>
  
  )

    
    
};

export default  PlanProvider;
