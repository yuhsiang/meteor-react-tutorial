import React, {Component} from 'react';
import ImageScore from './image_score';

class ImageDetail extends Component {
  render() {
    const image = this.props.image;
    return (
      <li className="media list-group-item">
        <div className="media-left">
          <img src={this.props.image.link}></img>
        </div>
        <div className="media-body">
          <h4 className="media-heading">
            {this.props.image.title}
          </h4>
          <p>
            {this.props.image.description}
          </p>
          <ImageScore ups={image.ups} downs={image.downs}/>
        </div>
      </li>
    );
  }
}

export default ImageDetail;
