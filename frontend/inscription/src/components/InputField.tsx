import { AlertCircle } from 'lucide-react'

interface InputFieldProps {
  label: string
  type: 'text' | 'email' | 'tel'
  placeholder: string
  value: string
  onChange: (value: string) => void
  error?: string
  hint?: string
  required?: boolean
}

export default function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  hint,
  required
}: InputFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full px-4 py-3 rounded-lg border transition-all duration-200
          focus:ring-2 focus:ring-primary-500 focus:border-primary-500
          ${error 
            ? 'border-red-300 bg-red-50 focus:ring-red-500 focus:border-red-500' 
            : 'border-gray-300 bg-white hover:border-gray-400'
          }
        `}
      />
      {hint && !error && (
        <p className="text-xs text-gray-500">{hint}</p>
      )}
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  )
}
