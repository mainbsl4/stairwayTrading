import {Link} from "react-router-dom";


function Footer (){
    return(
        <footer className="footer">
            <div className="footerSectionOne">
                <div>
                    <h3>About Stair Way Trading</h3>
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
                <div className="a">
                    <h3>Important Links</h3>
                </div>
                <div className="footerSectionTwoOfTwo">
                    <Link to="/">Accessibility</Link>
                    <Link to="/">Cookie Policy</Link>
                    <Link to="/Contact">Contact Us</Link>
                    <Link to="/">Legal Disclaimer</Link>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Security</Link>
                    <Link to="/">Sitemap</Link>
                </div>
            </div>
            <div>
                <div>
                    <h3>Recent Posts</h3>
                </div>

                <div>
                    <Link to="/">Indiline 2.0</Link>
                    <Link to="/">Date</Link>
                </div>
                <div>
                    <Link to="/">Indiline 2.0</Link>
                    <Link to="/">Indiline 2.0</Link>
                </div>
            </div>
            <div>
                <div>
                    <p>&#169; 2021 Stairway Trading. All Rights Reserved.</p>
                </div>
                <div>
                    <a href="https://twitter.com/home">l</a>
                    <a href="https://twitter.com/home">l</a>
                    <a href="https://twitter.com/home">l</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;