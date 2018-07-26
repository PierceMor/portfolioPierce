import React, { Component } from 'react';
import MediaCard from '../components/card.js';
import SimpleCard from '../components/simpleCard.js';


class Home extends Component {

render (){

    return (
        <div backgroundColor= 'grey' >
            <MediaCard />
            <SimpleCard />
        </div>
    )   
}//renderdd
} //Home

export default Home;