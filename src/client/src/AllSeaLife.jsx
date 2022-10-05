import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



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
        console.log(typeof data);
        console.log(Array.isArray(data));
        console.log(data);
      }, []);


    return (  
        <div className="SeaLife">
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
        <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop> 
                    <div>
                        <img src={images['parrotfish.jpeg']} />
                        <p className="legend">Parrotfish</p>
                    </div>
                    <div>
                        <img src={images['reefmantaray.jpeg']} />
                        <p className="legend">Reef Manta Ray</p>
                    </div>
        </Carousel>

        </div>
    )
}

export default AllSeaLife;