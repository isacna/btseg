import { Clock } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

interface CooldownModalProps {
  isOpen: boolean
  onClose: () => void
  timeLeft: number
}

export function CooldownModal({ isOpen, onClose, timeLeft }: CooldownModalProps) {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <Clock className="h-12 w-12 text-yellow-500" />
          </div>
          <DialogTitle className="text-center">Aguarde para enviar novamente</DialogTitle>
          <DialogDescription className="text-center">
            Por favor, aguarde {minutes}:{seconds.toString().padStart(2, '0')} minutos antes de enviar outra mensagem.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
} 