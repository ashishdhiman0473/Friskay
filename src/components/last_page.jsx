import Navbar from "./Navbar";
const Last_pg = () => {
    return(
        <>
        <div className="last-pg">
            <p className="brand-nm">Friskay</p>
            <div className="last-grid">
                <div className="last-grid-row">
                    <p className="Brand-advt">Are you ready to<br></br> go Bonkers?</p>
                </div>
                <div>
                    <button className="last-btn">Get Bonkers</button>
                </div>
            </div>
        </div>
        <div className="foot">
            <Navbar/>
        </div>
        </>
    )
};

export default Last_pg;