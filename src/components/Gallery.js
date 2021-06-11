import React from "react";
import ImageGallery from "react-image-gallery";

const images = [];

class MyGallery extends React.Component {
  state = {
    images: [],
  };
  //
  render() {
    console.log(
      this.props.product.images &&
        this.props.product.images.map((image) => ({
          original: `http://localhost:5000/img/products/${image}`,
          thumbnail: `http://localhost:5000/img/products/${image}`,
        }))
    );
    return (
      <ImageGallery
        items={
          this.props.product.images
            ? this.props.product.images.map((image) => ({
                original: `http://localhost:5000/img/products/${image}`,
                thumbnail: `http://localhost:5000/img/products/${image}`,
              }))
            : this.state.images
        }
        showPlayButton="false"
      />
    );
  }
}

MyGallery.defaultProps = {
  product: {},
};
// thumbnailPosition="right"
export default MyGallery;
