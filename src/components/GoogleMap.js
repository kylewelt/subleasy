import React from 'react'
import GoogleMapReact from 'google-map-react'

class GoogleMap extends React.Component {
  state = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  }

  componentWillMount() {
  }

  render() {
    return (
      <div style={{width: '100%', height: '400px'}}>
        <GoogleMapReact defaultCenter={this.state.center} defaultZoom={this.state.zoom} />
      </div>

    );
  }
}

export default GoogleMap
