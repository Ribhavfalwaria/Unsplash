import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { api } from "./Api";
import Content from "./Components/Content/Content";
import Photo from "./Components/Photo/Photo";
import Header from "./Components/Header/Header";
import Masonry from "react-responsive-masonry";

function App() {
  const [photosData, setPhotosData] = useState({
    photos: [],
    page: 1,
    perPage: 50,
    isLoading: false,
  });

  const fetchPhotos = useCallback((page, perPage) => {
    api.photos.list({ page: page, perPage: perPage }).then((data) => {
      if (data) {
        let paginatedData = data.response.results;
        setPhotosData((prev) => ({
          ...prev,
          photos:
            page === 1
              ? [...paginatedData]
              : prev.photos.concat([...paginatedData]),
          isLoading: false,
        }));
      }
    });
  }, []);

  useEffect(() => {
    fetchPhotos(1, 50);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchPhotos]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      !photosData.isLoading
    ) {
      setPhotosData((prev) => ({
        ...prev,
        page: prev.page + 1,
        isLoading: true,
      }));
      fetchPhotos(photosData.page + 1, 50);
    }
  };

  const { photos } = photosData;

  return (
    <div className="App">
      <Header />
      <Content />
      <div className="margin-photos">
        <Masonry columnsCount={3} gutter="20px">
          {photos.length &&
            photos.map((photo, i) => (
              <Photo
                key={i}
                photoUrl={photo.urls.small}
                likes={photo.likes}
                firstName={photo.user.first_name}
                lastName={photo.user.last_name}
                downloadUrl={photo.links.download}
                profilePhoto={photo.user.profile_image.small}
              />
            ))}
        </Masonry>
      </div>
    </div>
  );
}

export default App;
