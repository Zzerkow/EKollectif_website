import './Footer.css';
import picmain2 from '../Img/PicMain2.png';
import mail_icon from '../Img/Icon_mail.png';

function Footer(){
    return(
    
      <div className='footer'>
    
        {/* Partie Supérieure */}
        <div className='footer-up-container'>
    
          <div className='footer-up-name'>
    
            <img src={picmain2} className='footer-up-logo'/>
            <span className='footer-up-website-name'>E'Kollectif</span>
    
          </div>
    
          <div className='footer-up-links'>
    
            <span className='footer-up-links-span'>Mentions légales</span>
            <span className='footer-up-links-span'>RGPD</span>
            <span className='footer-up-links-span'>CGU/ Protection des données</span>
    
          </div>
    
          <div className='footer-up-social'>
    
            <span className='footer-up-social-title'>Contactez-nous</span>
            
            <div className='footer-up-social-logo-mail'>
    
              <img src={mail_icon} className='footer-up-social-icon'/>
              <span className='footer-up-social-mail'>E'Kollectif@gmail.com</span>
    
            </div>
    
            <div className='footer-up-social-network'> 
             
              <a href="https://www.instagram.com/ekollectif/" className='footer-up-social-network-instagram'/>
              <a href="https://www.facebook.com/E.kollectif/" className='footer-up-social-network-facebook'/>
              <a href="https://fr.linkedin.com/in/association-e-kollectif-016284217" className='footer-up-social-network-linkedin'/>
              <a href="https://wa.me/0677434628" className='footer-up-social-network-whatsapp'/>
    
            </div>
    
          </div>
    
        </div>
    
         {/* Partie inférieure */}
    
        <div className='footer-down'>
    
          <hr className='footer-down-line'/>
          <span className='footer-down-copyright'>Copyright EKA - 2023</span>
    
        </div>
    
      </div>
    
    );
    }

export default Footer;