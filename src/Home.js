import logo from './logo.svg';
import handImage from './assets/about-us-sustainable-lifestyle-partner.png'
import trustimage from './assets/Trust.png'
import impactimage from './assets/Impact.png'
import logoImage from './assets/logo.jpg'
import product1 from './assets/Impact.png'
import product2 from './assets/OurStory4.png'
import homeImage1 from './assets/carousel-1.png'
import homeImage2 from './assets/carousel-2.png'
import homeImage3 from './assets/carousel-3.png'



import './Home.css';

function App() {
  return (
    <div className="App">
        
<title>ecoYaan - Empowering Sustainable Living</title>
    <header class="container">
        <div class="logo">
            <img src={logoImage} alt="ecoYaan Logo"/>
        </div>
        <nav>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
    </header>

    <section class="hero">
        <div class="container">
            <h1>Empowering Sustainable Living</h1>
            <p>Discover eco-friendly products and make a positive impact on the planet.</p>
            <button>Follow us on</button>
            <button>About us</button>
            <button>Get in touch</button>

        </div>
    </section>

    <section class="categories">
        <div class="container">
            <div class="category">
                <img src={homeImage1} alt="Home & Living"/>
                <h3>Home & Living</h3>
            </div>
            <div class="category">
                <img src={homeImage2} alt="Fashion"/>
                <h3>Fashion</h3>
            </div>
            <div class="category">
                <img src={homeImage3} alt="Personal Care"/>
                <h3>Personal Care</h3>
            </div>
            <div class="category">
                <div>
                <img src={product1} alt="Outdoor"/>
                <h2>Join our community in creating a more sustainable future for everyone</h2>
                <p>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</p>
                <p>Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</p>
                </div>
            </div>
            <div class="category">
                <img src={product2} alt="Kids & Baby"/>
                <h1>For businesses that care deeply about sustainability</h1>
                <p>Do you run a business that is committed to sustainability in every aspect of your work?</p>
                <p>Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?</p>
                <p>If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:</p>
                <button>Contact us</button>

            </div>
        </div>
    </section>
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
