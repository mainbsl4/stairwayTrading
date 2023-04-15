import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/fontawesome-free-solid";

function HotLine() {


    return(
        <div className="hotLineContainer">
            <div className="linkBody">
                <FontAwesomeIcon style={{fontSize:"23px"}} className="icon1" icon={faPhone}/>
                <a className="hotLineLink" href="/">+8801+++++++++</a>
            </div>
            <div className="linkBody">
                <FontAwesomeIcon style={{fontSize:"23px"}} className="icon2" icon={faPhone}/>
                <a className="hotLineLink" href="/">+8801+++++++++</a>
            </div>
            <div className="linkBody">
                <FontAwesomeIcon style={{fontSize:"23px"}} className="icon3" icon={faPhone}/>
                <a className="hotLineLink" href="/">+8801+++++++++</a>
            </div>
           
        </div>
    )
}



export default HotLine;