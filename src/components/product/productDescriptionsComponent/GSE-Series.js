

import productImage from "../../../assets/products/Yarn Dyeing/GSE–seriesDescription.jpg"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function GSESeries (){
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
                        <h4>GSE – Series</h4>
                        <p>HTHP Bulk Yarn Dyeing Machine.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>HTHP Vertical yarn dyeing machines.</p>
                        {/* <span></span> */}
                        <p>Capacity between 12 kg to 1500 kg.</p>
                        {/* <span></span> */}
                        <p>Flexible loading- 40% ~ 100%.</p>
                        {/* <span></span> */}
                        <p>Constant liquor ratio at customer request in the range 1:3 ~ 1: 6.</p>
                        <p>UGOLINI – Italy</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default GSESeries;