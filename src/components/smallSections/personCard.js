import Img from "../../assets/Service/Spare parts/jackMa.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/fontawesome-free-solid";

function PersonCard () {

    return(
        <div className="personCard">
            <div className="top">
                <div className="imgBody">
                    <img src={Img} alt=""></img>
                </div>
                <p className="name">Shaikh Sazzadul Islam</p>
            </div>
            <div className="bottom">
                <a className="phone" href=""><FontAwesomeIcon icon={faPhone} /></a>
                <a className="whatsapp" href=""><FontAwesomeIcon icon={faSquareWhatsapp} /></a>
                <a className="linkedin" href=""><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
        </div>
    );
};

export default PersonCard;