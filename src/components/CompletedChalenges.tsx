import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/completedChalenges.module.css'

export function CompletedChalenges() {

   const { challengesC } = useContext(ChallengesContext);

   return (
      <div className={styles.CompletedChalengesContainer}>
         <span> Desfios completos</span>
         <span>{challengesC}</span>
      </div>
   )
}