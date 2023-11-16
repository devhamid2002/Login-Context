import React, { useContext } from "react";
import Header from "../../components/header/Header";
import Picture from "../../components/Picture/Picture";
import { AppContext } from "../../App";

function Gallery() {
  const { isLogin } = useContext(AppContext);
  return (
    <>
      <Header />
      {isLogin ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mt-8 mx-auto">
          <Picture />
          <Picture />
          <Picture />
          <Picture />
          <Picture />
          <Picture />
          <Picture />
          <Picture />
        </div>
      ) : (
        <p className="mt-[25%]">You must login</p>
      )}
    </>
  );
}

export default Gallery;
