

import productImage from "../../../assets/products/Software/proceso_texdrive_1.png"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function TexDrive (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/Software/InfoTint"><span>InfoTint</span></Link>
                    <Link className="link" to="/Software/TexDrive"><span>TexDrive</span></Link>
                </div>
                
                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>TexDrive</h4>
                        <p>Total connection with the textile plant</p>
                    </div>

                    <div className="productImage">
                        <img style={{width:"75%"}} src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Flexible routing allowing operations to be added once production has started</p>
                        {/* <span></span> */}
                        <p>Each operation can have its own recipe and technical process components</p>
                        <p>Communication with a large number of control systems on the market</p>
                        <p>A version for all customers and constantly updated</p>
                        <p>Easy editing of listings and impressions</p>
                        <p>Optimization of processes and recipes</p>
                        <p>Formulas that simplify and reduce processes</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default TexDrive;