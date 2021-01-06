import React, { Component } from "react";
import MapDemo from "./MapDemo";

class GeolocationDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: '',
            longitude: ''
        }
    }

    // componentDidMount() {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         console.log(position);
    //         console.log("latitude is:", position.coords.latitude);
    //         console.log("longitude is:", position.coords.longitude);
    //     },
    //     function(error) {
    //         console.error("error code = " + error.code + " - " + error.message);
    //     })
    // }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                function (position) {
                    console.log(position);
                },
                function (error) {
                    console.error("error code = " + error.code + " - " + error.message);
                })
        }
    }

    render() {
        return (
            <div>
                <h4>Using geolocation JavaScript API in React</h4>
                <MapDemo location={this.state}/>
            </div>
        )
    }
}

export default GeolocationDemo