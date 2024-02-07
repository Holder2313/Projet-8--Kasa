import UseAPICall from "../hooks/UseAPICall";
import CartLocation from "../components/CartLocation";
import Banner from "../components/Banner";
import bannerImg from "../assets/images/header-banner.jpeg";

export default function Home() {
  const data = UseAPICall();
  console.log(data);

  return (
    <div>
      <Banner img={bannerImg} title={"Chez vous, partout et ailleurs"} />

      <section className="locationGallery">
        {data.locationData &&
          data.locationData.map((obj, index) => (
            <CartLocation key={index} title={obj.title} img={obj.cover} />
          ))}
      </section>
    </div>
  );
}
