import "./../styles/Reprogrammation.css";
import ford from "./../images/ford-Logo.png"
import suzuki from "./../images/Suzuki-Logo.png";
import mercedes from "./../images/mercedes-Logo.png";
import volkswagen from "./../images/Volkswagen-Logo.png";
import jaguar from "./../images/jaguar-Logo.png";
//import lamborghini from "./../images/lamborghini-Logo.png";
//import jeep from "./../images/jeep-Logo.png";
//import nissan from "./../images/nissan-Logo.png";
//import kia from "./../images/kia-Logo.png";
//import fiat from "./../images/fiat-Logo.png";
import { useNavigate } from "react-router-dom";

const logos=[{id: 1, name: "ford", ig: ford}, {id: 2, name: "suzuki", ig: suzuki}, {id: 3, name: "mercedes", ig: mercedes}, {id: 4, name: "volkswagen", ig: volkswagen}, {id: 5, name: "jaguar", ig: jaguar}];

function Displaybrands(props) {

    const navigate=useNavigate();

    return (
        <li className="loglst"><img src={props.brand} alt={props.key} onClick={()=>navigate(`/branddetails/${props.name}/`)}/></li>
    );
}

function Brand() {

    return (<>
        <p className="btp">Choose a Brand</p>
        <p className="btd">PSK Performance has no particular commercial relationship with these brands, therefore logos are for information only.</p>
        <div className="btb"><ul>{logos.map((logo)=><Displaybrands key={logo.id} brand={logo.ig} name={logo.name}/>)}</ul></div>
        </>);
}

export default Brand;