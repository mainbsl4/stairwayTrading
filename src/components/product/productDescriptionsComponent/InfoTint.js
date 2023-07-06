

import productImage from "../../../assets/products/Software/proceso_tintoreria_7.png"


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function InfoTint (){
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
                        <h4>InfoTint</h4>
                        <p>InfoTint is the software that we have developed at EAS for the comprehensive control of weaving, dyeing and finishing.</p>
                    </div>

                    <div className="productImage" style={{height:"60%"}}>
                        <img style={{width:"75%"}} src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Communication with most controllers available on the market.</p>
                        {/* <span></span> */}
                        <p>Regular updates on a single version that incorporate constant improvements.</p>
                        <p>Editing of listings and impressions that can be easily modified.</p>
                        <p>Integration of all sectors (dyeing, finishing, weaving, maintenance, laboratory, etc) on the same software, total integration.</p>
                        <p>Host driver, configurable by the client himself, to connect with any ERP.</p>
                        <p>Recipes optimized for specific processes.</p>
                        <p>Formulas created to reduce processing and consumption time.</p>
                        <p>Calculations of formulas to apply the dye adapted to each type of fabric.</p>
                        <p>Possibility of generating the Smart Recipe, a completely autonomous recipe generation process, based on the rules and exceptions of each plant.</p>
                        <p>Control of OEE efficiencies (Overall Equipment Effectiveness).</p>
                        <p>Control of theoretical and real costs of processes, including Process simulator for real production situation (collection tool).</p>
                        <p>Consumption forecast tool that takes into account everything planned and gives you a view of what you are going to consume of chemical products and dyes in a certain period, greatly improving the quality of purchases for the winery.</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };

export default InfoTint;