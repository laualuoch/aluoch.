import React from "react";
import Button from "./Button";
import Input from "./Input";
import MultilineInput from "./MultilineInput";

class ContactForm  extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: ""
        }

        this.handleNameInputChange = this.handleNameInputChange.bind(this)
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this)
        this.handleMessageInputChange = this.handleMessageInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameInputChange(e) {
        this.setState({name: e.target.value})
    }

    handleEmailInputChange(e) {
        this.setState({email: e.target.value})
    }

    handleMessageInputChange(e) {
        this.setState({message: e.target.value})
    }

    handleSubmit(e) {
        alert(JSON.stringify(this.state))
    }
    
    render () {
        return (
            <form className="bg-green p-4 rounded-md" onSubmit={this.handleSubmit}>
                <div className="mb-4 flex space-x-4">
                    <div className="w-1/2">
                        <Input label="Name" value={this.state.name} onValueChange={this.handleNameInputChange} />
                    </div>
                    <div className="w-1/2">
                        <Input label="Email" type="email" value={this.state.email} onValueChange={this.handleEmailInputChange} />
                    </div>
                </div>
                <div className="mb-4">
                    <MultilineInput label="Message" value={this.state.message} onValueChange={this.handleMessageInputChange}  />
                </div>
                <div className="flex justify-center p-6 mt-4 mb-4">
                    <Button text="Submit" type="submit" />
                </div>
            </form>
        )

    }

}

export default ContactForm;