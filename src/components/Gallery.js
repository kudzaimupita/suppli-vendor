import React from "react";
import ImageGallery from "react-image-gallery";

const images = [];

class MyGallery extends React.Component {
  state = {
    images: [],
  };
  //src={`https://suppli-images.s3.af-south-1.amazonaws.com/${row.imageCover && row.imageCover}`}
  render() {
    console.log(
      this.props.product.images &&
        this.props.product.images.map((image) => ({
          original: `https://suppli-images.s3.af-south-1.amazonaws.com/${image}`,
          thumbnail: `https://suppli-images.s3.af-south-1.amazonaws.com/${image}`,
        }))
    );
    return (
      <ImageGallery
        items={
          this.props.product.images
            ? this.props.product.images.map((image) => ({
                original: `https://suppli-images.s3.af-south-1.amazonaws.com/${image}`,
                thumbnail: `https://suppli-images.s3.af-south-1.amazonaws.com/${image}`,
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
