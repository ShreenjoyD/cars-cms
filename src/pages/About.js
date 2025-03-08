import Abouttop from "../components/Abouttop";
import Aboutbody1 from "../components/Aboutbody1";
import Aboutbody2 from "../components/Aboutbody2";
import { useEffect } from "react";

function About(){

    useEffect(() => {
        document.title = "About - PSK Performance"
      }, []);

    return (<>
            <Abouttop/><Aboutbody1/><Aboutbody2/>
        </>
    );
}

export default About;