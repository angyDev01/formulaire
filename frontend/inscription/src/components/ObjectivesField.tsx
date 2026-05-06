import { AlertCircle, Check } from 'lucide-react'

interface ObjectivesFieldProps {
  label: string
  options: { value: string; label: string }[]
  selectedValues: string[]
  onToggle: (value: string) => void
  error?: string
  required?: boolean
}

export default function ObjectivesField({
  label,
  options,
  selectedValues,
  onToggle,
  error,
  required
}: ObjectivesFieldProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
        <span className="text-gray-400 font-normal ml-2">(plusieurs choix possibles)</span>
      </label>
      <div className="space-y-2">
        {options.map(option => {
          const isSelected = selectedValues.includes(option.value)
          return (
            <label
              key={option.value}
              className={`
                flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-200
                ${isSelected 
                  ? 'border-primary-500 bg-primary-50 shadow-sm' 
                  : 'border-gray-200 bg-white hover:border-primary-300 hover:bg-gray-50'
                }
              `}
            >
              <div className={`
                w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200
                ${isSelected 
                  ? 'bg-primary-500 border-primary-500' 
                  : 'border-2 border-gray-300'
                }
              `}>
                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              </div>
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggle(option.value)}
                className="sr-only"
              />
              <span className={`text-sm ${isSelected ? 'text-gray-900 font-medium' : 'text-gray-700'}`}>
                {option.label}
              </span>
            </label>
          )
        })}
      </div>
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  )
}
