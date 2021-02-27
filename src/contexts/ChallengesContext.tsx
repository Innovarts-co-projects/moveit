import { createContext, useState, ReactNode, useEffect } from 'react';
import { LevelUpModal } from '../components/LevelUpModal';
import cookies from 'js-cookie';
import challenges from '../../challenges.json';


interface Challenge {

   type: 'type' | 'eye',
   description: string,
   amount: number,
};

interface ChallengesContextData {

   level: number;
   currentXp: number;
   xpToNextLevel: number;
   challengesC: number;
   startNewChallenge: () => void;
   levelUp: () => void;
   activeChallenge: Challenge;
   resetChallenge: () => void;
   completeChallenge: () => void;
   closeLevalUpModal: () => void;
};

interface ChallengesProviderProps {

   children: ReactNode;
   level: number;
   currentXp: number;
   challengesC: number;

};

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
   children,
   ...rest
}: ChallengesProviderProps) {

   const [level, setLevel] = useState(rest.level),
      [currentXp, setCurrentXP] = useState(rest.currentXp),
      [challengesC, setChallengesC] = useState(rest.challengesC),
      [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

   const [activeChallenge, setActiveChallenge] = useState(null);

   const xpToNextLevel = Math.pow((level + 1) * 5, 2);

   useEffect(() => {

      Notification.requestPermission();
   }, []);

   useEffect(() => {

      cookies.set('level', String(level));
      cookies.set('currentXp', String(currentXp));
      cookies.set('challengesC', String(challengesC));

   }, [level, currentXp, challengesC])

   function levelUp() {

      setLevel(level + 1);
      setIsLevelUpModalOpen(true);
   };

   function closeLevalUpModal() {

      setIsLevelUpModalOpen(false)
   }

   function startNewChallenge() {

      const ramdomChallenge = Math.floor(Math.random() * challenges.length)
      const challenge = challenges[ramdomChallenge];

      setActiveChallenge(challenge);

      new Audio('assets/notification.mp3').play();

      if (Notification.permission === 'granted') {

         new Notification('Novo desafio 💪', {

            body: `Valendo ${challenge.amount}xp`,
            icon: 'assets/favicon.png'
         });
      }
   };

   function resetChallenge() {

      setActiveChallenge(null)
   };

   function completeChallenge() {

      if (!activeChallenge) {

         return;
      }

      const { amount } = activeChallenge;

      let finalXp = currentXp + amount;

      if (finalXp >= xpToNextLevel) {

         finalXp -= xpToNextLevel
         levelUp();
      }

      setCurrentXP(finalXp)
      setActiveChallenge(null)
      setChallengesC(challengesC + 1)
   };

   return (

      <ChallengesContext.Provider value={{
         level,
         currentXp,
         challengesC,
         startNewChallenge,
         levelUp,
         activeChallenge,
         resetChallenge,
         xpToNextLevel,
         completeChallenge,
         closeLevalUpModal
      }}>
         {children}
         {isLevelUpModalOpen && <LevelUpModal />}
      </ChallengesContext.Provider>
   )
};