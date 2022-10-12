import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import IshigakiMap from "./IshigakiMap"



function AllSeaLife () {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
    const images = importAll(require.context('../../fishpics', false, /\.(png|jpe?g|svg)$/))

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/sealife')
        .then(function (response) {
          setData(response.data);
        })
      }, []);


    return (  
        <div className="SeaLife">
            <Carousel autoPlay interval="3200" transitionTime="3200" infiniteLoop> 
                    <div>
                        <img src={images['parrotfish.jpeg']} />
                        <p className="legend">Parrotfish</p>
                    </div>
                    <div>
                        <img src={images['reefmantaray.jpeg']} />
                        <p className="legend">Reef Manta Ray</p>
                    </div>
                    <div>
                        <img src={images['whitetipreefshark.jpeg']} />
                        <p className="legend">White Tip Reef Shark</p>
                    </div>
                    <div>
                        <img src={images['green-sea-turtle.jpeg']} />
                        <p className="legend">Green Sea Turtle</p>
                    </div>
                    <div>
                        <img src={images['sea-snake.jpeg']} />
                        <p className="legend">Sea Snake</p>
                    </div>
                    <div>
                        <img src={images['clarksaenemonefish.jpeg']} />
                        <p className="legend">Clark's Anemone Fish</p>
                    </div>
                    <div>
                        <img src={images['trumpetfish.jpeg']} />
                        <p className="legend">Trumpetfish</p>
                    </div>
            </Carousel>

            {data ? data.map(site => {
                return (
                <>
                <tr>
                    <td>{site}</td>
                </tr>
                </>
                )
            }) : 
            <> </>}

        </div>
    )
}

export default AllSeaLife;