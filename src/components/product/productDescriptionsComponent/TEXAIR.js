

import productImage from "../../../assets/products/LAB/texairDescrip.jpg"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function TEXAIR (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/">Link</Link>
                    <Link className="link" to="/">Link</Link>
                    <Link className="link" to="/">Link</Link>
                    <Link className="link" to="/">Link</Link>
                    <Link className="link" to="/">Link</Link>
                    <Link className="link" to="/">Link</Link>
                    <Link className="link" to="/">Link</Link>
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>TEXAIR</h4>
                        <p>To observe the dyeing process use dyeing Pyrex containers.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Beakers: Available in Pyrex capacity of 200 – 300 – 400 and 500 cc and are 360 mm high.</p>
                        {/* <span></span> */}
                        <p>Heating systems: with hot air.</p>
                        {/* <span></span> */}
                        <p>UGOLINI – Italy</p>
                        {/* <span></span> */}
                        {/* <p>Interface with all the most common Colour Matching Systems.</p> */}
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default TEXAIR;