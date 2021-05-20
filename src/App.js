
import React from 'react';
import Profile from './Profile/Profile'
let Bio="Jeune Ingénieur, engagé, dynamique, convaincu de l’importance de pour la gestion des ressources en eau société d’aujourd’hui et de demain, est soucieux d’innover, de développer et de promouvoir une agriculture durable, une industrie vertueuse et des territoires vivants. "
const styleObjet={
  textAlign: "center",
  backgroundColor:"#282c34",
  minHeight: 100,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 38,
  color: "orange",
}
const App=()=> {
  const handleName = (name)=>{
    alert(`Thank you for your visit to the profile of ${name}`);
  }
  return (
    <div style={styleObjet} >
      <Profile
      fullName ="Nasr SOUID"
      Profession="Ingénieur Gestion des Ressources en eau"
      Bio={Bio}
      handleName={handleName}
      >
        < img src = "/ProfilePhoto.png" alt="Profilephoto" className="Photo" style={{width: 120,}}/>
      </Profile>  
    </div>
  );
}


export default App;
