import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerAccessories from '../assets/images/banner-accessories.jpg';
import bannerLatest from '../assets/images/banner-latest.jpg';
import bannerSales from '../assets/images/banner-sales.jpg';

// Composants flèches personnalisées
function NextArrow(props) {
  const { onClick } = props;
  return <div className="custom-arrow next" onClick={onClick}>›</div>;
}

function PrevArrow(props) {
  const { onClick } = props;
  return <div className="custom-arrow prev" onClick={onClick}>‹</div>;
}

function Home() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const banners = [
    { img: bannerAccessories, link: "/shop/accessories" },
    { img: bannerLatest, link: "/shop/latest" },
    { img: bannerSales, link: "/shop/sale" }
  ];

  return (
    <div className="home">
      {/* CAROUSEL SECTION */}
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="carousel-slide" onClick={() => navigate(banner.link)}>
              <img src={banner.img} alt={`banner-${index}`} className="carousel-image" />

            </div>
          ))}
        </Slider>
      </div>

      {/* HERO + STATIC BANNERS */}
      <div className="hero-banner">
        <h1 className="hero-title">Wear your soul.</h1>
        <p className="hero-subtitle">Fashion made to express YOU 💖</p>
        <button className="hero-button" onClick={() => navigate('/shop/sale')}>Shop the Sale</button>
      </div>

      <div className="banners">
        <div className="banner" onClick={() => navigate('/shop/dresses')}>
          <h2>Dresses 👗</h2>
          <p>Chic • Summer • Elegant</p>
        </div>
        <div className="banner" onClick={() => navigate('/shop/shoes')}>
          <h2>Shoes 👠</h2>
          <p>Original • Bold • Iconic</p>
        </div>
        <div className="banner" onClick={() => navigate('/shop/plus')}>
          <h2>Plus Size 🫶</h2>
          <p>Slay at any size</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
