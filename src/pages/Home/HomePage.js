import { useNavigate } from "react-router";
import Button from "../../components/Button";

const HomePage = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/skills')
    }

    return (
        <div className="">
            <div className="d-flex-start ">
                <img
                    className="mb-4"
                    src=""
                    alt="intro-image" />
                <h4 className="text-5xl text-beige font-chilanka font-bold mb-4">
                    Hi, I'm <span className="text-white">Aluoch.</span>
                </h4>
                <h2 className="text-2xl text-beige font-chilanka font font-semibold mb-4">
                    Welcome to the digital embodiment of my journey as a versatile 
                    software engineer, product designer and a skilled technical
                     writer. This online catalogue provides the different chapters of
                      my professional narrative. </h2>
            </div>
            <div>
                <Button text="Technologies" onClick={handleButtonClick}/>
            </div>
        </div>
    )
}

export default HomePage;