

import productImage from "../../../assets/products/Winding/SoftWindingDescription.png"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function SoftWindingMachine (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/WindingMachine/softWindingMachine"><span>Soft Winding Machine</span></Link>
                    <Link className="link" to="/WindingMachine/hardWindingMachine"><span>Hard Winding Machine</span></Link>
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>Soft Winding Machine</h4>
                        <p>Soft package winder, Suitable for all kind of yarn like: Textured or flat filament, elastic, silk, staple, fine technical yarns.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Speed: up to 1200m/min</p>
                        {/* <span></span> */}
                        <p>Package shape freely programmable.</p>
                        {/* <span></span> */}
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default SoftWindingMachine;