

import productImage from "../../../assets/products/Yarn Dyeing/CarrierDesctip.jpg";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function PLCmodule (){
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
                        <h4>************</h4>
                        <p>*************************************</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>*****************************</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default PLCmodule;