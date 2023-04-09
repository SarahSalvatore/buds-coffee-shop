import React from "react";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const StoreMap = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Map of Store Location"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=1966+Queen+St+E,+Toronto,+ON+M4L+1H8`}
        style={{ border: 0, width: "100%", height: "100%" }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default StoreMap;
