import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import { useNavigate, useParams } from "react-router-dom";
import UseAPICall from "../hooks/UseAPICall";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

export default function LocationPage() {
  const navigate = useNavigate();
  const params = useParams();
  const data = UseAPICall();

  const id = params.id;


useEffect(() => {
  // S'assurer que data.locationData est chargé avant de faire la recherche
  if (data.locationData) {
    const currentLocation = data.locationData.find(
      (item) => item.id.toString() === id
    );

    if (!currentLocation) {
      navigate("/Error404");
    }
  }
}, [id, data.locationData, navigate]);
  
   const currentLocation = data.locationData?.find(
     (item) => item.id.toString() === id
   );
   if (!currentLocation) return null;

  
  
  return (
    <section className="locationPage">
      {/* carousel */}
      {currentLocation && <Carousel pictures={currentLocation.pictures} />}

      {/* infos */}
      {currentLocation && (
        <>
          <div className="info">
            <div className="info__left">
              <h3 className="info__left__titre">{currentLocation.title}</h3>
              <p className="info__left__location">{currentLocation.location}</p>
              {/* tags */}
              <div className="info__left__tags">
                {currentLocation.tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </div>
            </div>

            <div className="info__right">
              <div className="info__right__host">
                <div className="info__right__host__nameContainer">
                  <p className="info__right__host__nameContainer__name">
                    {currentLocation.host.name}
                  </p>
                </div>

                <img
                  className="info__right__host__img"
                  src={currentLocation.host.picture}
                  alt="photo de profil hébergeur"
                />
              </div>
              {/* notation étoiles */}
              <div className="info__right__rating">
                <Rating rating={parseInt(currentLocation.rating)} />
              </div>
            </div>
          </div>
          {/* accordeons */}
          <div className="info__collapse">
            <Collapse
              title={"Description"}
              info={currentLocation.description}
            />
            <Collapse
              title={"Équipements"}
              equipments={currentLocation.equipments}
            />
          </div>
        </>
      )}
    </section>
  );
}
