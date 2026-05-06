import { DigitalProfile } from '../types'

export const getDigitalProfile = (niveau: string, objectifs: string[]): DigitalProfile => {
  const objectifCount = objectifs.length
  
  if (niveau === 'avance' || (niveau === 'intermediaire' && objectifCount >= 3)) {
    return {
      title: 'Acteur Digital',
      emoji: '🚀'
    }
  }
  
  if (niveau === 'intermediaire' || (niveau === 'debutant' && objectifCount >= 2)) {
    return {
      title: 'Apprenant Stratégique',
      emoji: '⚙️'
    }
  }
  
  return {
    title: 'Explorateur Digital',
    emoji: '🔰'
  }
}
