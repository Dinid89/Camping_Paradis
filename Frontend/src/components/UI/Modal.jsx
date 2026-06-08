//Modal pour confirmation, modification etc..

export default function Modal({ isOpen, title, message, onConfirm, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-[90%] max-w-md">
          <div className="flex justify-end p-2">
            <button
              onClick={onClose}
              className="text-black/70 hover:cursor-pointer"
            >
              ✕
            </button>
          </div>

          <h3 className="bg-brand-foret text-white text-center rounded m-2 p-3">
            {title}
          </h3>
          <p className="p-3">{message}</p>

          <div className="flex gap-3 justify-end mt-6">
            <button
              onClick={onClose}
              className="bg-brand-foret text-white px-4 py-2 rounded m-2 hover:cursor-pointer"
            >
              Annuler
            </button>
            <button
              onClick={onConfirm}
              className="bg-brand-soleil text-white px-4 py-2 rounded m-2 hover:cursor-pointer"
            >
              Confirmer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
