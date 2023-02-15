import {Outlet} from "react-router-dom";
import Footer from "../components/footer/footer";
import NavB from "../components/head/nav";
// import Nav from "../components/head/nav";
// import HydroExtractor from "../components/product/hydroExtractor";

function Output () {

    return(
        <>
        <NavB/>
        <Outlet/>
        {/* <HydroExtractor/> */}
        <Footer/>
        </>
    )
}

export default Output;