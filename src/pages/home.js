import React, { Component } from 'react';
import MediaCard from '../components/card.js';
import SimpleCard from '../components/simpleCard.js';
import Carsel from '../components/carousel.js';


class Home extends Component {

render (){

    return (
        <div >
            <MediaCard />
           <Carsel />

            <SimpleCard />
        </div>
    )   
}//renderdd
} //Home

export default Home;