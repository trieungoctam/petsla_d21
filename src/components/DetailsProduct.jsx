import React from "react";
import  "../assets/styles/detailsProduct.css";

export default function DetailsProduct() {
  return (
    <div className="item-container">
      <img
        src="http://103.252.95.181:8000/media/photos/products/1_WVCTp11.jpg"
        alt="er"
        className="item-container-image col c-6 mb-12"
      />
      <div className="item-container-content col c-6 mb-12">
        <div className="item-container-title">Chu meo Amuse Cat may man</div>
        <div className="item-container-price">320.200d</div>
        <div className="item-container-button">
          <div className="button-container-buy item-container-button-button">buy now</div>
          <div className="button-container-add item-container-button-button">add to cart</div>
        </div>
        <div className="item-container-info-wrap">
          <div className="item-container-info">Thông tin sản phẩm</div>
        </div>
        <div className="item-container-description">
          Amuse - Những chiếc mèo bông mang đến niềm vui và may mắn. Không chỉ
          để trưng bày, để ôm, tụi Amuse còn mang đến cho bạn những điều may
          mắn, hạnh phúc và niềm vui đến với bạn. Bạn có muốn đón nhận những
          điều tốt đẹp từ Amuse không nè? - Chất liệu: Nỉ và bông cao cấp. -
          Kích thước: size 30 và size 40cm. - Phân loại: Xám và Đen.
        </div>
      </div>
    </div>
  );
}
