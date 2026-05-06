import { useState } from 'react'
import { FormData, FormErrors } from '../types'
import { validateForm } from '../utils/validation'
import { submitRegistration } from '../utils/api'
import FormHeader from './FormHeader'
/* import SituationSelector from './SituationSelector' */
import InputField from './InputField'
import SelectField from './SelectField'
import TextareaField from './TextareaField'
import ObjectivesField from './ObjectivesField'
import PrivacyCheckbox from './PrivacyCheckbox'
import SubmitButton from './SubmitButton'
import { Sparkles } from 'lucide-react'

interface RegistrationFormProps {
  onSubmitSuccess: (data: FormData) => void
}

const initialFormData: FormData = {
  nom: '',
  email: '',
  telephone: '',
  niveau: '',
  adresse: '',
  objectifs: []
}

const OBJECTIFS_OPTIONS = [
  { value: 'apprendre_competence', label: 'Je veux apprendre une nouvelle compétence' },
  { value: 'gagner_argent', label: 'Je veux apprendre le digital pour gagner de l\'argent' },
  { value: 'ameliorer_competences', label: 'Je veux améliorer mes compétences existantes' },
  { value: 'creer_business', label: 'Je veux créer un business en ligne' }
]

const NIVEAU_OPTIONS = [
  { value: 'Débutant', label: 'Débutant' },
  { value: 'Intermédiaire', label: 'Intermédiaire' },
  { value: 'Avancé', label: 'Avancé' }
]

export default function RegistrationForm({ onSubmitSuccess }: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
    setApiError(null)
  }

  const handleObjectifToggle = (objectif: string) => {
    setFormData(prev => ({
      ...prev,
      objectifs: prev.objectifs.includes(objectif)
        ? prev.objectifs.filter(o => o !== objectif)
        : [...prev.objectifs, objectif]
    }))
    if (errors.objectifs) {
      setErrors(prev => ({ ...prev, objectifs: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setApiError(null)

    const validationErrors = validateForm(formData, privacyAccepted)
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsLoading(true)

    try {
      console.log('Données envoyées:', formData)
      await submitRegistration(formData)
      console.log('succès !')
      onSubmitSuccess(formData)
    } catch (error) {
      console.log('erreur catch:', error)
      setApiError(error instanceof Error ? error.message : 'Une erreur est survenue')
    } finally {
      setIsLoading(false)
    }
  }

  const isFormValid = privacyAccepted && 
    formData.nom.trim() !== '' && 
    formData.email.trim() !== '' && 
    formData.telephone.trim() !== '' && 
    formData.niveau !== '' && 
    formData.adresse.trim() !== '' && 
    formData.objectifs.length > 0

  return (
    <div className="animate-fade-in">
      <FormHeader />
      
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
        {/* Micro-accroche */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-4 border border-primary-100">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <Sparkles className="w-6 h-6 text-primary-500" />
            </div>
            <p className="text-sm sm:text-base text-gray-700 font-medium">
              Découvre ton profil digital et comment démarrer dans les opportunités en ligne 🚀
              <span className="text-gray-500 font-normal"> (1 minute)</span>
            </p>
          </div>
        </div>

        {/* Question d'intention (UX only, not sent to backend) */}
        {/* <SituationSelector /> */}

        {/* Form Fields */}
        <div className="space-y-5">
          <InputField
            label="Nom complet"
            type="text"
            placeholder="Ex: John Doe"
            value={formData.nom}
            onChange={(value) => handleInputChange('nom', value)}
            error={errors.nom}
            required
          />

          <InputField
            label="Email"
            type="email"
            placeholder="Ex: user@example.com"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            error={errors.email}
            required
          />

          <InputField
            label="Téléphone"
            type="tel"
            placeholder="Ex: +22912345678"
            value={formData.telephone}
            onChange={(value) => handleInputChange('telephone', value)}
            error={errors.telephone}
            hint="Format international obligatoire"
            required
          />

          <SelectField
            label="Niveau"
            value={formData.niveau}
            onChange={(value) => handleInputChange('niveau', value)}
            options={NIVEAU_OPTIONS}
            error={errors.niveau}
            required
          />

          <TextareaField
            label="Adresse"
            placeholder="Ex: 123 Rue de l'Exemple, Ville, Pays"
            value={formData.adresse}
            onChange={(value) => handleInputChange('adresse', value)}
            error={errors.adresse}
            required
          />

          <ObjectivesField
            label="Objectifs"
            options={OBJECTIFS_OPTIONS}
            selectedValues={formData.objectifs}
            onToggle={handleObjectifToggle}
            error={errors.objectifs}
            required
          />
        </div>

        {/* Privacy Checkbox */}
        <PrivacyCheckbox
          checked={privacyAccepted}
          onChange={setPrivacyAccepted}
          error={errors.privacy}
        />

        {/* API Error */}
        {apiError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 text-sm">{apiError}</p>
          </div>
        )}

        {/* Submit Button */}
        <SubmitButton
          isLoading={isLoading}
          disabled={!isFormValid || isLoading}
        />
      </form>
    </div>
  )
}
