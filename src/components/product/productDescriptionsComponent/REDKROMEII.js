

import productImage from "../../../assets/products/LAB/IRLABDyeingmachineDescr.jpg"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function REDKROMEII (){
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
                        <h4>REDKROME II</h4>
                        <p>Lab dyeing machine: can be dye all types of natural or synthetic substrate.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt=" REDKROMEII "/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Heating: PID with Infrared lamps</p>
                        {/* <span></span> */}
                        <p>Cooling: Water/air</p>
                        {/* <span></span> */}
                        <p>Capacity of 100cc ~1000cc Beakers or 8 liter tank can be useful for fabric sample dyeing.</p>
                        {/* <span></span> */}
                        <p>UGOLINI – Italy</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default REDKROMEII;