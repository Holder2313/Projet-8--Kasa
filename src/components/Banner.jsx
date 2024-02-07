
export default function Banner({img, title}) {
  return (
    <header className="banner">
      <img className="banner__img" src={img} alt="image de fond banniere" />
      <h1 className="banner__title">{title} </h1>
    </header>
  );
} 
  