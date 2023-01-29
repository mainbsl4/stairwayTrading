import {Outlet} from "react-router-dom";
import Footer from "../components/footer/footer";
import Nav from "../components/head/nav";
import HydroExtractor from "../components/product/hydroExtractor";

function Output () {

    return(
        <>
        <Nav/>
        <Outlet/>
        <HydroExtractor/>
        <Footer/>
        </>
    )
}

export default Output;