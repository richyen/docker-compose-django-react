import React from 'react';
import { Button } from 'semantic-ui-react';

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    margin: '0 1em'
  }
};

const images = [
  'https://via.placeholder.com/200x150?text=first',
  'https://via.placeholder.com/200x150?text=second',
  'https://via.placeholder.com/200x150?text=third',
  'https://via.placeholder.com/200x150?text=fourth',
  'https://via.placeholder.com/200x150?text=fifth',
  'https://via.placeholder.com/200x150?text=sixth',
  'https://via.placeholder.com/200x150?text=seventh',
  'https://via.placeholder.com/200x150?text=eighth',
  'https://via.placeholder.com/200x150?text=ninth',
  'https://via.placeholder.com/200x150?text=tenth'
];

export class Carousel extends React.Component {
  state = {
    currentImageIndex: 0
  };

  prevSlide = () => {
    const lastIndex = images.length - 1;
    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  nextSlide = () => {
    const lastIndex = images.length - 1;
    const resetIndex = this.state.currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  };

  render() {
    const index = this.state.currentImageIndex;

    let firstFiveImages = images.slice(index, index + 5);
    if (firstFiveImages.length < 5) {
      firstFiveImages = firstFiveImages.concat(
        images.slice(0, 5 - firstFiveImages.length)
      );
    }

    return (
      <div style={style.container}>
        <Button icon="left chevron" onClick={this.prevSlide} />
        {firstFiveImages.map((image, index) => (
          <img style={style.image} key={index} src={image} alt="placeholder" />
        ))}
        <Button icon="right chevron" onClick={this.nextSlide} />
      </div>
    );
  }
}

export default Carousel;
