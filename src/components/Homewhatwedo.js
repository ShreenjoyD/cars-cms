import "./../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Homewhatwedo() {
    const navigate=useNavigate();

    return (
        <div className="wwdsec">
            <div className="wwdsecleft"><h3>WHAT WE DO</h3><div className="secondsubh1">Service For Performance Parts Detailing For Cars</div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <button className="aboutsecbtn" onClick={()=>navigate("whatwedo")}>Learn More</button></div>
        </div>
    );
}

export default Homewhatwedo;