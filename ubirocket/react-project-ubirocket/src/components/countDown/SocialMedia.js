import socialMedia from "./socialMedia.css";
import share from "./../../assets/share.svg";
import facebook from "./../../assets/facebook.svg";
import twitter from "./../../assets/twitter.svg";
import instagram from "./../../assets/instagram.svg";
import linkedin from "./../../assets/linkedin.svg";



function SocialMedia (props) {
    return (
       <div className="share-button">
           <span><img className="icon-share" width = {20} height = {20} src={share}/>Share Launch!</span>
           <a href={'http://facebook.com/sharer.php?u=http://www.inertiasas.com&t=rocket_launch'} target="_blank"><img className="icon-facebook" width = {22} height = {23} src={facebook}/></a>
           <a href={'https://twitter.com/intent/tweet'}target="_blank"><img className="icon-twitter" width = {22} height = {23} src={twitter}/></a>
           <a href={'https://www.instagram.com'}target="_blank"><img className="icon-instagram" width = {22} height = {23} src={instagram}/></a>
           <a href={'https://www.linkedin.com/sharing/share-offsite/?url=http://www.inertiasas.com'}target="_blank"><img className="icon-linkedin" width = {22} height = {23} src={linkedin}/></a>
       </div>
    );
}

export default SocialMedia;