import { Link } from "react-router-dom";
import backgroundImage from "../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";
import PartnersCard from "../smallSections/partnersCard";


// image 
import atlantis_pct310 from "../../assets/Service/AUTOMATION_RETTROFIT/EAS/atlantis_pct310.png";
import atlantis_pct300 from "../../assets/Service/AUTOMATION_RETTROFIT/EAS/atlantis_pct300.jpg";
import atlantis_pct900 from "../../assets/Service/AUTOMATION_RETTROFIT/EAS/atlantis_pct900.png";
import atlantis_codesys from "../../assets/Service/AUTOMATION_RETTROFIT/EAS/atlantis_codesys.png";

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
                        <Link className = "productLink" to='/AutomationandRetrofit/pct310'><PartnersCard image={atlantis_pct310} head = {"PCT-310"} body ={"Maximum power and incredible performance in 10”"} /></Link>
                        <Link className = "productLink" to='/AutomationandRetrofit/pct300'><PartnersCard image={atlantis_pct300} head = {"PCT-300 Stand Alone"} body ={`The best ally for weaving and finishing`} /></Link>
                        <Link className = "productLink" to='/AutomationandRetrofit/pct900'><PartnersCard image={atlantis_pct900} head = {"PCT-900"} body ={"The industrial controller par excellence"} /></Link>
                        <Link className = "productLink" to='/AutomationandRetrofit/codesys'><PartnersCard image={atlantis_codesys} head = {"Codeasy"} body ={"State-of-the-art technology for textile automation"} /></Link>
                    </div>
                    {/* <i>CEO/STAIRWAY</i> */}
                </div>
            </div>
        </section>
    );
};

export default AutomationRetrofit;