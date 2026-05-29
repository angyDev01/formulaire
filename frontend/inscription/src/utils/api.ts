import { FormData } from '../types'


const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY || ''


const OBJECTIF_LABELS: Record<string, string> = {
    "apprendre_competence": "Je veux apprendre une nouvelle compétence",
    "gagner_argent": "Je veux apprendre le digital pour gagner de l'argent",
    "ameliorer_competences": "Je veux améliorer mes compétences existantes",
    "creer_business": "Je veux créer un business en ligne"
  }

export const submitRegistration = async (data: FormData): Promise<{ success: boolean; message: string }> => {
  // Prepare the payload for Django backend
  const payload = {
    nom: data.nom,
    email: data.email,
    telephone: data.telephone,
    niveau: data.niveau,
    adresse: data.adresse,
    objectif: OBJECTIF_LABELS[data.objectifs[0]] || 'Autre' // Assuming the first selected objectif is the primary one
  }

  

  try {
    const response = await fetch(`${API_URL}/api/api/`, {
      
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(API_KEY && { 'Authorization': `Bearer ${API_KEY}` })
      },
      body: JSON.stringify(payload)
      
    })
    

    if (!response.ok) {
      console.log('Payload sent to API:', response)
      
      const errorData = await response.json().catch(() => ({}))
      //afficher l'erreur complète pour debuggage
      const errorMessage = errorData.detail 
      || 'Erreur lors de l\'inscription'
      || JSON.stringify(errorData)
      ||`Erreur ${response.status}: ${response.statusText}`
      console.log('erreur django', JSON.stringify(errorData, null, 2))
      throw new Error(errorMessage)
    }
    

    const result = await response.json()
    console.log('succès', result)
    return { success: true, message: result.message || 'Inscription réussie' }
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}
