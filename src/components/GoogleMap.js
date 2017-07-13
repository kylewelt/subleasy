import React from 'react'
import { Icon, Loader } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'

class GoogleMap extends React.Component {
  state = {
    map: <Loader active>Loading</Loader>
  }

  componentWillMount() {
    if (this.props.sublet) {
      this.setState({
        map: (
          <GoogleMapReact
            defaultCenter={{
              lat: this.props.sublet.location.lat * 1,
              lng: this.props.sublet.location.long * 1
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
              lat={this.props.sublet.location.lat * 1}
              lng={this.props.sublet.location.long * 1}
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
