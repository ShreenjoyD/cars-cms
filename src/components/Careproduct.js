import "./../styles/Home.css";
import careig from "./../images/care-product-.png";
import TtyOutlinedIcon from '@mui/icons-material/TtyOutlined';
import { ShippingFast } from '@emotion-icons/fa-solid/ShippingFast';
import { BoxOpen } from "@emotion-icons/fa-solid/BoxOpen";
import { AssignmentReturn } from '@emotion-icons/material/AssignmentReturn';

function Careproduct() {
    return (<>
        <div className="cp">
            <div className="care1"><img src={careig} alt="careprod"/></div>
            <div className="care2"><p className="cpp1">We Care Of Your Product And Convenience</p><p className="cpp2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><div className="cpd"><div><TtyOutlinedIcon/>Support & Commandes</div><div className="numb">07 68 00 14 63</div></div></div>
        </div>
        <div className="safeinfo">
        <div><span><ShippingFast/></span></div>
        <div><span><BoxOpen/></span></div>
        <div><span><AssignmentReturn/></span></div>
    </div>
    </>);
}

export default Careproduct;