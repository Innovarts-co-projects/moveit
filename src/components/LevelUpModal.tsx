

import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/levelUpModal.module.css';

export function LevelUpModal() {

   const { level, closeLevalUpModal } = useContext(ChallengesContext);

   return (

      <div className={styles.overlay}>
         <div className={styles.container}>
            <header>{level}</header>
            <strong>Parabéns</strong>
            <p>Você alcançou um novo level</p>
            <button
               onClick={closeLevalUpModal}
               className={styles.closeButton} 
               type='button'>
               <img src="assets/icons/close.svg" alt="" />
            </button>
            <button type='button'></button>
         </div>
      </div>
   )
}