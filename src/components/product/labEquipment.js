import { Link } from "react-router-dom";
import backgroundImage from "../../assets/backgroundImage/StairWay-BD-Main-lab-2.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";
import PartnersCard from "../smallSections/partnersCard";

// image
import SALCE from "../../assets/products/LAB/SALCE.jpg";
import IRLABDyeingLanding from "../../assets/products/LAB/IRLABDyeingLanding.png";
import minisimplexDescr from "../../assets/products/LAB/minisimplex-descr.jpg";
import LABHANKdescrip from "../../assets/products/LAB/LAB-HANKdescrip.png";
import SALminijetDescripCE from "../../assets/products/LAB/minijet-descrip.jpg";
import texairDescrip from "../../assets/products/LAB/texairDescrip.jpg";
import HydroDescrip from "../../assets/products/LAB/HydroDescrip.png";
import MiniDryerDescrip from "../../assets/products/LAB/MiniDryerDescrip.png";
import SMALLLOTSDRYERDescrip from "../../assets/products/LAB/SMALLLOTSDRYERDescrip.jpg";
import colourDescrip from "../../assets/products/LAB/colour-descrip.jpg";
import PHControlSystem from "../../assets/products/LAB/PHControlSystem.jpg";
// image 


function LabEquipment () {

    return(
        <section className="LabEquipment">


            <BannerOrMiniImage banner={backgroundImage}/>



            <div className="LabEquipmentSection">
                <div className="sectionHeader">
                    <h3>Lab Machines</h3>
                    {/* <span className = "headerAnimation"></span> */}
                </div>

                <div className="cardHeadDiscriptios">
                    <div className="forGroup">
                        <h3>We provide awesomeness!</h3>
                        <p>STAIRWAY Trading provides a complete range of textile and apparel technology solutions from Dyeing to finishing, packing, inspection and all related processes by the world’s leading – premium branded manufacturers from Europe, China, Korea, etc.</p>
                    </div>
                    <div className = "CardBody">
                        <Link className = "productLink" to='/LabEsuipment/modulabSBM'><PartnersCard image={SALCE} head = {"Modulab SBM"} body ={"Automatic Lab Dispensing & Dyeing machine."} address = {"SALCE - Italy"} /></Link>
                        <Link className = "productLink" to='/LabEsuipment/redkromeii'><PartnersCard image={IRLABDyeingLanding} head = {"REDKROME II"} body ={"IR Lab dyeing machine"} address = {"UGOLINI – Italy"} /></Link>
                        <Link className = "productLink" to='/LabEsuipment/miniSimplex'><PartnersCard image={minisimplexDescr} head = {"MINISIMPLEX"} body ={"Sample Dyeing machine"} address = {"UGOLINI – Italy"} /></Link>
                        <Link className = "productLink" to='/LabEsuipment/labHank'><PartnersCard image={LABHANKdescrip} head = {"Lab HANK"} body ={"Laboratory Hank Dyeing Machine"} address = {"UGOLINI – Italy"} /></Link>
                        <Link className = "productLink" to='/LabEsuipment/miniJET'><PartnersCard image={SALminijetDescripCE} head = {"MINIJET"} body ={"Lab dyeing for fabric"} address = {"UGOLINI – Italy"} /></Link>
                        <Link className = "productLink" to='/LabEsuipment/texair'><PartnersCard image={texairDescrip} head = {"TEXAIR"} body ={"Atmospheric sample dyeing machine"} address = {"UGOLINI – Italy"} /></Link>
                        <Link className = "productLink" to='/LabEsuipment/zp400'><PartnersCard image={HydroDescrip} head = {"ZP400"} body ={"Hydro-extractor for lab sample"} address = {"UGOLINI – Italy"} /></Link>
                        <Link className = "productLink" to='/LabEsuipment/miniDryer'><PartnersCard image={MiniDryerDescrip} head = {"Mini Dryer"} body ={"Laboratory Dryer"} address = {"UGOLINI – Italy"} /></Link>
                        <Link className = "productLink" to='/LabEsuipment/smallLotsDryer'><PartnersCard image={SMALLLOTSDRYERDescrip} head = {"Small lots dryer"} body ={"Hot air dryer for small lots production"} address = {"UGOLINI – Italy"} /></Link>
                        <Link className = "productLink" to='/LabEsuipment/colourLight'><PartnersCard image={colourDescrip} head = {"Colour Light"} body ={"Color matching box"} address = {"UGOLINI – Italy"} /></Link>
                        <Link className = "productLink" to='/LabEsuipment/phCube'><PartnersCard image={PHControlSystem} head = {"pH CUBE"} body ={"PH control system"} address = {"BECATRON AG – Switzerland"} /></Link>
                    </div>  
                </div>

            </div>
        </section>
    );
};

export default LabEquipment;