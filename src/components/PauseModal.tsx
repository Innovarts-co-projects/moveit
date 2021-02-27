
import { useContext, useEffect } from 'react';
import { CountdownContexts } from '../contexts/CountdownContexts';

import styles from '../styles/components/pauseModal.module.css';



export function PauseModal() {




   const { closePauseModal } = useContext(CountdownContexts);
   return (
      <div className={styles.modalOverlay}>
         <div className={styles.modalContent}>
            <header>
               Relogio Pausado
                 <img className={styles.clock} src="assets/pauseTime.svg" />
            </header>
            <main>
               <button onClick={closePauseModal}>
                  <img src="assets/icons/close.svg" alt="" />
               </button>

               <p> Você tem 2 minutos para voltar ou o relógio sera reiniciado. </p>
            </main>
         </div>
      </div>
   )
}