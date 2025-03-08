import Wwdh from "../components/Wwdh";
import Wwdb from "../components/Wwdb";
import { useEffect } from "react";

function Whatwedo(){

    useEffect(() => {
        document.title = "What We Do - PSK Performance"
      }, []);

    return (<>
            <Wwdh/><Wwdb/>
        </>);
}

export default Whatwedo;