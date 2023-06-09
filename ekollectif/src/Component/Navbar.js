import './Navbar.css';
import heartIcon from '../Img/heart-Icon.svg';
import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function Navbar() {
  return (

    <div className="navbar-container">

        <div className="navbar">

            <TitleWebSite/>

            <div className="Container-Onglets">   
            
            <CustomLink to="/" className='button-page'>Nous Connaître</CustomLink>
            <CustomLink to="/actions" className='button-page'>Nos Actions</CustomLink>
            <CustomLink to="/projets" className='button-page'>Nos Projets</CustomLink>
            <CustomLink to="/actualites" className='button-page'>Actualités</CustomLink>
            <CustomLink to="/engager" className='button-page'>S'engager</CustomLink>
            <DonationButton/>

            </div>
        </div>       
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (          
      <Link className='button-page' to={to} {...props}>
        <span className={isActive ? "active" : ""}>{children}</span>
      </Link>
  )
}

function DonationButton() {

    const handleClic = () => {
        window.open('https://www.instagram.com', '_blank');
    };

return (
    <button onClick={handleClic} className='button-donation'>
    <img src={heartIcon} className="icon-don" />
    <p className="title-don">Faire un Don</p>  
    </button>    
);
}


function TitleWebSite(){
    return(
      <div className="title-navbar">
              <h1>E'Kollectif</h1>
              <p className="point-style">.</p>
      </div>
    );
}
