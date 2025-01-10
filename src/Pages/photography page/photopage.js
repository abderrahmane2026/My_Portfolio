import React from "react";
import { useNavigate } from "react-router-dom";
import categories from "../../Data/photodata.json"; // استيراد بيانات التصنيفات
import "./photopage.css";

const PhotoPage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="photo-page">
      <h1 className="page-title">Photo Categories</h1>
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category.id)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <h2 className="category-name">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoPage;
