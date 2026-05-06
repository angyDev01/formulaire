import { CheckCircle2, Shield, Users, BookOpen, Rocket, MessageCircle, Heart, Ban, Gem } from 'lucide-react'
import { DigitalProfile } from '../types'

const whatsappLink = import.meta.env.VITE_WHATSAPP_LINK
const telegramLink = import.meta.env.VITE_TELEGRAM_LINK

interface SuccessScreenProps {
  name: string
  digitalProfile: DigitalProfile
}

export default function SuccessScreen({ name, digitalProfile }: SuccessScreenProps) {
  const firstName = name.split(' ')[0]

  return (
    <div className="animate-slide-up space-y-6">
      {/* Success Header */}
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Inscription réussie, bienvenue {firstName} 🎉
        </h1>
        
        {/* Digital Profile Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-blue-100 px-4 py-2 rounded-full mt-4">
          <span className="text-2xl">{digitalProfile.emoji}</span>
          <span className="font-semibold text-primary-700">{digitalProfile.title}</span>
        </div>
      </div>

      {/* Community Benefits */}
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Gem className="w-5 h-5 text-primary-500" />
          Les avantages de la communauté
        </h2>
        <div className="grid gap-4">
          <div className="flex items-start gap-3 p-3 bg-primary-50 rounded-lg">
            <BookOpen className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-900">Formations exclusives</p>
              <p className="text-sm text-gray-600">Accède à des contenus premium pour développer tes compétences digitales</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
            <Rocket className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-900">Opportunités digitales</p>
              <p className="text-sm text-gray-600">Découvre les meilleures opportunités pour générer des revenus en ligne</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
            <Users className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-900">Accompagnement personnalisé</p>
              <p className="text-sm text-gray-600">Bénéficie d'un suivi et de conseils adaptés à ton niveau</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
            <Heart className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-900">Entraide communautaire</p>
              <p className="text-sm text-gray-600">Rejoins une communauté bienveillante qui s'entraide au quotidien</p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Rules */}
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-primary-500" />
          Règles de la communauté
        </h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-4 h-4 text-green-600" />
            </div>
            <span>Respect et bienveillance envers tous les membres</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Ban className="w-4 h-4 text-red-600" />
            </div>
            <span>Pas de spam ni de promotions non autorisées</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Gem className="w-4 h-4 text-primary-600" />
            </div>
            <span>Partage de valeur et contenu de qualité</span>
          </div>
        </div>
      </div>

      {/* Security Message */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-4 flex items-center gap-3">
        <Shield className="w-6 h-6 text-green-400 flex-shrink-0" />
        <p className="text-sm text-gray-300">
          <span className="text-white font-medium">Tes données sont sécurisées 🔐</span>
          <br />
          Nous respectons ta vie privée et ne partageons jamais tes informations.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href={whatsappLink}
          className="flex items-center justify-center gap-3 py-4 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:shadow-lg hover:-translate-y-0.5"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>Rejoindre WhatsApp</span>
        </a>
        <a
          href={telegramLink}
          className="flex items-center justify-center gap-3 py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:shadow-lg hover:-translate-y-0.5"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          <span>Rejoindre Telegram</span>
        </a>
      </div>
    </div>
  )
}

