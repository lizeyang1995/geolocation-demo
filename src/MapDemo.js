import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import React, { Component } from 'react'

const mapStyle = {
    width: '100%',
    height: '100$'
}

class MapDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'React'
        }
    }

    render () {
        return (
            <div>
                <Map
                google={this.props.google}
                zoom={14}
                style={mapStyle}
                initialCenter={{
                    lat: 34.2110986,
                    lng: 108.83636600000001
                }}
                >
                    <Marker
                    onClick={this.onMarkerClick}
                    name={'this is test name'} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'API_KEY'
})(MapDemo)