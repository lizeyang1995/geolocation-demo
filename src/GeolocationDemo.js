import React, { Component } from "react";

class GeolocationDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position);
            console.log("latitude is:", position.coords.latitude);
            console.log("longitude is:", position.coords.longitude);
        },
        function(error) {
            console.error("error code = " + error.code + " - " + error.message);
        })
    }

    render() {
        return (
            <div>
                <h4>Using geolocation JavaScript API in React</h4>
            </div>
        )
    }
}

export default GeolocationDemo