
import productImage from "../../../assets/Service/AUTOMATION_RETTROFIT/EAS/atlantis_pct900.png";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function AtlantisPct900 (){
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
                        <h4>PCT-900</h4>
                        <p>The industrial controller par excellence.</p>
                    </div>

                    <div className="productImage">
                        <img style={{width:"60%"}} src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>A controller with industrial design and electronics, UPS with integrated communication and a resistant and light aluminum chassis. Its 15" screen makes it ideal for dry cleaning and finishing processes.</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default AtlantisPct900;