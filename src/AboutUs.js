import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <header className="about-us-header">
                <h1>About Us</h1>
            </header>
            <section className="about-us-content">
                <div className="about-us-section">
                    <h2>Our Mission</h2>
                    <p>
                        At [Your Platform Name], we are dedicated to connecting people around the world. Our mission is to provide a platform where users can interact, share, and grow together.
                    </p>
                </div>
                <div className="about-us-section">
                    <h2>Our Team</h2>
                    <div className="team-member">
                        <img src="path/to/member1.jpg" alt="Member 1" className="team-member-img" />
                        <p className="team-member-name">Jane Doe</p>
                        <p className="team-member-role">CEO & Founder</p>
                    </div>
                    <div className="team-member">
                        <img src="path/to/member2.jpg" alt="Member 2" className="team-member-img" />
                        <p className="team-member-name">John Smith</p>
                        <p className="team-member-role">CTO</p>
                    </div>
                    {/* Add more team members as needed */}
                </div>
                <div className="about-us-section">
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions or feedback, feel free to reach out to us at <a href="mailto:contact@yourplatform.com">contact@yourplatform.com</a>.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
