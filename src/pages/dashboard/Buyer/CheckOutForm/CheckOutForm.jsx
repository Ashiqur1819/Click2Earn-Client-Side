import { useLocation } from "react-router-dom";


const CheckOutForm = () => {

    const location = useLocation();
    const { money, coins } = location.state || {};
    console.log(money, coins);

    return (
        <div>
           fgfgfg 
        </div>
    );
};

export default CheckOutForm;