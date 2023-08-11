import  image from "./../../images/aluoch.jpg"


const HomePage = () => {
    return (
        <div className="container row justify-between items-center">
            <div className="col-4">
                <img 
                    className="img-fluid rounded" 
                    src={image} 
                    alt="user image" 
                />
                <div>
                    socials
                </div>
            </div>
            <div className="col-8">
                <h1>
                    Hi, I am Aluoch Laurine
                </h1>
                <p>
                    Welcome to the digital embodiment of my
                    journey as a versatile software engineer, adept UI/UX designer, 
                    and a skilled technical writer. I invite you to explore 
                    the chapters of my professional narrative. 
                    This virtual tome presents my expertise, 
                    education, work experiences, and my accomplished projects 
                    in the same regard.
                </p>
                <button>
                    Skills
                </button>
            </div>
        </div>
        
    );
}

export default HomePage;