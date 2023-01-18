import backgroundImage from "../../assets/backgroundImage/stariway-about-us.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";




function VisualVisions () {

    return(
        <section className="VisualVisions">


        <BannerOrMiniImage banner={backgroundImage}/>



        <div className="VisualVisionsSection">
            <div className="sectionHeader">
                <h3>VALUES & VISIONS</h3>
                <span className="headerAnimation"></span>
            </div>

            <div className="discriptionBox">
                <ul>
                    <li>STAIRWAY Trading envisions that as Bangladesh apparel offers one of the top sustainable industries globally with most LEED Certified factories – we enable apparel factories with full fledge automation services to aid them in increase environmental sustainability and more profitability.</li>
                    <li>Our value is we make 'O' zero tolerance in terms of providing quality products and after-sales services.</li>
                </ul>
                {/* <i>CEO/STAIRWAY</i> */}
            </div>
        </div>
    </section>
    )
}

export default VisualVisions;