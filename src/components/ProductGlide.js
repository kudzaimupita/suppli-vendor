import React from "react";
// JavaScript library for creating fancy carousels like components
import Glide from "@glidejs/glide";
// reactstrap components
import { Row, Col } from "reactstrap";

const leftStyle = { left: "40%", bottom: "-120px" };
const rightStyle = { bottom: "-120px" };

function Example() {
  React.useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 4,
    }).mount();
  }, []);
  return (
    <>
      <Row>
        <Col md="6">
          <div className=" glide">
            <div className=" glide__track pl-5" data-glide-el="track">
              <ul className=" glide__slides">
                <li className=" glide__slide">
                  <img
                    alt="..."
                    height="500"
                    rel="nofollow"
                    src="https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=881&amp;q=80"
                    width="450"
                  ></img>
                </li>
                <li className=" glide__slide">
                  <img
                    alt="..."
                    height="500"
                    rel="nofollow"
                    src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                    width="450"
                  ></img>
                </li>
                <li className=" glide__slide">
                  <img
                    alt="..."
                    height="500"
                    rel="nofollow"
                    src="https://images.unsplash.com/photo-1491378630646-3440efa57c3b?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                    width="450"
                  ></img>
                </li>
                <li className=" glide__slide">
                  <img
                    alt="..."
                    rel="nofollow"
                    src="https://images.unsplash.com/photo-1512100254544-47340ba56b5d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1300&amp;q=80"
                    width="450"
                  ></img>
                </li>
                <li className=" glide__slide">
                  <img
                    alt="..."
                    height="500"
                    rel="nofollow"
                    src="https://images.unsplash.com/photo-1531386450450-969f935bd522?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1275&amp;q=80"
                    width="450"
                  ></img>
                </li>
              </ul>
            </div>
            <div className=" glide__arrows" data-glide-el="controls">
              <button
                className=" glide__arrow glide__arrow--left"
                data-glide-dir="<"
                style={leftStyle}
              >
                <i className=" ni ni-bold-left text-default"></i>
              </button>
              <button
                className=" glide__arrow glide__arrow--right"
                data-glide-dir=">"
                style={rightStyle}
              >
                <i className=" ni ni-bold-right text-default"></i>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Example;
