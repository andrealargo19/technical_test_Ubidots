import countDown from "./countDown.css";
import SocialMedia from "./SocialMedia";

function CountDown (props) {
    return (
        <div className="count-background">
            <h2 className="count-title">{props.title}
            <p className="count-paragraph">{props.paragraph}</p>
            </h2>
            
       </div>
       

    );
}

export default CountDown;