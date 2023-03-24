
import productImage from "../../../assets/Service/AUTOMATION_RETTROFIT/plc-master.png";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function DATEXPLCMASTER841616 (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                    <Link className="link" to="/AutomationandRetrofit/MDatexSmartTouchM">MDatex-smart-touch-M</Link>
                    <Link className="link" to="/AutomationandRetrofit/DatexSmartTouchS">Datex-smart-touch-S</Link>
                    <Link className="link" to="/AutomationandRetrofit/DATEXPLCMASTER841616">DATEX PLC MASTER 841616</Link>
                    <Link className="link" to="/AutomationandRetrofit/PLCmodule">PLC-module</Link>
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>DATEX PLC MASTER 841616</h4>
                        <p>DATEX PLC SYSTEM is an industry PLC with open source software, fully compatible with DATEX controller and Arduino. Open PLC project consist of two parts in our system: Runtime and Editor. HMI ScadaBR.</p>
                    </div>

                    <div className="productImage">
                        <img src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>Interface: Modbus RTU (USB)</p>
                        <p>Display for Status IN/OUT</p>
                        <p>Power: 24V DC</p>
                        <p>Dimensions: 212 x 110 mm</p>
                        <p>16 Digital Outputs</p>
                        <p>14 Digital Inputs</p>
                        <p>2 Counter Inputs</p>
                        <p>4 Analog Outputs</p>
                        <p>2 PT100 Inputs 3-Wire</p>
                        <p>6 Analog Inputs</p>
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default DATEXPLCMASTER841616;