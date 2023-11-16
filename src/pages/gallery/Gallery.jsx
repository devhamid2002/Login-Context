import React from "react";
import Header from "../../components/header/Header";
import Picture from "../../components/Picture/Picture";

function Gallery() {
  return (
    <>
      <Header />
      {true ? (
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
        <p className="mt-[25%]">You must log in</p>
      )}
    </>
  );
}

export default Gallery;
