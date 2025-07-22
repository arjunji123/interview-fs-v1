// src/components/ui/modal.tsx

export const Modal = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md mx-4 rounded-xl bg-white p-6 shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};
