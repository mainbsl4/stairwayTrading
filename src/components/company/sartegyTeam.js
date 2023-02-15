import backgroundImage from "../../assets/backgroundImage/Strategy-and-team-stairway-trading.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";




function SartegyTeam () {

    return(
        // <></>
        <section className="SartegyTeam">


            <BannerOrMiniImage banner={backgroundImage}/>



            <div className="startSection">
                <div className="sectionHeader">
                    <h3>STRATEGY & TEAM</h3>
                    {/* <span className="headerAnimation"></span> */}
                </div>

                <div className="discriptionBox mt-4">
                        <div className="forGroup">
                            <h5>STRATEGY</h5>
                            <p>STAIRWAY uses the best combination mood of advertising which is enhanced by our media partners, commission agents and personal selling by our team, and cooperative exhibitions to promote our products and services. Organized seminars, customer presentations to provide quality machines, spare parts, equipment, accessories, and maintenance; on-time delivery and also outstanding after-sales service to meet our customers' needs.</p>
                        </div>

                        <div className="forGroup">
                            <h5>TEAM</h5>
                            <p>STAIRWAY's well-experienced team of textile engineers as well as young skilled professionals integrate our vision and meet our customer's satisfaction. Our service engineers are trained from Europe and highly capable with the knowledge of high-tech advanced technology regarding textile machinery especially dyeing, finishing and denim industries.</p>
                        </div>
                    {/* <i>CEO/STAIRWAY</i> */}
                </div>
            </div>
        </section>
    )
}

export default SartegyTeam;