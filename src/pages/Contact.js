import React from "react";
import ContactForm from "../components/ContactForm";
import { SectionHeader } from "../components/SectionHeader";

const Contact = ({ sectionId }) => {
    return (
        <section id={sectionId} className="flex items-center justify-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <SectionHeader 
                title="CONTACT"
                description="Let's Code the Future Together: Reach Out and Connect!"
                />
                <div className="flex flex-wrap justify-center w-full">
                    <ContactForm />
                </div>
            </div>
        </section>
    );    
}

export default Contact;