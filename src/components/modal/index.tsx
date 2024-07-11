import { ReactNode } from "react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function ModalOrder({ isOpen, onClose, children}: ModalProps) {
  
  if (!isOpen) {
    return null;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
        {children}
      </div>
    </div>
  )
}