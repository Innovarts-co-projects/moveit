
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/profile.module.css';

export function Profile() {

   const { level } = useContext(ChallengesContext);

   return (
      <div className={styles.profileContainer} >
         <img src="https://avatars.githubusercontent.com/u/61845917?s=460&u=5fdfe50c0b5dd2b019f0530f16f90c93d75b1a76&v=4" alt="foto do perfil" />
         <div>
            <strong>Gabriel Silva</strong>
            <p> <img src="assets/icons/level.svg" alt="Level"/> level {level}</p>
         </div>
      </div>
   )
}