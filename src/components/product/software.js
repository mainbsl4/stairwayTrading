import { Link } from "react-router-dom";
import backgroundImage from "../../assets/products/Software/main.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";
import PartnersCard from "../smallSections/partnersCard";

// image
import proceso_tintoreria_7 from "../../assets/products/Software/proceso_tintoreria_7.png";
import proceso_texdrive_1 from "../../assets/products/Software/proceso_texdrive_1.png";

// import Software from "./productDescriptionsComponent/software";
// image 


function Software () {

    return(
        <section className="LabEquipment">


            <BannerOrMiniImage banner={backgroundImage}/>


            <div className="LabEquipmentSection">
                <div className="sectionHeader">
                    <h3>Software</h3>
                    {/* <span className = "headerAnimation"></span> */}
                </div>

                <div className="cardHeadDiscriptios">
                    {/* <div className="forGroup">
                        <h3>We provide awesomeness!</h3>
                        <p>STAIRWAY Trading provides a complete range of textile and apparel technology solutions from Dyeing to finishing, packing, inspection and all related processes by the world’s leading – premium branded manufacturers from Europe, China, Korea, etc.</p>
                    </div> */}
                    <div className = "CardBody">
                        <Link className = "productLink" to = '/Software/InfoTint'><PartnersCard image = {proceso_tintoreria_7} head = {"InfoTint"} body ={"The MES software designed for total control."} /></Link>
                        <Link className = "productLink" to = '/Software/TexDriveSD'><PartnersCard image = {proceso_texdrive_1} head = {"TexDrive"} body ={"Total connection with the textile plant."} /></Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Software;