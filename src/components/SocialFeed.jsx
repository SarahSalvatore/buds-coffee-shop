import React, { useState, useEffect } from "react";

const SocialFeed = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      // Replace the access token and user ID with your own values
      const accessToken = "YOUR_ACCESS_TOKEN";
      const userId = "YOUR_USER_ID";

      const response = await fetch(
        `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,thumbnail_url&limit=10&access_token=${accessToken}`
      );
      const data = await response.json();

      setImages(data.data);
    };

    getImages();
  }, []);

  return (
    <section>
      <h2>Recent Instagram Posts</h2>
      <div className="instagram-feed">
        {images.map((image) => (
          <a
            href={image.media_url}
            key={image.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image.thumbnail_url} alt="Instagram post" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialFeed;
