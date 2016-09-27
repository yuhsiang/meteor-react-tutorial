import React, {Component} from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  {title: 'pen', link: 'https://dummyimage.com/600x400/000/fff'},
  {title: 'Apple', link: 'https://dummyimage.com/600x400'},
  {title: 'Pine Apple',link: 'https://dummyimage.com/600x400'},
  {title: 'Awesome', link: 'https://dummyimage.com/600x400'}
];

class ImageList extends Component {


  constructor(props) {
    super(props);
    console.log(this);
  }

  renderedImages() {
    const validImages = this.props.images.filter(image => !image.is_album);
    return validImages.map(image => <ImageDetail key={image.id} image={image} />);

  }

  render() {

    console.log(this.renderedImages());
    return (
      <ul className="media-list list-group">
        {this.renderedImages()}
      </ul>
    );
  }
};

export default ImageList;
