import { Link } from "react-router-dom";
import Logo from "../ui/Logo"


function Hd() {
    return (
        <header className="header">
            <div className="wrap max-w-screen-2xl mx-auto">

                <nav>
                    <ul className="menu">
                        <li className=""><Link to="/aboutme/">ABOUTME</Link></li>
                        <li className=""><Link to="/contact/">CONTACT</Link></li>
                        <li className="d-none">
                            <Link to="#">PROJECT</Link>
                            <ul className="submenu">
                                <li><Link to="/team/"><em></em><span>TEAM</span></Link></li>
                                <li><Link to="/personal"><em></em><span>PERSONAL</span></Link></li>
                            </ul>
                        </li>
                        <li className=""><Link to="/preinterview/">PRE-INTERVIEW</Link></li>
                    </ul>
                </nav>

                <div className="logo">
                    <a href="/" className="text-white"><Logo color1="white" color2="black"></Logo></a>
                </div>

                <div className="hamWrap">
                    <div className="hambtn">
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Hd;