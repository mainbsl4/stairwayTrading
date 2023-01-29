import img from "../../assets/products/Hydro Extractor/Hydroextractor/Hydro Landing.png"



function Product () {


    return(
        <div className="productBody">
            <div className="imgBody xxx">
                <img src={img} alt=""/>
            </div>
            <div className="descriptionBody">
                <div className="productModle">
                    <p>Modle name of products</p>
                </div>
                <div className="productDescription">
                    <p>It will be product deacription. And other things of that</p>
                </div>
            </div>
        </div>
    );
};


export default Product;