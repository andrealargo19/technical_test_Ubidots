import NextLaunches from "./NextLaunches";
import nextLaunchesBag from "./nextLaunchesBag.css";
import iconarrowup from "../../assets/icon-arrow-up.svg"
import { Link } from 'react-router-dom';


function NextLaunchesBag (props) {
    return (
        <div>
            <div className="NextLaunches-bag">
                <h3 className="Launches-title"> Upcoming - Next Launches</h3>
                <div className="NextLaunches-sub-bag">
                    <NextLaunches/>
                </div>
                <Link to="/"><img className="icon-arrow-up" width = {23} height = {25} src={iconarrowup}/></Link>
            </div>
            
       </div>
    );
}

export default NextLaunchesBag;