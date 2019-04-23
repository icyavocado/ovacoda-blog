import React from "react";
import Navbar from "Layouts/Navbar";
import Title from "./_sections/Title";
import Content from "./_sections/Content";
import Footer from "Layouts/Footer";

const Blog = () => (
  <div>
    <div
      className="banner-image mb-5 pt-2 angle-edge"
      style={{
        backgroundImage:
          "url('https://images.vice.com/motherboard/content-images/article/21196/1429830422100750.jpg')"
      }}
    >
      <Navbar />
      <Title />
    </div>
    <Content />
    <Footer />
  </div>
);

export default Blog;
