import "./../styles/Layout.css";
import logo from "./../images/psk-logo-1.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import TtyOutlinedIcon from '@mui/icons-material/TtyOutlined';

function Footer() {
    return (<>
            <div className="fooleftdiv">
                <div><img src={logo} alt="Logo"/></div>
                <div className="foosocial"><span><FacebookIcon/></span><span><XIcon/></span><span><InstagramIcon/></span></div>
            </div>
            <div className="foorightdiv"><h3>Need Help?</h3><div><TtyOutlinedIcon/>Support & Commandes</div><div className="numb">07 68 00 14 63</div></div>
        </>
    )
}

export default Footer;