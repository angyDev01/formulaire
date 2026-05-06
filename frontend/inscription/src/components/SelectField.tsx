import { AlertCircle, ChevronDown } from 'lucide-react'

interface SelectFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  error?: string
  required?: boolean
}

export default function SelectField({
  label,
  value,
  onChange,
  options,
  error,
  required
}: SelectFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            w-full px-4 py-3 rounded-lg border transition-all duration-200 appearance-none cursor-pointer
            focus:ring-2 focus:ring-primary-500 focus:border-primary-500
            ${error 
              ? 'border-red-300 bg-red-50 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300 bg-white hover:border-gray-400'
            }
            ${!value ? 'text-gray-400' : 'text-gray-900'}
          `}
        >
          <option value="">Sélectionner un niveau</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
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
