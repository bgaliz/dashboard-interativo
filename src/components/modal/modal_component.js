import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Modal({isOpen,onOpenChange, textButton, textHeader, textDescription, textSaveData, onClick, children}) {

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">{textButton}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{textHeader}</DialogTitle>
          <DialogDescription>
            {textDescription}
          </DialogDescription>
        </DialogHeader>
        <div>
            {children}
        </div>
        <DialogFooter>
            <Button type="submit" onClick={onClick}>{textSaveData}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}