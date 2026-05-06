/* import { useState } from 'react'
import { User, HelpCircle, TrendingUp, DollarSign } from 'lucide-react'

const SITUATIONS = [
  { id: 'debutant_total', label: 'Débutant total', icon: User },
  { id: 'essaye_bloque', label: 'Déjà essayé mais bloqué', icon: HelpCircle },
  { id: 'bases_pas_revenus', label: 'Bases mais pas de revenus', icon: TrendingUp },
  { id: 'deja_revenus', label: 'Déjà des revenus', icon: DollarSign }
]

export default function SituationSelector() {
  const [selectedSituation, setSelectedSituation] = useState<string | null>(null)

  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
      <p className="text-sm font-medium text-gray-700 mb-3">
        Quelle est ta situation actuelle ? <span className="text-gray-400 font-normal">(facultatif)</span>
      </p>
      <div className="grid grid-cols-2 gap-2">
        {SITUATIONS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setSelectedSituation(selectedSituation === id ? null : id)}
            className={`
              flex items-center gap-2 p-3 rounded-lg text-left text-sm transition-all duration-200
              ${selectedSituation === id 
                ? 'bg-primary-100 border-2 border-primary-500 text-primary-700' 
                : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300 hover:bg-primary-50'
              }
            `}
          >
            <Icon className={`w-4 h-4 flex-shrink-0 ${selectedSituation === id ? 'text-primary-500' : 'text-gray-400'}`} />
            <span className="leading-tight">{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
 */