import { Loader2, ArrowRight } from 'lucide-react'

interface SubmitButtonProps {
  isLoading: boolean
  disabled: boolean
}

export default function SubmitButton({ isLoading, disabled }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`
        w-full py-4 px-6 rounded-xl font-semibold text-white
        flex items-center justify-center gap-2
        transition-all duration-300 transform
        ${disabled
          ? 'bg-gray-300 cursor-not-allowed'
          : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
        }
      `}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Inscription en cours...</span>
        </>
      ) : (
        <>
          <span>S'inscrire maintenant</span>
          <ArrowRight className="w-5 h-5" />
        </>
      )}
    </button>
  )
}
