// image
import plantImg from '../assets/product-image.jpg';

function Body() {
    return <div className="card-body">
        <div className="card-img">
            <img src={plantImg} alt="plant-image" />
        </div>
        <div className="card-info">
            <h1 className="title">Classic peace lilly</h1>
            <span>All Seasons Gardenia</span>
            <h1 className="price">$18</h1>
            <p>
                Heavenly Fragrance – Produces large, milky-white flowers with a mesmerizing scent that fills the air.🌼
                (Pack Of 1)
            </p>

            <div className="button-group">
                <button>Add to cart</button>
                <button>Wishlist</button>
            </div>
        </div>
    </div>
}

export default Body