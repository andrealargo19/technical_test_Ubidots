import React, {useEffect, useState} from 'react';
import iconarrow from "../../assets/icon-arrow.svg"
import CountDown from "./CountDown";
import "../countDown/countDownBag.css";
import SocialMedia from "./SocialMedia";
import { Link } from 'react-router-dom';


const different_dates = (future_date) => {
    const date_today = new Date();
    const different_date =  date_today - future_date;
    let operation = Math.abs(different_date) / 1000;
    const days = Math.floor(operation / 86400);
    operation -= days * 86400;
    const hours = Math.floor(operation / 3600) % 24;
    operation -= hours * 3600;
    const minutes = Math.floor(operation / 60) % 60;
    operation -= minutes * 60;
    const seconds = Math.floor(operation % 60);
    const results_different_date = [days, hours, minutes, seconds];
    return results_different_date;
}


function CountDownBag (props) {
    const [count, setCount] = useState({});
        const getLaunchData = () => {
            fetch('https://api.spacexdata.com/v3/launches/next').then(
                response => response.json()
            ).then(
            data => {
                const [days_to_next_launch, hours_to_next_launch, minutes_to_next_launch, seconds_to_next_launch] = different_dates(Date.parse(data.launch_date_utc));
                setCount({
                        days: days_to_next_launch,
                        hours: hours_to_next_launch,
                        minutes: minutes_to_next_launch,
                        seconds: seconds_to_next_launch
                });
            }
        )
    }

    
    useEffect(() => {
        const interval = setInterval(() => {
            getLaunchData();
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
       <div className="container-bg">
           <h1 className="title-bg">Upcoming:SXM-8</h1>
           <CountDown
               title = {count.days}
               paragraph = "DAYS"
           />
           <CountDown
               title = {count.hours}
               paragraph = "HOURS"
           />
           <CountDown
               title = {count.minutes}
               paragraph = "MINUTES"
           />
           <CountDown
               title = {count.seconds}
               paragraph = "SECONDS"
           />
           <Link to="/next"><img className="icon-arrow" width = {23} height = {25} src={iconarrow}/></Link>
        <SocialMedia/>
        </div>
    );
}

export default CountDownBag;