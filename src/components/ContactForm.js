import Button from "./Button";
import Input from "./Input";

const ContactForm = () => {

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <form className="bg-green p-4 rounded-md" onSubmit={handleSubmit}>
            <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                <label htmlFor="name" className="block text-white font-chilanka text-xl mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value=""
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    required
                />
                </div>
                <div className="w-1/2">
                <label htmlFor="email" className="block text-white font-chilanka text-xl mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value=""
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    required
                />
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-white font-chilanka text-xl mb-2">
                Message
                </label>
                <textarea
                id="message"
                name="message"
                value=""
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                rows="4"
                required
                />
            </div>
            <div className="flex justify-center p-6 mt-4 mb-4">
                    <Button text="Submit" />
                </div>
        </form>

    )

}

export default ContactForm;