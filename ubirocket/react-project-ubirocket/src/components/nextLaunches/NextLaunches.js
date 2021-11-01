import React, {useState, useEffect} from "react";
import "./nextLaunches.css";
import iconheart from "../../assets/heart-solid.svg";
import iconheartregular from "../../assets/heart-regular.svg"




function NextLaunches (props) {
    const [list_launches, setList_launches] = useState([]);
    const get_list_launches = () => {
        fetch('https://api.spacexdata.com/v3/launches/upcoming').then(
            response => response.json()
        ).then(
            result => {
                const results_filter = result.map((launches) => {
                    return {
                        "id": Math.floor(Math.random() * 10000),
                        "mission_name": launches["mission_name"],
                        "launch_date": launches["launch_date_utc"],
                        "site_name": launches["launch_site"]["site_name"],
                        "favorites": false
                        };
                    }
                );
                setList_launches(results_filter);
            }
        )
    }

    useEffect(()=>{
        get_list_launches();
    }, [])


    const configFavorite = (event) => {
    const celdId = event.target.id;

    setList_launches((prev) => {
        const items = [...prev];
        const item_Updated = items.map((item) => {
            const nuevo_item = {...item}
                if (nuevo_item.id === +celdId) {
                    const actual_value = nuevo_item.favorites ? false : true;
                    nuevo_item.favorites = actual_value;
                }
                return nuevo_item
            });

            return item_Updated

        });
    };

    return (
       <div className="general-container">
            <div className="head-content">
                <div>Mission</div>
                <div>Date (UTC)</div>
                <div>Launchpad</div>
                <div>Favorites</div>
            </div>

            {
            list_launches.map( (item) =>
                <div className="container-items" key={item.id}>
                    <div>{item.mission_name}</div>
                    <div>{item.launch_date}</div>
                    <div>{item.site_name}</div>
                    <div className="favorites">
                        { item.favorites ? <img className="icon-heart" width = {19} height = {20} src={iconheart} id={item.id} onClick={configFavorite}/> :
                            <img className="icon-heart" width = {19} height = {20} src={iconheartregular} id={item.id} onClick={configFavorite}/>
                        }
                    </div>
                </div>
            )}
        </div>
    );
}

export default NextLaunches;