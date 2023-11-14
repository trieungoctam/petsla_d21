import React from 'react'
import '../assets/styles/footer.css'
import pathimg from '../assets/footer/bannerProduct.png'
const Footer = () => {
  return (
    <div>
    <div className='footer_banner'>
        <img className='footer_banner_img' src={pathimg} alt="hihi" />
    </div>
    
    <div className="footer_contain grid wide">
      <div className="footer_contain--wrap">
        <div className="col l-4 c-4 mb-12">
          <div className="about-us">
            <h3>Về PetLa</h3>
            <p>PetsLa ra đời với sứ mệnh Pets hóa thế giới loài người bằng cách mang đến cho cộng đồng những content thú vị, đáng yêu về pets.</p>
          </div>
        </div>
        <div className="col l-4 c-4 mb-0"></div>
        <div className="col l-4 c-4 mb-12">
          <div className="follow-us">
            <h3>Follow Us</h3>
            <div className="follow-us--wrap">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            </div>

          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
export default Footer
