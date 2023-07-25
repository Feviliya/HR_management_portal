import React from 'react'
import '../assets/css-components/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='foot-icons'>
          <a href='https://www.instagram.com/' ><i class="fi fi-brands-instagram"></i></a>
          
          <a href='https://www.facebook.com/'><i class="fi fi-brands-facebook"></i></a>
          
          <a href='https://www.whatsapp.com/'><i class="fi fi-brands-whatsapp"></i></a>
          
          <a href='https://www.twitter.com/'><i class="fi fi-brands-twitter"></i></a>
          
        </div>
        <br></br>
        <div className='foot-text'>
          <a href='h'>Info</a>
          <a href='s'>Support</a>
          <a href='f'>FAQ</a>
        </div>
        <div className='foot-text'>
          <a href='t'>Terms of Use</a>
          <a href='p'>Privacy policy</a>
        </div>
    </div>
  )
}

export default Footer