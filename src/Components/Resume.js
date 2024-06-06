import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Resume() {
  return (
    <div>
      <Navbar />
      <div className="mt-32 mb-14 flex items-center justify-center max-w-[50rem] mx-auto">
        <iframe
          src="https://drive.google.com/file/d/1dzW3opzugG5yd0BoPkdIMEBp5s3KVduY/preview"
          allow="autoplay"
          className="w-full"
          sandbox="allow-scripts allow-same-origin"
          style={{ aspectRatio: "1 / 1.4142", height: "100vh" }}
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
