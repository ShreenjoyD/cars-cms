import Brand from "../components/Brand";
import { useEffect } from "react";

function Reprogrammation(){

    useEffect(() => {
        document.title = "Reprogrammation - PSK Performance"
      }, []);

    return (<>
        <Brand/>
        </>);
}

export default Reprogrammation;