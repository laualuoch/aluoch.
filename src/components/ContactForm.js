import Button from "./Button";
import Input from "./Input";
import MultilineInput from "./MultilineInput";

const ContactForm = () => {

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <form className="bg-green p-4 rounded-md" onSubmit={handleSubmit}>
            <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                    <Input label="Name" value="" onValueChange={handleChange} />
                </div>
                <div className="w-1/2">
                    <Input label="Email" value="" onValueChange={handleChange} />
                </div>
            </div>
            <div className="mb-4">
                <MultilineInput label="Message" value="" onValueChange={handleChange}  />
            </div>
            <div className="flex justify-center p-6 mt-4 mb-4">
                <Button text="Submit" />
            </div>
        </form>
    )

}

export default ContactForm;