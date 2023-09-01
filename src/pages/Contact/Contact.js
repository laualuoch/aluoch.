import React from "react";
import ContactForm from "../../components/ContactForm";
import Socials from "../../components/Socials";

const Contact = ({ sectionId }) => {
    return (
        <section id={sectionId} class="flex items-center justify-center h-screen">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-chilanka font-extrabold text-beige">Contact.</h2>
                    <p class="font-light font-chilanka text-white sm:text-xl dark:text-gray-400">Let's Code the Future Together: Reach Out and Connect!</p>
                </div> 
                <div class="mx-auto max-w-screen-sm text-center lg:mb-8 mb-4">
                    <Socials />
                </div> 
                <div className="flex flex-wrap justify-center w-full">
                    <ContactForm />
                </div>
            </div>
        </section>
    );    
}

export default Contact;