

import productImage from "../../../assets/products/Yarn Dyeing/sp110Descrip.jpg"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function SP110Series (){
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
                        <h4>SP110 – Series</h4>
                        <p>Small lots dyeing machine.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>With high reproducibility and increase Right First Time.</p>
                        {/* <span></span> */}
                        <p>Capacity between 1kg to 15kg.</p>
                        {/* <span></span> */}
                        <p>Flexible loading- 40% ~ 100%</p>
                        {/* <span></span> */}
                        <p>Constant liquor ratio at customer request in the range 1:3.5 to 1:12</p>
                        <p>Same configuration as bulk machine</p>
                        <p>UGOLINI – Italy</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default SP110Series;