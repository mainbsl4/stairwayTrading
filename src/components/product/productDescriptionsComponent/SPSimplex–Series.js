

import productImage from "../../../assets/products/Yarn Dyeing/SPSimplexDescrip.jpg"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function SPSimplexSeries (){
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
                        <h4>SP Simplex – Series</h4>
                        <p>Sample dyeing machine, this machine has been especially designed for perfect reproducibility from sample to bulk production.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Increase RFT</p>
                        {/* <span></span> */}
                        <p>Capacity between 100gr to 1.5kg.</p>
                        {/* <span></span> */}
                        <p>Liquor ratio at customer request in the range 1:4 to 1:20</p>
                        {/* <span></span> */}
                        <p>Same configuration as bulk machine.</p>
                        <p>UGOLINI – Italy</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default SPSimplexSeries;