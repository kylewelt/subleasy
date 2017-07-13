import React from 'react'
import { Icon, Loader } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'

class GoogleMap extends React.Component {
  state = {
    map: <Loader active>Loading</Loader>
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sublet) {
      this.setState({
        map: (
          <GoogleMapReact
            defaultCenter={{
              lat: nextProps.sublet.location.lat * 1,
              lng: nextProps.sublet.location.long * 1
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
              lat={nextProps.sublet.location.lat * 1}
              lng={nextProps.sublet.location.long * 1}
             />
          </GoogleMapReact>
        )
      })
    }
  }

  render() {
    return (
      <div style={{width: '100%', height: '400px'}}>
        {this.state.map}
      </div>
    )
  }
}

export default GoogleMap
