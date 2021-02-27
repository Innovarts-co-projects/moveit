import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from '../contexts/ChallengesContext';
import { PauseModal } from '../components/PauseModal';

interface CountdownContextsData {

   minutes: number;
   seconds: number;
   hasFinished: boolean;
   isActive: boolean;
   isPaused: boolean;
   startCountDown: () => void;
   stopCountdown: () => void;
   pauseCountDown: () => void;
   playCountdown: () => void;
   closePauseModal: () => void;
}

interface CountdownProviderProps {

   children: ReactNode;
}

let CountdownTimeout: NodeJS.Timeout;
let PauseCountdown: NodeJS.Timeout;

export const CountdownContexts = createContext({} as CountdownContextsData)

export function CountdownProvider({ children }: CountdownProviderProps) {

   const { startNewChallenge } = useContext(ChallengesContext)

   const
      [time, settime] = useState(0.05 * 60),
      [isActive, setIsactive] = useState(false),
      [hasFinished, setHasFinished] = useState(false),
      [isPaused, setIsPaused] = useState(false),
      [isPauseModalOpen, setIsPauseModalOpen] = useState(false);

   const
      minutes = Math.floor(time / 60),
      seconds = Math.floor(time % 60);

   function startCountDown() {

      setIsactive(true)
   };

   function stopCountdown() {

      clearTimeout(CountdownTimeout);
      setIsactive(false);
      settime(30 * 60);
      setHasFinished(false);
      setIsPaused(false);
   };

   function pauseCountDown() {

      clearTimeout(CountdownTimeout);
      setIsPaused(true);
      setIsPauseModalOpen(true);

      PauseCountdown = setTimeout(() => {

         stopCountdown();
         closePauseModal();
      }, 120000);

   };

   function playCountdown() {

      setIsPaused(false);
      clearTimeout(PauseCountdown);
   }

   function closePauseModal() {

      setIsPauseModalOpen(false);
      playCountdown();
   };

   useEffect(() => {

      if (isActive && time > 0 && !isPaused) {

         CountdownTimeout = setTimeout(() => {

            settime(time - 1)
         }, 1000)

      } else if (isActive && time === 0) {

         setHasFinished(true);
         setIsactive(false);
         startNewChallenge();
      }

   }, [isActive, time, isPaused]);

   return (

      <CountdownContexts.Provider value={{

         minutes,
         seconds,
         hasFinished,
         isActive,
         startCountDown,
         stopCountdown,
         pauseCountDown,
         playCountdown,
         isPaused,
         closePauseModal,
      }}>
         {children}
         {isPauseModalOpen && <PauseModal />}
      </CountdownContexts.Provider>
   )
}