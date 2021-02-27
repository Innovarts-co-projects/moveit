import { useContext } from "react";
import { CountdownContexts, CountdownProvider } from "../contexts/CountdownContexts";
import styles from "../styles/components/countdown.module.css";



export function Countdown() {

   const {

      minutes,
      seconds,
      hasFinished,
      isActive,
      stopCountdown,
      startCountDown,
      pauseCountDown,
      playCountdown,
      isPaused,
   } = useContext(CountdownContexts)

   const
      [ML, MR] = String(minutes).padStart(2, '0').split(''),
      [SL, SR] = String(seconds).padStart(2, '0').split('');

   return (
      <div>

         <div className={styles.countdownContainer}>
            <div>
               <span>{ML}</span>
               <span>{MR}</span>

            </div>
            <span>:</span>
            <div>
               <span>{SL}</span>
               <span>{SR}</span>
            </div>
         </div>
         {/*  */}
         { hasFinished ? (

            <button
               disabled

               className={styles.countdownButton}>
               O ciclo acabou
               <span><img src="assets/icons/done.png" alt="" /></span>
            </button>
         ) :
            (
               <>
                  {isActive ?
                     (
                        <div className={styles.countdownButtonContainer}>
                           <button
                              onClick={stopCountdown}
                              type='button'
                              className={`${styles.countdownButton} ${styles.activeCountdownButton}`}>
                              Abandonar ciclo
                        </button>

                           {isPaused ? (
                              <button
                                 className={styles.pauseButton}
                                 onClick={playCountdown}>
                                 <img src="assets/play.png" alt="" />
                              </button>
                           ) : (
                              <button
                                 className={styles.pauseButton}
                                 onClick={pauseCountDown}>
                                 <img src="assets/pause.png" alt="" />
                              </button>
                           )
                           }
                        </div>
                     ) :
                     (
                        <button
                           onClick={startCountDown}
                           type='button'
                           className={styles.countdownButton}>
                           Iniciar
                        </button>
                     )}
               </>
            )}
      </div>
   )
}