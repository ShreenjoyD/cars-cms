import "./../styles/Layout.css";
import logo from "./../images/psk-logo-1.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import TtyOutlinedIcon from '@mui/icons-material/TtyOutlined';

function Topheader() {
    return (
        <div className="parentdiv">
            <div className="leftdiv">
            <img src={logo} alt="Logo"/>
            <span className="social">FOLLOW US ON: </span><span className="media"><FacebookIcon/></span><span className="media"><XIcon/></span><span className="media"><InstagramIcon/></span>
            </div>
            <div className="rightdiv"><div><TtyOutlinedIcon/>Support & Commandes</div><div className="numb">07 68 00 14 63</div></div>
        </div>
    )
}

export default Topheader;