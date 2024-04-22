import logoImage from './assets/logo.jpg'
import product1 from './assets/Impact.png'
import product2 from './assets/OurStory4.png'
import homeImage1 from './assets/carousel-1.png'
import homeImage2 from './assets/carousel-2.png'
import homeImage3 from './assets/carousel-3.png'
import card2Video from './assets/ProductCuration.mp4'



import './Home.css';

function Home() {
  return (
    <div className="App">
        
    <ul class="topnav">
        <li><a href="./Home">Home</a></li>
        <li><a href="#news">Sell On Ecoyaan</a></li>
        <li><a href="#contact">Careers</a></li>
        <li class="right"><a class="active" href="#App">About Us</a></li>
    </ul>

    <div class="logoContainer">
        <img className='LogoStyle' src={logoImage} alt="ecoYaan Logo"/>
    </div>
    

    

    <section class="categories">
        <div class="container">
            <div class="category">
                <img className='FeatureImage' src={homeImage1} alt="Home & Living"/>
                <button className='ImageName'>Follow us on</button>
            </div>
            <div class="category">
                <img className='FeatureImage' src={homeImage2} alt="Fashion"/>
                <button className='ImageName'>About Us</button>
            </div>
            <div class="category">
                <img className='FeatureImage' src={homeImage3} alt="Personal Care"/>
                <button className='ImageName'>Get In Touch</button>
            </div>


            <div className='ValuesCardContainer'>
                <img src={product1} className="ValuesCardImage" alt="Loading" />
                <div className='ValuesCardDescriptionContainer'>
                    <p className='ValueCardTitle'>Join our community in creating a more sustainable future for everyone</p>
                    <p>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</p>
                    <p>Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</p>
                </div>
            </div>

            {/** Values Card 2 */}
            <div className='ValuesCardContainer ValuesCardContainerReverse'>
                <video className="ValuesCardImage" controls autostart autoPlay src={card2Video} type="video/mp4" />
                <div className='ValuesCardDescriptionContainer ValuesCardDescriptionContainerReverse'>
                    <p className='ValueCardTitle'>Carefully curated Eco-friendly products</p>
                    <p>We believe that every purchase you make can have a positive impact on the planet and the future.</p>
                    <p>Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.</p>
                </div>
            </div>
            
            <div className='ValuesCardContainer'>
                <img src={product2} className="ValuesCardImage" alt="Loading" />
                <div className='ValuesCardDescriptionContainer'>
                    <p className='ValueCardTitle'>For businesses that care deeply about sustainability</p>
                    <p>Do you run a business that is committed to sustainability in every aspect of your work?</p>
                    <p>Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?</p>
                    <p>If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:</p>
                </div>
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

export default Home;
