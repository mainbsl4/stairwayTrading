import backgroundImage from "../../assets/backgroundImage/stariway-about-us.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";

function About () {

    return(
        <section className="aboutUs">
            <BannerOrMiniImage banner={backgroundImage}/>


            <div className="aboutUsSection">
                <div className="sectionHeader">
                    <h3>About Us</h3>
                    <span className="headerAnimation"></span>
                </div>

                <div className="discriptionBox">
                    <ul>
                        <li>The textile and apparel manufacturing value chain is rapidly transforming into innovation and automation. With the inclusion of industry 4.0 and the new normal global scenario, it is a must. Thus, STAIRWAY Trading is ensuring that the textile and apparel industry manufacturers can get sustainable ‘green’ textile machinery technologies that comprehensively reduce water, chemical and energy usage for its customers and give them a ‘win-win-win’ prospect in people's profit and environment.</li>
                        <li>STAIRWAY Trading provides a complete range of textile and apparel technology solutions from Dyeing to finishing, packing, inspection and all related processes by the world’s leading – premium branded manufacturers from Europe, China, Korea, etc.</li>
                        <li>Bringing the latest solutions as our machinery partners introducing those through their rigorous and continuous research on technologies and trends. In every aspect, from Dyeing to finishing, STAIRWAY Trading always offers the latest solutions for our valued customers.</li>
                    </ul>
                    {/* <i>CEO/STAIRWAY</i> */}
                </div>
            </div>
        </section>
    )
}

export default About;