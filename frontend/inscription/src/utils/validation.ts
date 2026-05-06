import { FormData, FormErrors } from '../types'

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone: string): boolean => {
  // International phone format: starts with + followed by country code and number
  const phoneRegex = /^\+[1-9]\d{6,14}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export const validateForm = (data: FormData, privacyAccepted: boolean): FormErrors => {
  const errors: FormErrors = {}

  // Nom validation
  if (!data.nom.trim()) {
    errors.nom = 'Le nom est obligatoire'
  } else if (data.nom.trim().length < 2) {
    errors.nom = 'Le nom doit contenir au moins 2 caractères'
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = 'L\'email est obligatoire'
  } else if (!validateEmail(data.email)) {
    errors.email = 'Veuillez entrer un email valide'
  }

  // Phone validation
  if (!data.telephone.trim()) {
    errors.telephone = 'Le téléphone est obligatoire'
  } else if (!validatePhone(data.telephone)) {
    errors.telephone = 'Format international requis (ex: +22912345678)'
  }

  // Niveau validation
  if (!data.niveau) {
    errors.niveau = 'Veuillez sélectionner votre niveau'
  }

  // Adresse validation
  if (!data.adresse.trim()) {
    errors.adresse = 'L\'adresse est obligatoire'
  }

  // Objectifs validation
  if (data.objectifs.length === 0) {
    errors.objectifs = 'Veuillez sélectionner au moins un objectif'
  }

  // Privacy validation
  if (!privacyAccepted) {
    errors.privacy = 'Vous devez accepter les règles de confidentialité'
  }

  return errors
}
