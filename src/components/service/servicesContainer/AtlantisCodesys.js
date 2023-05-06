

import productImage from "../../../assets/Service/AUTOMATION_RETTROFIT/EAS/atlantis_codesys.png";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function AtlantisCodesys (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/AutomationandRetrofit/pct310"><span>PCT310</span></Link>
                    <Link className="link" to="/AutomationandRetrofit/pct300"><span>PCT300</span></Link>
                    <Link className="link" to="/AutomationandRetrofit/pct900"><span>PTC900</span></Link>
                    <Link className="link" to="/AutomationandRetrofit/codesys"><span>Codesys</span></Link>
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>Codeasy</h4>
                        <p>State-of-the-art technology for textile automation</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Atlantis is integrated into the machines of the main manufacturers. It has a connection to an external industrial PLC with CODESYS programming that stands out for its simplicity and flexibility. In addition, all our computers have the latest version of Windows 10 iOT</p>
                        <p>Information in real time</p>
                        <p>MONTH integration</p>
                        <p>Robust data transfer</p>
                        <p>Easy maintenance</p>
                        <p>constant updates</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default AtlantisCodesys;