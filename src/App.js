import logo from './logo.svg';
import handImage from './assets/about-us-sustainable-lifestyle-partner.png'
import trustimage from './assets/Trust.png'
import authenticityImage from './assets/Authenticity.png'
import FunImage from './assets/FunAndEngaging.png'
import ImpactImage from './assets/Impact.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={handImage} className="App-logo" alt="logo" />
      </header>
      <div> 
        <p className='bodyTitle'>
          About Us!
        </p>
        <p className='bodytext'>
          At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who
          share a common vision and passion for a more sustainable world.
          We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:
          <ul className='bodylist'>
            <li>
              Tips and tricks to adopt a more eco-friendly and low-waste lifestyle
            </li>
            <li>
              Videos, posts, and quizzes on climate change and sustainability
            </li>
            <li>
              Events and pledges that invite you to adopt a more sustainable lifestyle
            </li>
          </ul>
        </p>
      </div>

      {/** Values Section */}
      <div>
        <p className='bodyTitle' >
          Our Values
        </p>

        {/** Values Card 1 */}
        <div className='ValuesCardContainer'>
          <img src={trustimage} className="ValuesCardImage" alt="logo" />
          <div className='ValuesCardDescriptionContainer'>
            <p className='ValueCardTitle'>Trust</p>
            <p>We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>
          </div>
        </div>

        {/** Values Card 2 */}
        <div className='ValuesCardContainerReverse'>
          <img src={authenticityImage} className="ValuesCardImage" alt="logo" />
          <div className='ValuesCardDescriptionContainerReverse'>
            <p className='ValueCardTitle'>Authenticity</p>
            <p>We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.</p>
          </div>
        </div>

        {/** Values Card 3 */}
        <div className='ValuesCardContainer'>
          <img src={ImpactImage} className="ValuesCardImage" alt="logo" />
          <div className='ValuesCardDescriptionContainer'>
            <p className='ValueCardTitle'>Impact</p>
            <p>We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.</p>
          </div>
        </div>

        {/** Values Card 4 */}
        <div className='ValuesCardContainerReverse'>
          <img src={FunImage} className="ValuesCardImage" alt="logo" />
          <div className='ValuesCardDescriptionContainerReverse'>
            <p className='ValueCardTitle'>Fun and Engaging</p>
            <p>Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
