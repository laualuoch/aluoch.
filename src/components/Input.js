
const Input = ({label, name, value, onValueChange}) => {
    return (
        <>
            <label htmlFor="name" className="block text-white font-chilanka text-xl mb-2">
                { label }
            </label>
            <input
                id={name}
                name={name}
                value={value}
                onChange={onValueChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
        </>
    );
}

export default Input;