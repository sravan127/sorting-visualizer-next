import { sortingAlgorithmType } from "@/lib/types";
import { MIN_ANIMATION_SPEED } from "@/lib/utils";
import { createContext, useContext, useState } from "react";

interface SortingAlgorithmContextType{
    array: number[],
    setArray: (array: number[]) => void,
    selectedAlgorithm: sortingAlgorithmType,
    setSelectedAlgorithm: (algo: sortingAlgorithmType) => void,
    isSorting: boolean,
    setIsSorting: (isSorting: boolean) => void,
    sortSpeed: number,
    setSortSpeed: (speed: number) => void,
    isAnimationComplete: boolean,
    setIsAnimationComplete: (isAnimationComplete: boolean) => void,
    resetArrayAndAnimation: () => void,
    sortArray: ()=> void,
}


const SortingAlgorithmContext = createContext<SortingAlgorithmContextType | undefined> (undefined);


export const SortingAlgorithmProvider = function({children} : {children : React.ReactNode}){

  const [array, setArray] = useState<number[]> ([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<sortingAlgorithmType> ("bubble");
  const [isSorting, setIsSorting] = useState<boolean> (false);
  const [sortSpeed, setSortSpeed] = useState<number> (MIN_ANIMATION_SPEED);
  const [isAnimationComplete, setIsAnimationComplete] = useState<boolean> (false);

  const resetArrayAndAnimation = ()=>{

  }

  const sortArray= ()=>{

  }

  const value= {
    array,
    setArray,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isSorting,
    setIsSorting,
    sortSpeed,
    setSortSpeed,
    isAnimationComplete,
    setIsAnimationComplete,
    resetArrayAndAnimation,
    sortArray,
  }

  return <SortingAlgorithmContext.Provider value={value}>
    {children}
  </SortingAlgorithmContext.Provider>
}


export const useSortingAlgorithmContext = ()=>{
  const context = useContext(SortingAlgorithmContext);

  if(!context){
    throw new Error("useSortingAlgorithmContext must be used inside a SortingAlgorithmProvider");
  }

  return context;
}