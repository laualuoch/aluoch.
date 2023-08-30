import React from "react";
import Button from "./Button";
import Input from "./Input";
import MultilineInput from "./MultilineInput";
import ErrorText from "./ErrorText";

class ContactForm  extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: "",
            nameError: "",
            emailError: "",
            messageError: ""
        }

        this.handleNameInputChange = this.handleNameInputChange.bind(this)
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this)
        this.handleMessageInputChange = this.handleMessageInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameInputChange(e) {
        this.setState({name: e.target.value, nameError: ""})
    }

    handleEmailInputChange(e) {
        this.setState({email: e.target.value, emailError: ""})
    }

    handleMessageInputChange(e) {
        this.setState({message: e.target.value, messageError: ""})
    }

    handleSubmit(e) {
        var emailError = ""
        var messageError = ""
        var nameError = ""

        function isValidEmail(email) {
            return /\S+@\S+\.\S+/.test(email);
        }

        if(!this.state.name) {
            nameError = "Name must be provided!"
        } else if(this.state.name.length < 3) {
            nameError = "Provide full name"
        }

        if(!this.state.email) {
            emailError = "Email must be provided!"
        }else if(!isValidEmail(this.state.email )) {
            emailError = "Provide an email address"
        }

        if(!this.state.message) {
            messageError = "Message must be provided!"
        } else if(this.state.message.length < 4) {
            messageError = "Provide more information please"
        }

        if(nameError || emailError || messageError) {
            this.setState({nameError, emailError, messageError})
            e.preventDefault()
        } else {
            alert(JSON.stringify(this.state))
        }
    }
    
    render () {
        return (
            <form className="bg-green p-4 rounded-md" onSubmit={this.handleSubmit}>
                <div className="mb-4 flex space-x-4">
                    <div className="w-1/2">
                        <Input label="Name" value={this.state.name} onValueChange={this.handleNameInputChange} />
                        {this.state.nameError && <ErrorText text={this.state.nameError} /> }
                    </div>
                    <div className="w-1/2">
                        <Input label="Email" value={this.state.email} onValueChange={this.handleEmailInputChange} />
                        {this.state.emailError && <ErrorText text={this.state.emailError} /> }
                    </div>
                </div>
                <div className="mb-4">
                    <MultilineInput label="Message" value={this.state.message} onValueChange={this.handleMessageInputChange}  />
                    {this.state.messageError && <ErrorText text={this.state.messageError} />}
                </div>
                <div className="flex justify-center p-6 mt-4 mb-4">
                    <Button text="Submit" type="submit" />
                </div>
            </form>
        )

    }

}

export default ContactForm;