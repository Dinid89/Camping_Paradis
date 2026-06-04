export default function Button ({ children, variant = 'primary', onClick }) {
    const styles = {
        primary: "bg-brand-soleil text-white hover:bg-brand-foret cursor-pointer",
        secondary: "border-2 border-brand-soleil text-??? hover:bg-???"
    }

    return (
           <button 
            onClick={onClick}
            className={`px-4 py-2 rounded-md font-medium transition ${styles[variant]}`}
        >
            {children}
        </button>
        
    )
}