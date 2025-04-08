import { Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

interface LoadingModalProps {
  isOpen: boolean
}

export function LoadingModal({ isOpen }: LoadingModalProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
          </div>
          <DialogTitle className="text-center">Enviando mensagem...</DialogTitle>
          <DialogDescription className="text-center">
            Por favor, aguarde enquanto enviamos sua mensagem.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
} 