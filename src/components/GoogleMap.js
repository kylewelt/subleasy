import React from 'react'
import { Icon, Loader } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'

class GoogleMap extends React.Component {
  render() {
    console.log(this.props.location);
    return (
      <div style={{width: '100%', height: '400px'}}>
        <GoogleMapReact
          defaultCenter={{
            lat: this.props.location.lat * 1,
            lng: this.props.location.long * 1
          }}
          defaultZoom={15}
          bootstrapURLKeys={{
            key: 'AIzaSyC25JhThFIClUrmfkCll2VZfOv6BsYCBas',
            language: 'en'
          }}
        >
          <Icon
            name='target'
            size='big'
            lat={this.props.location.lat * 1}
            lng={this.props.location.long * 1}
           />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap
