import logo from './logo.svg';
import handImage from './assets/about-us-sustainable-lifestyle-partner.png'
import trustimage from './assets/Trust.png'
import authenticityImage from './assets/Authenticity.png'
import FunImage from './assets/FunAndEngaging.png'
import ImpactImage from './assets/Impact.png'
import Founder1Image from './assets/about-us-founding-team-01.png'
import Founder2Image from './assets/about-us-founding-team-02.png'


import './App.css';

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
        <img src={handImage} className="App-logo" alt="logo" />
      </header>
      <div className='Sub-Container Sub-Container1'> 
        <p className='bodyTitle bodyTitle1'>
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
      <div className='Sub-Container Sub-Container2'>
        <p className='bodyTitle bodyTitle2' >
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
        <div className='ValuesCardContainer ValuesCardContainerReverse'>
          <img src={authenticityImage} className="ValuesCardImage" alt="logo" />
          <div className='ValuesCardDescriptionContainer ValuesCardDescriptionContainerReverse'>
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
        <div className='ValuesCardContainer ValuesCardContainerReverse'>
          <img src={FunImage} className="ValuesCardImage" alt="logo" />
          <div className='ValuesCardDescriptionContainer ValuesCardDescriptionContainerReverse'>
            <p className='ValueCardTitle'>Fun and Engaging</p>
            <p>Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.</p>
          </div>
        </div>

      </div>

      {/** Our Story Section */}
      <div className='Sub-Container Sub-Container3'>
        <p className='bodyTitle bodyTitle3' >
          Our Story
        </p>

        <div className='Our-Story-Container'>
          <div className='FounderImageContainer'>
            <img src={Founder1Image} className='FounderImage'/>
            <img src={Founder2Image} className='FounderImage'/>
          </div>
          
          <p className='bodytext'>
            We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.
            <br/>
            <br/>
            Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.
            <br/>
            <br/>
            We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.
            <br/>
            <br/>
            As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.
            <br/>
            <br/>
            Connect with the founders on LinkedIn here: Abhishek Rao   Sarwanjeet Singh 
          </p>
        </div>
        
      </div>

      <footer>
        <div class="container">
            <p>&copy; 2024 ecoYaan. All Rights Reserved.</p>
            <nav>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">FAQ</a>
            </nav>
        </div>
    </footer>

    </div>
  );
}

export default App;
