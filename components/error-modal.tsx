import { AlertCircle } from "lucide-react"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

interface ErrorModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ErrorModal({ isOpen, onClose }: ErrorModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <AlertCircle className="h-12 w-12 text-red-500" />
          </div>
          <DialogTitle className="text-center">Erro ao enviar mensagem</DialogTitle>
          <DialogDescription className="text-center">
            Não foi possível enviar sua mensagem. Por favor, tente novamente mais tarde.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4">
          <Button onClick={onClose} variant="destructive">
            Tentar Novamente
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 