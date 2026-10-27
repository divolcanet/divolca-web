import type { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="bg-card text-body w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-line animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Modal */}
        <div className="flex justify-between items-center p-4 border-b border-line bg-elevated">
          <h2 className="text-xl font-fraunces font-bold text-title">{title}</h2>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-muted/50 text-volcanic-400 hover:text-title transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Isi Modal (Bisa di-scroll) */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {children}
        </div>
        
      </div>
    </div>
  );
}