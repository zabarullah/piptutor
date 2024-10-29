import React from 'react';
import './homepage.styles.css';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

// ResponsiveComponent with Header and Hamburger functionality
const HomePageRoute: React.FC = () => {
  return (
    <div className="container">
      <Header />

      <div className="section-lg  text-center">
        <h2>Learn Forex and Commodity Trading the Right Way</h2>
        <p>
          Join a genuine group of traders. No overpriced courses, no empty
          promises—just real, valuable education.
        </p>
        <button className="btn btn-secondary">Get Started for Free</button>
      </div>
      <div className="section  text-center">
        <h3>Who We Are</h3>
        <p>
          At PipTutor, our mission is to make forex and commodity trading
          accessible to everyone by offering transparent, affordable, and
          effective education. We believe that learning to trade should not come
          with excessive costs or financial exploitation.
        </p>
        <p>
          Our goal is to build a genuine community of traders who support one
          another on their trading journeys, providing reliable, practical
          insights to help individuals confidently navigate the markets without
          falling victim to overpriced or misleading services.
        </p>
        <p>Together, we trade smarter, not harder.</p>

        <button className="btn">Learn More About Us</button>
      </div>

      <div className="section-lg text-center">
        <h3>Free Trading Education and Mentorship</h3>
        <p>
          At PipTutor, we believe in giving everyone the opportunity to start
          learning how to trade without financial barriers. That's why we offer
          a range of free educational content that covers the essential building
          blocks of forex and commodity trading.
        </p>
        <p>
          From beginner-friendly tutorials to market analysis, our free
          resources are designed to equip you with a solid foundation.
        </p>
        <button className="btn btn-secondary">Get Started</button>
      </div>

      <div className="section  text-center">
        <h3>Elite Services</h3>
        <p>
          For those looking to dive deeper and sharpen their skills, we also
          offer premium courses and advanced materials. These paid options
          provide comprehensive trading strategies, expert insights, and
          personalized guidance through 1-2-1 mentorship to help you refine your
          trading skills.
        </p>
        <p>
          Additionally, our offerings include automated trading solutions,
          essential indicators, and software services that provide real-time
          data releases and the latest news feeds.
        </p>
        <p>
          Whether you’re a complete beginner or looking to improve your
          strategies, PipTutor has the resources to support your growth.
        </p>
        <button className="btn">Contact Us</button>
      </div>

      <div className="section section-grid">
        <div className="grid">
          <div className="card blue">
            <img
              src="https://assets.website-files.com/645128e3dbdad55ed2803eff/6479200e1e7eddf58fc86d80_webflow-logo-webfow-templates-brix-templates.svg"
              alt="Logo"
              className="square-logo"
            />
            <h3>Start with Our Free Forex Course</h3>
            <p>
              Register now and gain access to foundational forex trading
              knowledge, market insights, and expert guidance—all designed for
              beginners ready to start trading.
            </p>
            <button className="btn btn-secondary">Sign Me Up</button>
          </div>

          <div className="card grey">
            <img
              src="https://assets.website-files.com/645128e3dbdad55ed2803eff/6479200e1e7eddf58fc86d80_webflow-logo-webfow-templates-brix-templates.svg"
              alt="Logo"
              className="square-logo"
            />
            <h3>Upgrade Your Strategy with Indicators</h3>
            <p>
              Discover our custom-built indicators for real-time analysis and a
              competitive trading edge, crafted to help you refine and optimize
              your trading approach.
            </p>
            <button className="btn btn-secondary">Show Me</button>
          </div>

          <div className="card blue">
            <img
              src="https://assets.website-files.com/645128e3dbdad55ed2803eff/6479200e1e7eddf58fc86d80_webflow-logo-webfow-templates-brix-templates.svg"
              alt="Logo"
              className="square-logo"
            />
            <h3>Personalized One-on-One Mentorship</h3>
            <p>
              Advance your trading skills with our personalized mentorship
              program. Get expert advice and strategies tailored to your
              specific trading goals.
            </p>
            <button className="btn btn-secondary">Get Me Started</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePageRoute;
