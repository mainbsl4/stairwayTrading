import { Link } from "react-router-dom";
import backgroundImage from "../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";
import PartnersCard from "../smallSections/partnersCard";


// image 
import DATEX_SMART_TOUCH_M from "../../assets/Service/AUTOMATION_RETTROFIT/DATEX_SMART_TOUCH_M.png";
import datexSmartTouch_S from "../../assets/Service/AUTOMATION_RETTROFIT/datex-smart-touch-s.png";
import plc_master from "../../assets/Service/AUTOMATION_RETTROFIT/plc-master.png";
import SAplc_modul_ioLCE from "../../assets/Service/AUTOMATION_RETTROFIT/plc-modul-io.png";

// image 



function AutomationRetrofit () {

    return(
        <section className="AutomationRetrofit">


            <BannerOrMiniImage banner={backgroundImage}/>



            <div className="AutomationRetrofitSection">
                <div className="sectionHeader">
                    <h3>Automation and Retrofit</h3>
                    {/* <span className="headerAnimation"></span> */}
                </div>

                <div className="cardHeadDiscriptios">
                    <div className="forGroup">
                        <h3>We provide awesomeness!</h3>
                        <p>We have experience with a lot of successfully handed over retrofit jobs. Our engineers are get trained from Europe and have enough expertise on conversion with world latest controller & PLC's. We do modernize any kind of dyeing machine, Stenter, Dryer, ETP, STP., etc.</p>
                    </div>
                    <div className = "CardBody">
                        <Link className = "productLink" to='/AutomationandRetrofit/MDatexSmartTouchM'><PartnersCard image={DATEX_SMART_TOUCH_M} head = {"MDatex-smart-touch-M"} body ={"Controller for the production dyeing machine."} /></Link>
                        <Link className = "productLink" to='/AutomationandRetrofit/DatexSmartTouchS'><PartnersCard image={datexSmartTouch_S} head = {"Datex-smart-touch-S"} body ={`"Display: 7,0" TFT, color touchscreen, Internal I/O"`} /></Link>
                        <Link className = "productLink" to='/AutomationandRetrofit/DATEXPLCMASTER841616'><PartnersCard image={plc_master} head = {"DATEX PLC MASTER 841616"} body ={"Interface: Modbus RTU (USB)"} /></Link>
                        <Link className = "productLink" to='/AutomationandRetrofit/PLCmodule'><PartnersCard image={SAplc_modul_ioLCE} head = {"PLC-module"} body ={"Digital & analog I/O"} /></Link>
                    </div>  
                    {/* <i>CEO/STAIRWAY</i> */}
                </div>
            </div>
        </section>
    );
};

export default AutomationRetrofit;