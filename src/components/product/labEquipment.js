import backgroundImage from "../../assets/backgroundImage/StairWay-BD-Main-lab-2.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";



function LabEquipment () {

    return(
        <section className="LabEquipment">


            <BannerOrMiniImage banner={backgroundImage}/>



            <div className="LabEquipmentSection">
                <div className="sectionHeader">
                    <h3>Welcome</h3>
                    <span className="headerAnimation"></span>
                </div>

                <div className="discriptionBox">
                    <div className="forGroup">
                        <h3>We provide awesomeness!</h3>
                        <p>Smart lab machines Increase reproducibility from lab to bulk production.</p>
                    </div>
                    {/* <i>CEO/STAIRWAY</i> */}
                </div>
            </div>
        </section>
    )
}

export default LabEquipment;