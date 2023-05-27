import logo from './logo.svg';
import heartIcon from './Img/heart-Icon.svg';
import picmain1 from './Img/PicMain1.png';
import picmain2 from './Img/PicMain2.png';
import picmain3 from './Img/PicMain3.png';
import picmain4 from './Img/PicMain4.png';
import actualityexemple from './Img/actuality-exemple.png';
import arrowmore from './Img/arrowmore.png';
import './App.css';
import './font.css';
import './Fonction.js';

function App() {
  const Picture1 = picmain1;
  const Picture2 = picmain2;
  const ActualityPicture = actualityexemple;
  const Picture3 = picmain3;
  const Picture4 = picmain4;
  const Picturedesc = 'lorem ipsum dolerean big mac'

  return (
    <body>

      <div className="Main-Container">

        <div className="Container_Navbar">

          <TitleWebSite/>          

          <div className="Container_Onglets">      
            <AboutusButton/>
            <ActionButton/>
            <ProjectButton/>
            <ActualityButton/>
            <EngagedButton/>
            <DonationButton/> 
          </div>

        </div>  

      </div>  

      {/* 1ère Partie de la page plus petite que les autres ducoup 990px de hauteur */}

      <div className='first-Content-Container'>

        <div className='left-content-text'>

          <p className='title-text'>Se <span className='pink-color'>battre</span> pour les <span className='pink-color'>autres</span>, plus qu'une <span className='pink-color'>vocation</span>.</p>
          <p className='text'>Nous intervenons au Bénin car il est urgent de changer le regard sur le handicap,
          et plus encore sur le handicap invisible. Avoir un enfant porteur de handicap au sein de sa famille est considéré comme honteux,
            voire porteur de malédiction. E’Kollectif a pour mission de développer l’accompagnement de ces enfants, de participer à la veille des professionnels et de  sensibiliser les familles et la population.</p>
          <MoreButton/>


        </div>

        <div className='right-content-text'>
       
          <div className='picture-container'>
            <PictureMainPage1 data={Picture1}/>
            <PictureDescBlack data={Picturedesc}/>            
          </div>
        
        </div>

      </div>

      <div className='second-Content-Container'>

        <div className='second-left-Container'>

          <PictureMainPage2 data={Picture2}/>

        </div>

        <div className='second-right-Container'>

        <div className='position-text-2'>
        <p className='title-text-2'>Qui sommes-<span className='yellow-color'>nous</span>?</p>
        <p className='text-2'>E’Kollectif est une association loi 1901 à but non lucratif, d’intérêt général, créée en août 2020 pour  apporter une aide aux enfants porteurs de handicap en Afrique, et notamment au Bénin.</p>        
        <p className='text-2-bis'>Si la gestion des activités se fait depuis la France E’Kollectif dispose au Bénin, à Cotonou, d’un local géré par deux responsables salariés de l’association.</p>
        </div>

        </div>      
      </div>

      <div className='third-content-container'>

        <div className='third-left-container'>

          <TitleActuality/>
          <MainActuality data={ActualityPicture}/>

        </div>

        <div className='third-right-container'>

          <OldActuality data={ActualityPicture}/>
          <div className='br'></div>
          <OldActuality data={ActualityPicture}/>

        </div>

      </div>


      <div className='fourth-content-container'>

        <div className='fourth-left-container'>

          <Titlepresentation/>
          <p className='text-2'>Nadège CHAPPE, Présidente de l’association, elle-même en situation de handicap, est éducatrice spécialisée au Centre Ressources Autisme Rhône-Alpes.</p> 
          <p className='text-2-bis'>Lors d’un séjour de plusieurs mois, en tant que bénévole au sein d’une ONG de Cotonou, elle a été frappée par le manque de moyens mis à la disposition des familles d’enfants porteurs de handicap
            et en parallèle, le manque d’outils éducatifs  mis à la disposition des professionnels.
            De son retour en France elle a réfléchi à l’aide qu’elle pourrait leur apporter et a créé E’Kollectif.</p> 

        </div>

        <div className='fourth-right-container'>

          <div className='picture-container'>
            <PictureMainPage3 data={Picture3}/>
            <PictureDescWhite data={Picturedesc}/>            
          </div>

        </div>

      </div>

      <div className='fifth-content-container'>

        <div className='fifth-left-container'>

          <div className='left-picture-container'>
              <PictureMainPage4 data={Picture4}/>
              <PictureDescBlack data={Picturedesc}/>            
            </div>

        </div>

        <div className='fifth-right-container'>


          
          
        </div>

      </div>

    </body>
  ); 
}

