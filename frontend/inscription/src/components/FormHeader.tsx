import { Users, Rocket } from 'lucide-react'

export default function FormHeader() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg mb-4">
        <Rocket className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Rejoins la communauté digitale
      </h1>
      <p className="text-gray-600 flex items-center justify-center gap-2">
        <Users className="w-4 h-4" />
        <span>Inscris-toi et démarre ton parcours</span>
      </p>
    </div>
  )
}
