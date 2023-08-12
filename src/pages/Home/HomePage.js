import  image from "./../../images/aluoch.jpg"


const HomePage = () => {
    return (
        <div className="container justify-items-center justify-center align-middle">
            <section class="ftco-section ftco-intro">
                <div className="container">
                    <div class="row align-items-center"> 
                        <div className="col-md-4 text-center">
                            <img 
                                className="img-fluid rounded-circle" 
                                src={image} 
                                alt="user image" 
                            />
                        </div>
                        <div className="col-md-8">
                            <h2>
                                Hi, I am Aluoch Laurine
                            </h2>
                            <h4>I am a Software Engineer, 
                                a Product Designer and a Technical writer. </h4>
                            <button className="btn btn-primary mt-auto">
                                View Portfolio
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;