function TitleWebSite(){
  return(
    <div className="Title_Navbar">
            <h1>E'Kollectif</h1>
            <p className="point_style">.</p>
    </div>
  );
}

function AboutusButton() {
  return(
    <button className='button-page'>
      <h2 className='no-underline'>Nous Connaître</h2>
    </button>

  );
}

function ActionButton() {
  return(
    <button className='button-page'>
      <h2 className='underline'>Nos Actions</h2>
    </button>

  );
}

function ProjectButton() {
  return(
    <button className='button-page'>
      <h2 className='underline'>Nos Projets</h2>
    </button>

  );
}

function ActualityButton() {
  return(
    <button className='button-page'>
      <h2 className='underline'>Actualités</h2>
    </button>

  );
}

function EngagedButton() {
  return(
    <button className='button-page'>
      <h2 className='underline'>S'engager</h2>
    </button>

  );
}

function DonationButton() {
  return (
    <button className='button-donation'>
      <img src={heartIcon} className="Icon-don" />
      <p className="Title_Don">Faire un Don</p>  
    </button>
    
  );
}

function MoreButton(){
  return(
    <button className='more-button'>
      <p className='more-button-text'>Nous connaître</p>
    </button>

  );
}

function PictureMainPage1(props) { 
  const data = props.data

  return(
   
    <img className='picture-main-1' src={data}/>

  );
}

function PictureMainPage2(props) {
  const data = props.data
  return(

    <img className='picture-main-2' src={data} />

  );
}

function TitleActuality(){ 
  return(

    <p className='title-text-3'>Les <span className='green-color'>Actualités</span> E'Kollectif.</p>

  );
}

function MainActuality(props){
  const data = props.data
  return(

    <div className='main-card-actuality'>

      <img src={data} className='picture-main-actuality'/>
      <div className='date-and-button-line'>
        <span className='main-date-actuality'>Le 25 Mars 2023</span>
        <img src={arrowmore} className='button-more-actuality'/>
      </div>
      <span className='main-title-actuatity'>Titre Actualité</span>
      <p className='main-desc-actuality'>lorem ipsum grosse inondation dans le sud de la france et du bénin causé par thor en personne lorem ipsum grosse inondation
       dans le sud de la france et du bénin causé par thor en personne du bénin causé par thor en personne</p>

    </div>
  );
}

function OldActuality(props){
  const data = props.data
  return(
      
    <div className='old-card-actuality'>

      <img src={data} className='picture-old-actuality'/>

      <div className='info-old-actuality-container'>

        <div className='old-date-button-line'>
          <span className='old-date-actuality'>Le 25 Mars 2023</span>
          <img src={arrowmore} className='button-more-actuality'/>
        </div>

        <span className='old-title-actuality'>Titre Actualité</span>
        <p className='old-desc-actuality'>lorem ipsum grosse inondation dans le sud de la france et 
        du bénin causé par thor en personne lorem ipsum grosse inondation dans le...</p>

      </div>

    </div>
  );
}

function Titlepresentation(){
  return(

    <p className='title-text-4'>Ceux qui ne se <span className='blue-color'>souviennent</span> pas du <span className='blue-color'>passé</span> sont <span className='blue-color'>condamnés</span> à le <span className='blue-color'>répéter</span>.</p>

  );
}

function PictureMainPage3(props) { 
  const data = props.data

  return(
   
    <img className='picture-main-3' src={data}/>

  );
}

function PictureDescWhite(props){
  const data = props.data
  return(

    <p className='picture-desc-white'>Description : {data}</p>

  );
}

function PictureDescBlack(props){
  const data = props.data
  return(

    <p className='picture-desc-black'>Description : {data}</p>

  );
}

function PictureMainPage4(props) { 
  const data = props.data

  return(
   
    <img className='picture-main-4' src={data}/>

  );
}


export default App;