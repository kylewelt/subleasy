import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Parallax } from 'react-parallax'


class HomeContainer extends React.Component {
  render() {
    return(
      <Parallax
        bgImage="https://images.unsplash.com/photo-1484249655344-2798751785d3"
      >
          <br/>
          <Segment raised>
            Pellentesque habitant morbi tristique senectus.
            Pellentesque habitant morbi tristique senectus.
            Pellentesque habitant morbi tristique senectus.
            Pellentesque habitant morbi tristique senectus.
            Pellentesque habitant morbi tristique senectus.
            Pellentesque habitant morbi tristique senectus.
            Pellentesque habitant morbi tristique senectus.
            Pellentesque habitant morbi tristique senectus.
            Pellentesque habitant morbi tristique senectus.
          </Segment>
      </Parallax>
    )
  }
}

export default HomeContainer
