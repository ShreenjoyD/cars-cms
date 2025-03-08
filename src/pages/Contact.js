import Conth from "../components/Conth";
import Cbodyl from "../components/Cbodyl";
import Cform from "../components/Cform";
import "./../styles/Contact.css";
import { useEffect } from "react";

function Contact(){

    useEffect(() => {
        document.title = "Contact - PSK Performance"
      }, []);

    return (
        <>
            <Conth/><div className="cblf"><Cbodyl/><Cform/></div>
        </>
    );
}

export default Contact;