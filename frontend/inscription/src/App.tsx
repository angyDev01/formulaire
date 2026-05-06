import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import SuccessScreen from './components/SuccessScreen'
import { FormData } from './types'
import { getDigitalProfile } from './utils/scoring'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState<FormData | null>(null)

  const handleSubmitSuccess = (data: FormData) => {
    setSubmittedData(data)
    setIsSubmitted(true)
  }

  const digitalProfile = submittedData ? getDigitalProfile(submittedData.niveau, submittedData.objectifs) : null

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {!isSubmitted ? (
          <RegistrationForm onSubmitSuccess={handleSubmitSuccess} />
        ) : (
          <SuccessScreen 
            name={submittedData?.nom || ''} 
            digitalProfile={digitalProfile || { title: '', emoji: '' }}
          />
        )}
      </div>
    </div>
  )
}

export default App
