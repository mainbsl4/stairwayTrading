import backgroundImage from "../../assets/backgroundImage/Automation-and-Retrofit-StairWay-Trading.jpg"
import BannerOrMiniImage from "../smallSections/bannerOrMiniImg";



function AutomationRetrofit () {

    return(
        <section className="AutomationRetrofit">


            <BannerOrMiniImage banner={backgroundImage}/>



            <div className="AutomationRetrofitSection">
                <div className="sectionHeader">
                    <h3>Automation and Retrofit</h3>
                    <span className="headerAnimation"></span>
                </div>

                <div className="discriptionBox">
                    <div className="forGroup">
                        <h3>We provide awesomeness!</h3>
                        <p>We have experience with a lot of successfully handed over retrofit jobs. Our engineers are get trained from Europe and have enough expertise on conversion with world latest controller & PLC's. We do modernize any kind of dyeing machine, Stenter, Dryer, ETP, STP., etc.</p>
                    </div>
                    {/* <i>CEO/STAIRWAY</i> */}
                </div>
            </div>
        </section>
    )
}

export default AutomationRetrofit;