import abimg1 from "./../images/about-picture.png";
import "./../styles/About.css";

function Aboutbody1(){
    return (
        <div className="ab1">
            <p className="aboh">ABOUT PSK PERFORMANCE</p>
            <p className="abob">For 9 years PSK has specialized in reprogramming in order to offer you improved engine performance but also fuel savings.</p>
            <div className="abody">
                <div className="ableftdiv"><img src={abimg1} alt="abim1"/></div>
                <div className="abrightdiv"><p>Our optimizations are carried out within the manufacturer’s limits, therefore without danger for your engine. All of our optimizations are our own creations.
With PSK, optimizing the performance of your vehicle provides certain driving pleasure!
Our objectives are to improve the performance of most vehicles (cars, utility vehicles) whether they are gasoline or diesel engines with or without turbo.
To optimize engine power and torque over the entire engine rotation speed range, particularly for turbo diesel vehicles (after optimization you will have the impression of being seated in a new vehicle).</p></div>
            </div>
        </div>
    );
}

export default Aboutbody1;