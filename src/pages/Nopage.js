import { useEffect } from "react";

const Nopage=()=>{

    useEffect(() => {
        document.title = "404 Not Found - PSK Performance"
      }, []);

    return (
    <div style={{height:"150px", marginLeft:"100px", color:"rgb(0,0,255)"}}>
        <p style={{fontSize:"40px"}}>The page can't be found.</p>
        <p style={{fontSize:"20px"}}>It looks like nothing was found at this location.</p>
    </div>);
}

export default Nopage;