

import productImage from "../../../assets/products/LAB/LAB-HANKDescrip.jpg"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function LabHANK (){
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
                        <h4>Lab HANK</h4>
                        <p>Laboratory Hank Dyeing Machine. Capacity from 1 to 5kg yarn in hank.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Laboratory Hank Dyeing Machine.</p>
                        {/* <span></span> */}
                        <p>Capacity from 1 to 5kg yarn in hank.</p>
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

export default LabHANK;