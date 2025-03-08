import "./../styles/Home.css";
import Homeabout from "../components/Homeabout";
import Homewhatwedo from "../components/Homewhatwedo";
import Careproduct from "../components/Careproduct";
import Carousel from "../components/Carousel";
import { useEffect } from "react";

function Home(){

    useEffect(() => {
        document.title = "Home - PSK Performance"
      }, []);

    return (<>
            <Carousel/>
            <Homeabout/>
            <Homewhatwedo/>
            <Careproduct/>
        </>);
}

export default Home;