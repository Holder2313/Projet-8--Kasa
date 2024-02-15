import UseAPICall from "../hooks/UseAPICall";
import CartLocation from "../components/CartLocation";
import Banner from "../components/Banner";
import bannerImg from "../assets/images/header-banner.jpeg";
import { NavLink } from "react-router-dom";

export default function Home() {
  const data = UseAPICall();
  console.log(data); 

  return (
    <div>
      <Banner img={bannerImg} title={"Chez vous, partout et ailleurs"} />

      <section className="locationGallery">
        {data.locationData ? (
          data.locationData.map((obj, index) => (
            <NavLink key={index} to={`/card/${obj.id}`}>
              <CartLocation title={obj.title} img={obj.cover} />
            </NavLink>
          ))
        ) : (
          <p className="error-msg">Erreur lors de la récupération des données</p>
        )}
      </section>
    </div>
  );
}
