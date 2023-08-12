
const Button = ({text, onClick}) => {
    return (
        <button 
            className="bg-green hover:bg-jungle text-white font-semibold font-chilanka py-1 md:py-2 px-2 md:px-4 border border-white rounded" 
            onClick ={ onClick }>
            { text }
        </button>
    )
}

export default Button;