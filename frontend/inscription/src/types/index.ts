export interface FormData {
  nom: string
  email: string
  telephone: string
  niveau: 'debutant' | 'intermediaire' | 'avance' | ''
  adresse: string
  objectifs: string[]
}

export interface FormErrors {
  nom?: string
  email?: string
  telephone?: string
  niveau?: string
  adresse?: string
  objectifs?: string
  privacy?: string
}

export interface DigitalProfile {
  title: string
  emoji: string
}

export interface ApiPayload {
  nom: string
  email: string
  telephone: string
  niveau: string
  adresse: string
  objectifs: string[]
}
