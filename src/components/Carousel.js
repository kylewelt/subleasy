import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import '../carousel.css'


class ImageCarousel extends React.Component {
  render () {
    return (
      <Carousel dynamicHeight infiniteLoop swipeScrollTolerance={1} interval={3000} autoPlay>
        <div>
          <img src="http://media.salon.com/2014/08/guy_fieri.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="http://a57.foxnews.com/global.fncstatic.com/static/managed/img/Leisure/2009/660/371/fieri.jpg?ve=1" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://19818-presscdn-pagely.netdna-ssl.com/wp-content/uploads/e47/78/7a82dbf5f47277f9c7bd9a8ee9d655ed.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="https://pixel.nymag.com/imgs/daily/grub/2016/06/06/06-guy-fieri.w710.h473.2x.jpg" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="https://pbs.twimg.com/media/DD92NfYXoAAA41H.jpg" />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src="http://www.newnownext.com/wp-content/uploads/2015/02/127939412.jpg" />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>
    )
  }
}

export default ImageCarousel
