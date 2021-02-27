import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContexts } from '../contexts/CountdownContexts';
import styles from '../styles/components/challengeBox.module.css';

export function ChallengeBox() {

   const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext),
      { stopCountdown } = useContext(CountdownContexts);

   function handleChalengeCompleted() {

      completeChallenge()
      stopCountdown();
   }
   function handleChalengeFailed() {

      resetChallenge()
      stopCountdown();
   }

   return (
      <div className={styles.challengeBoxContainer}>
         {activeChallenge ?
            (
               <div className={styles.challengesActive}>
                  <header> Ganhe {activeChallenge.amount}XP </header>
                  <main>
                     <img src={`assets/icons/${activeChallenge.type}.svg`} />
                     <strong>{activeChallenge.type}</strong>
                     <p>{activeChallenge.description}</p>
                  </main>

                  <footer>
                     <button
                        type='button'
                        className={styles.ChallengeFailed}
                        onClick={handleChalengeFailed}
                     > Falhei </button>

                     <button
                        type='button'
                        className={styles.ChallengeCompleted}
                        onClick={handleChalengeCompleted}
                     > Completei </button>
                  </footer>
               </div>
            ) : (
               <div className={styles.challengesNA}>
                  <strong>Finalize um ciclo para receber um desafio</strong>
                  <div>
                     <img src="assets/icons/level-up.svg" alt="" />
                     <p> Avance de level Completandos desafios! </p>
                  </div>
               </div>
            )}

      </div>
   )
}