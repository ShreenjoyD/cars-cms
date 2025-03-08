import Motorh from "../components/Motorh";
import Motorb1 from "../components/Motorb1";
import Motorb2 from "../components/Motorb2";
import { useEffect } from "react";

function Motorsports(){

    useEffect(() => {
        document.title = "C2 Motorsports - PSK Performance"
      }, []);

    return (
        <>
            <Motorh/><Motorb1/><Motorb2/>
        </>
    );
}

export default Motorsports;