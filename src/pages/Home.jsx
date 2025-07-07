import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerAccessories from '../assets/images/banner-accessories.jpg';
import bannerLatest from '../assets/images/banner-latest.jpg';
import bannerSales from '../assets/images/banner-sales.jpg';
import bannerSummer from '../assets/images/banner-summer.jpg';

// Flèches personnalisées du carousel
function NextArrow(props) {
  const { onClick } = props;
  return <div className="custom-arrow next" onClick={onClick}>›</div>;
}

function PrevArrow(props) {
  const { onClick } = props;
  return <div className="custom-arrow prev" onClick={onClick}>‹</div>;
}

const categories = [
  { name: 'Dresses', emoji: '👗', desc: 'Chic • Summer • Elegant', link: '/shop/dresses', color: '#FAD4D4' },
  { name: 'Shoes', emoji: '👠', desc: 'Original • Bold • Iconic', link: '/shop/shoes', color: '#D4F1F4' },
  { name: 'Plus Size', emoji: '🫶', desc: 'Slay at any size', link: '/shop/plus', color: '#FFE5B4' },
  { name: 'Accessories', emoji: '🎒', desc: 'Trendy • Unique', link: '/shop/accessories', color: '#E0BBE4' }
];

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
    { img: bannerAccessories, link: "/shop/accessories", caption: "Accessories 🎒" },
    { img: bannerLatest, link: "/shop/latest", caption: "Latest Arrivals ✨" },
    { img: bannerSummer, link: "/shop/summer", caption: "Summer Vibes ☀️" },
    { img: bannerSales, link: "/shop/sale", caption: "Hot Sales 🔥" }
  ];

  return (
    <div className="home">
      {/* CAROUSEL SECTION */}
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div 
              key={index} 
              className="carousel-slide" 
              onClick={() => navigate(banner.link.toLowerCase())}
              role="button"
              tabIndex={0}
              onKeyPress={e => { if(e.key === 'Enter') navigate(banner.link.toLowerCase()); }}
            >
              <img src={banner.img} alt={`banner-${index}`} className="carousel-image" />
              <div className="carousel-caption">{banner.caption}</div>
            </div>
          ))}
        </Slider>
      </div>

      {/* HERO */}
      <div className="hero-banner">
        <h1 className="hero-title">Wear your soul.</h1>
        <p className="hero-subtitle">Fashion made to express YOU 💖</p>
        <button className="hero-button" onClick={() => navigate('/shop/sale')}>Shop the Sale</button>
      </div>

      {/* CATEGORIES GRID */}
      <div className="categories-grid">
        {categories.map(({ name, emoji, desc, link, color }) => (
          <div
            key={name}
            className="category-card"
            style={{ backgroundColor: color }}
            onClick={() => navigate(link.toLowerCase())}
            role="button"
            tabIndex={0}
            onKeyPress={e => { if(e.key === 'Enter') navigate(link.toLowerCase()); }}
          >
            <div className="category-emoji">{emoji}</div>
            <h3 className="category-name">{name}</h3>
            <p className="category-desc">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
