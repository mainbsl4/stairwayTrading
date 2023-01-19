// import img1 from "../../assets/backgroundImage/News.png";
// import img2 from "../../assets/backgroundImage/Company.png";
// import img3 from "../../assets/backgroundImage/Product.png";
// import img4 from "../../assets/backgroundImage/Contact.png";


function BannerOrMiniImage(props){
    return(
        <>
            <div className="banner">
                <img src={props.banner} alt="banner"/>
            </div>

            <div className="miniImgSec">
                <div className="ImgBody">
                    <div className="shadow"></div>
                    <div className="bottomTitle">NEWS</div>
                    {/* <img src={img1} alt="miniImg"/> */}
                </div>
                <div className="ImgBody">
                <div className="shadow"></div>
                    <div className="bottomTitle">Company</div>
                    {/* <img src={img2} alt="miniImg"/> */}
                </div>
                <div className="ImgBody">
                <div className="shadow"></div>
                    <div className="bottomTitle">Products</div>
                    {/* <img src={img3} alt="miniImg"/> */}
                </div>
                <div className="ImgBody">
                <div className="shadow"></div>
                    <div className="bottomTitle">Contact</div>
                    {/* <img src={img4} alt="miniImg"/> */}
                </div>
            </div>
        </>
    )
}

export default BannerOrMiniImage;