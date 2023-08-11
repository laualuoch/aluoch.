import  image from "./../../images/aluoch.jpg"


const HomePage = () => {
    return (
        <div class="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="basis-1/3">
                <img 
                    className="h-48 w-full object-cover md:h-full md:w-48" 
                    src={image} 
                    alt="user image" />
            </div>
            <div className="basis-2/3 p-8">
                <div className="tracking-wide text-sm text-indigo-500 font-semibold">
                    <h1 className="text-3xl font-bold font-chilanka">
                        Hi, I am Aluoch Laurine
                    </h1>
                </div>
                <p className="mt-2 text-2xl font-chilanka text-slate-500">
                    Welcome to the digital embodiment of my
                    journey as a versatile software engineer, adept UI/UX designer, 
                    and a skilled technical writer. I invite you to explore 
                    the chapters of my professional narrative. 
                    This virtual tome presents my expertise, 
                    education, work experiences, and my accomplished projects 
                    in the same regard.
                </p>
                <button class="mt-2 bg-green hover:bg-pink text-white font-regular font-chilanka py-1 md:py-2 px-2 md:px-4 rounded">
                    Skills
                </button>
            </div>
        </div>
        
    );
}

export default HomePage;