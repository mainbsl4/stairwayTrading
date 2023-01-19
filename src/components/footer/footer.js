// import App from "../../App";
// import Output from "./output";
import {Link, Outlet} from "react-router-dom";







function Footer () {

    return(
        <>
            <Outlet/>   

            <Link to="/LabEsuipment">Lab Esuipment</Link>
                           

        </>
    )
}


export default Footer