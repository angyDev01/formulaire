import { AlertCircle } from 'lucide-react'

interface TextareaFieldProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
}

export default function TextareaField({
  label,
  placeholder,
  value,
  onChange,
  error,
  required
}: TextareaFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className={`
          w-full px-4 py-3 rounded-lg border transition-all duration-200 resize-none
          focus:ring-2 focus:ring-primary-500 focus:border-primary-500
          ${error 
            ? 'border-red-300 bg-red-50 focus:ring-red-500 focus:border-red-500' 
            : 'border-gray-300 bg-white hover:border-gray-400'
          }
        `}
      />
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  )
}
