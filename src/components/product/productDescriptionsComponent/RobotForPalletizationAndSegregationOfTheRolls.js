

import productImage from "../../../assets/products/DispensingAutomation/TechnoTwo.png";


//import for banner image 
import backgroundImage from "../../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg";


import BannerOrMiniImage from "../../smallSections/bannerOrMiniImg";
import { Link } from "react-router-dom";

function RobotForPalletizationAndSegregationOfTheRolls (){
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
                        <h4>**********</h4>
                        <p>*******************************************</p>
                    </div>

                    <div className="productImage">
                        <img style={{width:"75%"}} src = {productImage} alt="MODULAB SBM"/>
                    </div>

                    <div className="productSpecification">
                        <h4>Specification</h4>
                        <p>We provide complete solutions that allow our customers to rethink the segregation process of rolls after packaging and manage their handling differently. The goal is to achieve a more homogeneous flow of production and to structure an operator-friendly process through robotic solutions for palletizing rolls.</p>
                        {/* <p>Chemicals and auxiliaries are sent through a manifold consisting of a high precision 3-way valve assembly, which is highly resistant to a wide range of chemicals. Once the product transfer is finished, the line is washed automatically, making it ready for a new dosage.</p> */}
                    </div>
                </div>
            </div>
        </div>
        );
    };
export default RobotForPalletizationAndSegregationOfTheRolls;