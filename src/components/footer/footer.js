import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRocke } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";




function Footer (){
    return(
        <footer className="footer">
            <div className="footerTop">
            <div className="footerSectionOne">
                <div className="footerHeading">
                    <h5>About Stair Way Trading</h5>
                </div>
                <div>
                    <p>Stairway Trading has been established as an innovative textile machinery solution provider in Bangladesh.</p>
                    <p>We represent various Textile machinery manufacturers from Europe, China, Korea, etc for their sale and service activities. Based on our strong technology and relationships with our trusted principals, we have evolved into an efficient solution provider to the Textile supply chain.</p>
                </div>
            </div>

            {/* <div className="footerSectionOne">
                <h3>About Stair Way Trading</h3>
                <p>Stairway Trading has been established as an innovative textile machinery solution provider in Bangladesh.</p>
                <p>We represent various Textile machinery manufacturers from Europe, China, Korea, etc for their sale and service activities. Based on our strong technology and relationships with our trusted principals, we have evolved into an efficient solution provider to the Textile supply chain.</p>
            </div> */}

            <div className="footerSectionTwo">
                <div className="footerHeading">
                    <h5>Important Links</h5>
                </div>
                <div className="footerSectionTwoOfTwo">
                    <Link className="link" to="/">Accessibility</Link>
                    <Link className="link" to="/">Cookie Policy</Link>
                    <Link className="link" to="/Contact">Contact Us</Link>
                    <Link className="link" to="/">Legal Disclaimer</Link>
                    <Link className="link" to="/">Privacy Policy</Link>
                    <Link className="link" to="/">Security</Link>
                    <Link className="link" to="/">Sitemap</Link>
                </div>
            </div>
            <div className="footerSectionThree">
                <div className="footerHeading">
                    <h5>Recent Posts</h5>
                </div>

                <div className="footerSectionThreeOfTwo">
                    <Link className="link" to="/">Indiline 2.0</Link>
                    <Link className="link" to="/">Date</Link>
                    <Link className="link" to="/">Indiline 2.0</Link>
                    <Link className="link" to="/">Indiline 2.0</Link>
                </div>
                {/* <div className="footerSectionThreeOfThree">
                    
                </div> */}
            </div>
            <hr></hr>
            </div>
            <div className="footerBottom mt-1">
                <div>
                    <span>&#169; 2021 <i>Stairway Trading</i>. All Rights Reserved.</span>
                </div>
                <div className="socialMediaBox">
                    <a className="facebook" href="/"><FontAwesomeIcon icon = {faFacebook} /></a>
                    {/* <a className="instagram" href="/"><FontAwesomeIcon icon = {faInstagram} /></a> */}
                    <a className="twitter" href="/"><FontAwesomeIcon icon = {faTwitter} /></a>
                    <a className="linkedin" href="/"><FontAwesomeIcon icon = {faLinkedin} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;