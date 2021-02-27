import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge , resetChallenge, completeChallenge } = useContext(ChallengeContext);
  const { resetCountdown } = useContext(CountdownContext)
  function handleChallengesSucceded(){
    completeChallenge();
    resetCountdown();
  }

  function handleChallengesFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengesFailed}
            >Falhei</button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengesSucceded}
            >Completei</button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber desafios</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
          Avance de level completando desafios.
        </p>
          </div>
        )}
    </div>
  )
}