// import ag from "../../assets/Business Partner/Becatron AG logo.jpg" 



function PartnersCard (props) {

    return(
        <div className="cardContainer">
            <div className="imageBody">
                <img src={props.image} alt=""/>
            </div>
            <div className="descriptionBody">
                <h5>{props.head}</h5>
                <p>{props.body}</p>
                <p>{props.address}</p>
            </div>
        </div>
    );
};

export default PartnersCard;