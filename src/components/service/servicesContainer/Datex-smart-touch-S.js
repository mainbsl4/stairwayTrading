

import productImage from "../../../assets/products/Yarn Dyeing/CarrierDesctip.png";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function DatexSmartTouchS (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/AutomationandRetrofit/MDatexSmartTouchM"><span>MDatex-smart-touch-M</span></Link>
                    <Link className="link" to="/AutomationandRetrofit/DatexSmartTouchS"><span>Datex-smart-touch-S</span></Link>
                    <Link className="link" to="/AutomationandRetrofit/DATEXPLCMASTER841616"><span>DATEX PLC MASTER 841616</span></Link>
                    <Link className="link" to="/AutomationandRetrofit/PLCmodule"><span>PLC-module</span></Link>
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>*********</h4>
                        <p>*******************************************************</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>*********************</p>
                        <p>*********************</p>
                        <p>*********************</p>
                        <p>*********************</p>
                        <p>*********************</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default DatexSmartTouchS;