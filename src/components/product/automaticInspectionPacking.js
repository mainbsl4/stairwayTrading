import { Link } from "react-router-dom";
import backgroundImage from "../../assets/backgroundImage/StairWay-BD-Main-lab-2.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";
import PartnersCard from "../smallSections/partnersCard";



// image
// import SALCE from "https://www.datocms-assets.com/71869/1669909145-header-macchine-ispezione.jpg?ar=16%3A8&auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&w=1760";
import IRLABDyeingLanding from "../../assets/products/automaticInsprection&packing/ConvertingMachines-landing.png";
import minisimplexDescr from "../../assets/products/automaticInsprection&packing/FabricFeedingMachinesForPrintingMachines-landing.png";
import LABHANKdescrip from "../../assets/products/automaticInsprection&packing/InspectionMachines-landing.png";
import SALminijetDescripCE from "../../assets/products/automaticInsprection&packing/PackingMachines-landing.png";
import texairDescrip from "../../assets/products/automaticInsprection&packing/RobotForPalletizationAndSegregationOfTheRolls-landing.png";
// import HydroDescrip from "../../assets/products/automaticInsprection&packing/Screenshot_3-landing-.png";
import MiniDryerDescrip from "../../assets/products/automaticInsprection&packing/Accessories-landing.png";
// import SMALLLOTSDRYERDescrip from "../../assets/products/automaticInsprection&packing/";
// import colourDescrip from "../../assets/products/automaticInsprection&packing/";
// import PHControlSystem from "../../assets/products/automaticInsprection&packing/";
// image 


function AutomaticInspectionPacking () {

    return(
        <section className="LabEquipment">

            <BannerOrMiniImage banner={backgroundImage}/>

            <div className="LabEquipmentSection">
                <div className="sectionHeader">
                    <h3>Automatic inspection & Packing</h3>
                    {/* <span className = "headerAnimation"></span> */}
                </div>

                <div className="cardHeadDiscriptios">
                    {/* <div className="forGroup">
                        <h3>++++++++++++++++</h3>
                        <p>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</p>
                    </div> */}
                    <div className = "CardBody">
                        {/* <Link className = "productLink" to='/LabEsuipment/modulabSBM'><PartnersCard image={SALCE} head = {"Modulab SBM"} body ={"Automatic Lab Dispensing & Dyeing machine."} address = {"SALCE - Italy"} /></Link> */}
                        <Link className = "productLink" to='/AutomaticInsprection&Packing/Accessories'><PartnersCard image={MiniDryerDescrip} head = {"Accessories"} body ={"Accessories to complete your production lines"} /></Link>
                        <Link className = "productLink" to='/AutomaticInsprection&Packing/ConvertingMachines'><PartnersCard image={IRLABDyeingLanding} head = {"Converting machines"} body ={"High speed rolling machines"}/></Link>
                        <Link className = "productLink" to='/AutomaticInsprection&Packing/FabricFeedingMachinesForPrintingMachines'><PartnersCard image={minisimplexDescr} head = {"Fabric feeding machine"} body ={"Non-stop feeding for printing machines"} /></Link>
                        <Link className = "productLink" to='/AutomaticInsprection&Packing/InspectionMachines'><PartnersCard image={LABHANKdescrip} head = {"Inspection machines"} body ={"Versatile, precise and resistant inspection machines"} /></Link>
                        <Link className = "productLink" to='/AutomaticInsprection&Packing/PackingMachines'><PartnersCard image={SALminijetDescripCE} head = {"Packing machines"} body ={"Flexible, performing and sustainable packaging"} /></Link>
                        <Link className = "productLink" to='/LabEsuipment/texair'><PartnersCard image={texairDescrip} head = {"Robot for palletization"} body ={"Innovative solutions for the management and handling of rolls"}  /></Link>
                        {/* <Link className = "productLink" to='/LabEsuipment/zp400'><PartnersCard image={HydroDescrip} head = {"ZP400"} body ={"Hydro-extractor for lab sample"} /></Link> */}
                        {/* <Link className = "productLink" to='/LabEsuipment/smallLotsDryer'><PartnersCard image={SMALLLOTSDRYERDescrip} head = {"Small lots dryer"} body ={"Hot air dryer for small lots production"} address = {"UGOLINI – Italy"} /></Link>
                        <Link className = "productLink" to='/LabEsuipment/colourLight'><PartnersCard image={colourDescrip} head = {"Colour Light"} body ={"Color matching box"} address = {"UGOLINI – Italy"} /></Link>
                        <Link className = "productLink" to='/LabEsuipment/phCube'><PartnersCard image={PHControlSystem} head = {"pH CUBE"} body ={"PH control system"} address = {"BECATRON AG – Switzerland"} /></Link> */}
                    </div>  
                </div>

            </div>
        </section>
    );
};

export default AutomaticInspectionPacking;