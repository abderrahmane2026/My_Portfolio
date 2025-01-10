import React, { useState } from "react";
import { useParams } from "react-router-dom";
import categories from "../../Data/photodata.json"; // استيراد بيانات التصنيفات
import "./photodetail.css";

const Photodetails = () => {
  const { category } = useParams();
  const categoryData = categories.find((c) => c.id === parseInt(category));

  // حالة للتحكم بالصورة المفتوحة
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  if (!categoryData) {
    return <div className="error">Category not found!</div>;
  }

  return (
    <div className="category-details-page">
      <h1 className="page-title">{categoryData.name} Photos</h1>
      <div className="photos-grid">
        {categoryData.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={categoryData.name}
            className="photo"
            onClick={() => setSelectedPhoto(photo)} // عند النقر على الصورة
          />
        ))}
      </div>

      {/* Modal لعرض الصورة بحجم كامل */}
      {selectedPhoto && (
        <div className="photo-modal">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setSelectedPhoto(null)} // إغلاق الصورة
            >
              &times;
            </button>
            <img src={selectedPhoto} alt="Selected" className="full-photo" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Photodetails;
