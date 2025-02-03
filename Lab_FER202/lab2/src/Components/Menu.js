import menu1 from '../Pizza_Images/menu1.jpg';
import menu2 from '../Pizza_Images/menu2.jpg';
import menu3 from '../Pizza_Images/menu3.jpg';
import menu4 from '../Pizza_Images/menu4.jpg';
const Menu = () => {
    const menuItems = [
        { name: "Margherita Pizza", price: "$40.00", salePrice: "$24.00", image: menu1, tag: "SALE" },
        { name: "Mushroom Pizza", price: "$25.00", image: menu2 },
        { name: "Hawaiian Pizza", price: "$30.00", image: menu3, tag: "NEW" },
        { name: "Pesto Pizza", price: "$30.00", salePrice: "$20.00", image: menu4, tag: "SALE" },
    ];

    return (
        <div className="container my-5">
            <h2 className="text-left">Our Menu</h2>
            <div className="row">
                {menuItems.map((item, index) => (
                    <div className="col-md-3" key={index}>
                        <div className="card">
                            {item.tag && <span className="badge bg-warning text-dark position-absolute top-0 start-0">{item.tag}</span>}
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body text-center">
                                <h5>{item.name}</h5>
                                <p>{item.salePrice ? <><del>{item.price}</del> {item.salePrice}</> : item.price}</p>
                                <button className="btn btn-dark" style={{ width: '100%' }}>Buy</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;