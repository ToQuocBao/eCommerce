import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className="footer">
            <Link to="/Contact"><div className="contact">
                LIÊN LẠC
            </div></Link>
            <Link to="/AboutUs"><div className="aboutus">
                VỀ CHÚNG TÔI
            </div></Link>
            <div className="social-icons">
                <a href="./"><div className="fb-icon icon"></div></a>
                <a href="./"><div className="youtube-icon icon"></div></a>
                <a href="./"><div className="twitter-icon icon"></div></a>
                <a href="./"><div className="zalo-icon icon"></div></a>
            </div>
        </div>
    )
}

export default Footer