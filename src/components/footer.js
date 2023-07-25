<<<<<<< HEAD
import React from 'react'
import '../assets/css-components/footer.css'
import { Link } from 'react-router-dom'

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
          <Link to='/user/feedback'>Feedback</Link>
          <a href='f'>FAQ</a>
        </div>
        <div className='foot-text'>
          <a href='t'>Terms of Use</a>
          <a href='p'>Privacy policy</a>
        </div>
    </div>
  )
}

=======
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

>>>>>>> 4ecba5203710dfd87571a9ce43e3f03a9eb104c8
export default Footer