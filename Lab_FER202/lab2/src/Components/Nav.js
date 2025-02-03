import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="" style={{ display: "flex", backgroundColor: "#333333", height: "50px", }}>

            <div className="col-md-6" style={{marginTop: "10px"}}>
                <div className="d-flex justify-content-around w-100" style={{textAlign: "center"}}>
                    <span style={{color: "white", fontSize: "2rem", }}>Pizza House</span>
                    <Link to="/" className="">Home</Link>
                    <Link to="/about" className="">About Us</Link>
                    <Link to="/contact" className="">Contact</Link>
                </div>
            </div>

            <div className="col-md-6" style={{ textAlign: "center", marginTop: "10px" }}>
                <input
                    type="text"
                    className=""
                    placeholder="Search"
                />
                <button className="">
                    🔍
                </button>
            </div>
        </nav>
    );
};

export default Nav;
