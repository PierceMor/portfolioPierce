import React, { Component } from 'react';
import MediaCard from '../components/card.js';
import SimpleCard from '../components/simpleCard.js';


class Project extends Component {
render (){
    return (
        <div>
            <MediaCard />
            <SimpleCard />
        </div>
    )
}//render
} //Home

export default Project;