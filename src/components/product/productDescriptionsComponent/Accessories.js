
import productImage from "../../../assets/products/automaticInsprection&packing/Accessories.png";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function Accessories (){
        return (
        <div>
            <BannerOrMiniImage banner = {backgroundImage}/>
            <div className="productDescriptionContainer mt-5">
                <div className="linkBody">
                     <Link className="link" to="/AutomaticInsprection&Packing/Accessories"><span>Accessories</span></Link>
                    <Link className="link" to="/AutomaticInsprection&Packing/ConvertingMachines"><span>Converting machines</span></Link>
                    <Link className="link" to="/AutomaticInsprection&Packing/FabricFeedingMachinesForPrintingMachines"><span>Fabric feeding machine</span></Link>
                    <Link className="link" to="/AutomaticInsprection&Packing/InspectionMachines"><span>Inspection machines</span></Link>
                    <Link className="link" to="/AutomaticInsprection&Packing/PackingMachines"><span>Packing machines</span></Link>
                    <Link className="link" to="/AutomaticInsprection&Packing/RobotForPalletizationAndSegregationOfTheRolls"><span>Robot for palletization</span></Link>
                </div>

                <div className="detailsContainer">
                    <div className="productModleAndDetails">
                        <h4>Accessories</h4>
                        <p>Accessories to complete your production lines.</p>
                    </div>

                    <div className="productImage">
                        <img style={{width:"75%"}} src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>We provide additional devices to make your textile production lines more and more performing, safe and efficient. From heat-sealing stations for joining the fabric to devices for signaling defects on the fabric edge, up to cylinder accumulators and conveyor belts.</p>
                        {/* <p>Chemicals and auxiliaries are sent through a manifold consisting of a high precision 3-way valve assembly, which is highly resistant to a wide range of chemicals. Once the product transfer is finished, the line is washed automatically, making it ready for a new dosage.</p> */}
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default Accessories;