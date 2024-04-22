import logo from './logo.svg';
import handImage from './assets/about-us-sustainable-lifestyle-partner.png'
import trustimage from './assets/Trust.png'
import impactimage from './assets/Impact.png'

import './Home.css';

function App() {
  return (
    <div className="App">
        <ul class="topnav">
            <li><a href="./Home">Home</a></li>
            <li><a href="#news">Sell On Ecoyaan</a></li>
            <li><a href="#contact">Careers</a></li>
            <li class="right"><a class="active" href="#App">About Us</a></li>
        </ul>
        <header className="App-header">
            <p>Home Page</p>
        </header>


        <div className='Sub-Container'>
            
            <div className='ValuesCardContainer ValuesCardContainerReverse'>
                
                <div className='ValuesCardDescriptionContainer'>
                    <h2>Join our community in creating a more sustainable future for everyone</h2>
                    <p className='ValueCardTitle'>des1</p>
                    <p className='ValueCardTitle'>des2</p>
                </div>
            </div>
            <img src={impactimage} className="ValuesCardImage" alt="logo" />
        </div>
    </div>
  );
}

export default App;
