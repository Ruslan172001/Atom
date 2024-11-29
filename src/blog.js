import React from "react";
import Headerblog from "./components/Blog-header/Header_blog";
import CardBlog from "./components/CardBlog/CardBlog";
import BlogQuiz from "./components/BlogQuiz/BlogQuiz";
import Footer from "./components/Footer/Footer";
import Copy from "./components/Copy/Copy";

function blog() {
  return (
    <div>
      <Headerblog />
      <CardBlog />
      <BlogQuiz />
      <Footer />
      <Copy />
    </div>
  );
}

export default blog;
