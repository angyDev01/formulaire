import { Shield, Check, AlertCircle } from 'lucide-react'

interface PrivacyCheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  error?: string
}

export default function PrivacyCheckbox({ checked, onChange, error }: PrivacyCheckboxProps) {
  return (
    <div className="space-y-2">
      <label
        className={`
          flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-200
          ${checked 
            ? 'border-green-500 bg-green-50' 
            : 'border-gray-200 bg-gray-50 hover:border-primary-300'
          }
          ${error ? 'border-red-300 bg-red-50' : ''}
        `}
      >
        <div className={`
          w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200
          ${checked 
            ? 'bg-green-500 border-green-500' 
            : 'border-2 border-gray-300'
          }
        `}>
          {checked && <Check className="w-3.5 h-3.5 text-white" />}
        </div>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div className="flex-1">
          <span className="text-sm text-gray-700 font-medium">
            J'accepte les règles de confidentialité 🔐
          </span>
          <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
            <Shield className="w-3.5 h-3.5" />
            Tes données sont sécurisées et protégées
          </p>
        </div>
      </label>
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  )
}
