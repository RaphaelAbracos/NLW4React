import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'
export function CompletedChallenge(){
  const { challengesCompleted } = useContext(ChallengeContext);
  return(
    <div className={styles.completedChallengesContainer}>
      <span> Desafios completos</span>
      <span>{String(challengesCompleted).padStart(2, '0').split('')}</span>
    </div>
  )
}