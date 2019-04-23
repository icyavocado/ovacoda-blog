import React, { Component } from "react";
import Navbar from "Layouts/Navbar";
import Footer from "Layouts/Footer";

class BlogIndex extends Component {
  render() {
    return (
      <div>
        <div
          className="banner-image mb-5 pt-2 angle-edge"
          style={{
            backgroundImage:
              "url('https://images.vice.com/motherboard/content-images/article/21196/1429830422100750.jpg')"
          }}
        >
          <Navbar />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div
                className="image-fluid"
                style={{
                  height: 200 + "px",
                  padding: 0,
                  backgroundImage:
                    "url(https://images.vice.com/motherboard/content-images/article/21196/1429830422100750.jpg)"
                }}
              />
              <div className="BlogIndex__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="BlogIndex__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
                veritatis earum! Accusamus, natus. Sapiente aut eum, dignissimos
                molestias, voluptatem porro laborum blanditiis magnam nulla
                pariatur fugiat asperiores, voluptates a? Esse!
              </div>
            </div>

            <div className="col-4">
              <div
                className="image-fluid"
                style={{
                  height: 200 + "px",
                  padding: 0,
                  backgroundImage:
                    "url(https://images.vice.com/motherboard/content-images/article/21196/1429830422100750.jpg)"
                }}
              />
              <div className="BlogIndex__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="BlogIndex__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
                veritatis earum! Accusamus, natus. Sapiente aut eum, dignissimos
                molestias, voluptatem porro laborum blanditiis magnam nulla
                pariatur fugiat asperiores, voluptates a? Esse!
              </div>
            </div>

            <div className="col-4">
              <div
                className="image-fluid"
                style={{
                  height: 200 + "px",
                  padding: 0,
                  backgroundImage:
                    "url(https://images.vice.com/motherboard/content-images/article/21196/1429830422100750.jpg)"
                }}
              />
              <div className="BlogIndex__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className="BlogIndex__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
                veritatis earum! Accusamus, natus. Sapiente aut eum, dignissimos
                molestias, voluptatem porro laborum blanditiis magnam nulla
                pariatur fugiat asperiores, voluptates a? Esse!
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BlogIndex;
