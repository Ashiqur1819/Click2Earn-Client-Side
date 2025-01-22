import { Link } from "react-router-dom";
import errorImage from "../../assets/error.webp"
import SecondaryButton from "../../components/Buttons/SecondaryButton";

const Error = () => {
    return (
        <div className="w-full h-screen mx-auto flex flex-col items-center justify-center gap-6">
            <img src={errorImage} className="w-3/5 mx-auto"  alt="" />
            <Link to="/"><SecondaryButton label="Back To Home"></SecondaryButton></Link>
        </div>
    );
};

export default Error;