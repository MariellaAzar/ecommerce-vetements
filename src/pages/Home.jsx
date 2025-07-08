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

function NextArrow(props) {
  const { onClick } = props;
  return <div className="custom-arrow next" onClick={onClick}>›</div>;
}

function PrevArrow(props) {
  const { onClick } = props;
  return <div className="custom-arrow prev" onClick={onClick}>‹</div>;
}

const categories = [
  { name: 'Dresses', emoji: '👗', desc: 'Chic • Summer • Elegant', query: { category: 'dresses' }, color: '#FAD4D4' },
  { name: 'Shoes', emoji: '👠', desc: 'Original • Bold • Iconic', query: { category: 'shoes' }, color: '#D4F1F4' },
  { name: 'Plus Size', emoji: '🫶', desc: 'Slay at any size', query: { category: 'plus' }, color: '#FFE5B4' },
  { name: 'Accessories', emoji: '🎒', desc: 'Trendy • Unique', query: { category: 'accessories' }, color: '#E0BBE4' }
];

const banners = [
  { img: bannerAccessories, query: { category: 'accessories' }, caption: "Accessories 🎒" },
  { img: bannerLatest, query: { latest: 'true' }, caption: "Latest Arrivals ✨" }, // assume you handle "latest" filter
  { img: bannerSummer, query: { subcategory: 'summer' }, caption: "Summer Vibes ☀️" },
  { img: bannerSales, query: { sale: 'true' }, caption: "Hot Sales 🔥" }
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

  // Helper to build URL with query params string
  const buildShopUrl = (queryObj) => {
    const params = new URLSearchParams(queryObj).toString();
    return `/shop?${params}`;
  };

  return (
    <div className="home">
      {/* CAROUSEL SECTION */}
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div 
              key={index} 
              className="carousel-slide" 
              onClick={() => navigate(buildShopUrl(banner.query))}
              role="button"
              tabIndex={0}
              onKeyPress={e => { if(e.key === 'Enter') navigate(buildShopUrl(banner.query)); }}
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
        <button className="hero-button" onClick={() => navigate(buildShopUrl({ sale: 'true' }))}>Shop the Sale</button>
      </div>

      {/* CATEGORIES GRID */}
      <div className="categories-grid">
        {categories.map(({ name, emoji, desc, query, color }) => (
          <div
            key={name}
            className="category-card"
            style={{ backgroundColor: color }}
            onClick={() => navigate(buildShopUrl(query))}
            role="button"
            tabIndex={0}
            onKeyPress={e => { if(e.key === 'Enter') navigate(buildShopUrl(query)); }}
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
