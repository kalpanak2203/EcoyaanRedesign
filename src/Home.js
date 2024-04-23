import logoImage from './assets/logo.jpg'
import product1 from './assets/Impact.png'
import product2 from './assets/OurStory4.png'
import homeImage1 from './assets/carousel-1.png'
import homeImage2 from './assets/carousel-2.png'
import homeImage3 from './assets/carousel-3.png'
import card2Video from './assets/ProductCuration.mp4'
import {useNavigate} from 'react-router-dom'




import './Home.css';

function Home() {
    const navigate = useNavigate()
  return (
    <div className="App">
        
    <ul class="topnav">
        <li><a class="active" href="/Home">Home</a></li>
        <li><a >Sell On Ecoyaan</a></li>
        <li><a >Careers</a></li>
        <li class="right"><a onClick={()=>navigate(`/AboutUs`)}>About Us</a></li>
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
                <button onClick={()=>navigate(`/AboutUs`)} className='ImageName'>About Us</button>
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
        <div class="text-gray-500 text-md flex flex-col justify-start items-start">
            <p class="text-xl text-black font-semibold mb-2">Company</p>
            


        </div>
        <div class="container">
            <ul class="links">
                <a>About us</a>
                <a>Sell on Ecoyaan</a>
                <a>Careers</a>
            </ul>
            <nav>
                <a href="#">Registered Address: <br/>
                    <p>vastores, <br/>
                    Ashoknagar(MR), <br/>
                    Mangalore,<br/>
                    Dakshina Kannada- 575006, <br/>
                    Karnataka, India
                    </p>
                </a>
                <a href="#">Legal Business Name:
                <p>vastores, <br/>
                Kindkarma E-Retail Private Limited, <br/>
                    <br/>
                    CIN: U47912KA2023PTC182592, <br/>
                    Call us On - +91 9980490777
                    </p>
                </a>
                <a href="#">Privacy Policy</a>
                <a href="#">FAQ</a>
                <a href="#">Follow us on<br/>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    </meta>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <style></style>
                </a>
            </nav>
            <p>&copy; 2024 EcoYaan. <br/> All Rights Reserved.</p>

            <div class="footer--top row space-between">
            <div class="clearfix text-formatted field body text-with-summary">
                <div class="footer--copyright row align-center">
                    <div class="footer--logo">
                        <a href="" title="© 2023 - 2024, Ecoyaan TM"></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </footer>

    <footer>
        
    </footer>


        
    </div>
  );
}

export default Home;
