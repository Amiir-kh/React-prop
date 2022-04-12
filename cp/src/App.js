import Profile from './profile/profile';
import './App.css';


function App() {
  const fullName ="Amir Khalloufi"
    const bio="I'm learning Full Stack Js with GoMyCode"
    const profession="Full Stack Developer"
  function handleName(){
    alert(`${fullName}`)
  }
  return (
    <div className="App">
      <Profile fullName ={fullName}
                bio={bio}
                profession={profession}
                handleName={handleName}>
        <img style={{width:'500px', border:'2px solid white',marginTop:'50px',marginLeft:'50px'}} 
        src ="./background.jpg" alt='image'/>
     </Profile>
    </div>
  );
}

export default App;