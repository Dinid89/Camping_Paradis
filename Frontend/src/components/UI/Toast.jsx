//Notification en message bas de page (exemple : paiements effectués etc..)
export default function Toast({ message, type = 'success', onClose }) {
    
    const styles = {
        success: 'bg-brand-foret text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white'
    }

    return (
        <div className={`fixed bottom-5 right-5 px-5 py-3 rounded-lg shadow-lg flex items-center gap-3 z-[9999] ${styles[type]}`}>            <span>{message}</span>
            <button onClick={onClose} className="text-white/70 hover:text-white">✕</button>
        </div>

        
    )
}