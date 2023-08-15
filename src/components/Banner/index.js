import style from "./Banner.module.css";

function Banner({image}) {
  return (
    <div 
        className={style.banner}
        style={{ backgroundImage: `url('/images/banner-${image}.jpg')` }}
    ></div>
  );
}

export default Banner;
