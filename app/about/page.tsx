"use client"; // Ensures Next.js client-side rendering

import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './styles.module.css';
import Image from 'next/image';
import AboutImg1 from "../images/about/about-us.jpg";
import AboutImg2 from "../images/about/testimonial-pic.jpg";
import profileAbout from "../images/about/testimonial-author.jpg";
import team1 from "../images/about/team-1.jpg";
import team2 from "../images/about/team-2.jpg";
import team3 from "../images/about/team-3.jpg";
import team4 from "../images/about/team-4.jpg";
import client1 from "../images/clients/client-1.png";
import client2 from "../images/clients/client-2.png";
import client3 from "../images/clients/client-3.png";
import client4 from "../images/clients/client-4.png";
import client5 from "../images/clients/client-5.png";
import client6 from "../images/clients/client-6.png";
import client7 from "../images/clients/client-7.png";
import client8 from "../images/clients/client-8.png";

function About() {
  const numberSectionRef = useRef<HTMLDivElement | null>(null);
  const [counts, setCounts] = useState({ client: 0, categories: 0, country: 0, happy: 0 });

  useEffect(() => {
    const counters = document.querySelectorAll('.count');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      });
    }, { root: null, threshold: 0.2 });

    if (numberSectionRef.current) {
      observer.observe(numberSectionRef.current);
    }

    function startCounting() {
      counters.forEach(counter => {
        const targetAttr = counter.getAttribute('data-target');
        const target = targetAttr ? +targetAttr : 0; // Safely get target value
        const isPercentage = targetAttr === '99';
        counter.innerHTML = isPercentage ? '0%' : '+0';
    
        const updateCounter = () => {
          const current = +counter.innerHTML.replace(/[+%]/g, '') || 0; // Ensure current is a number
          const increment = target / 200;
    
          if (current < target) {
            counter.innerHTML = isPercentage
              ? `${Math.ceil(current + increment)}%`
              : `+${Math.ceil(current + increment)}`;
            setCounts(prevCounts => ({
              ...prevCounts,
              client: isPercentage ? Math.ceil(current + increment) : prevCounts.client, // Update only if it's the client count
              categories: isPercentage ? prevCounts.categories : Math.ceil(current + increment), // Update accordingly
              country: isPercentage ? prevCounts.country : Math.ceil(current + increment), // Update accordingly
              happy: isPercentage ? Math.ceil(current + increment) : prevCounts.happy, // Update accordingly
            }));
            setTimeout(updateCounter, 40);
          } else {
            counter.innerHTML = isPercentage
              ? `${target}%`
              : `+${target}`;
          }
        };
    
        updateCounter();
      });
    }
    
  }, []);

  return (
    <div>
      <Header />
      <Navbar />

      <div className={styles.breadCrumb}>
        <div className={styles.name}>About</div>
        <div className={styles.parent}>
          <a href="/">Home</a>
          <span className="fa-solid fa-chevron-right text-dark"></span>
          <span>About</span>
        </div>
      </div>

      <div className={styles.aboutUs}>
        <div className={styles.about1}>
          <Image src={AboutImg1} alt="" />
          <div className={styles.contents}>
            <div className={styles.content}>
              <h3>Who We Are ?</h3>
              <span>Contextual advertising programs sometimes have <br/>strict policies that need to be adhered to. Let’s take <br/>Google as an example.</span>
            </div>
            <div className={styles.content}>
              <h3>Who We Do ?</h3>
              <span>In this digital generation where information can be<br/> easily obtained within seconds, business cards still <br/>have retained their importance.</span>
            </div>
            <div className={styles.content}>
              <h3>Why Choose Us?</h3>
              <span>A two or three storey house is the ideal way to<br/> maximise the piece of earth on which our home sits,<br/> but for older or infirm people.</span>
            </div>
          </div>
        </div>

        <div className={styles.about2}>
          <Image src={AboutImg2} alt="" />
          <div className={styles.content}>
            <span className="fa-solid fa-quote-left"></span>
            <h6>“Going out after work? Take your butane curling iron with you to the <br/>office, heat it up, style your hair before you leave the office and you won’t<br/> have to make a trip back home.”</h6>
            <div className={styles.profile}>
              <Image src={profileAbout} alt='profile' width={100}/>
              <div className={styles.content}>
                <h4>Augusta Schultz</h4>
                <span>Fashion Design</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.about3} ref={numberSectionRef}>
          <div className={styles.ourNumber}>
            <div className={styles.Number}>
              <h3 className="count" data-target="202">+{counts.client}</h3>
              <span>Our Client</span>
            </div>
            <div className={styles.Number}>
              <h3 className="count" data-target="110">+{counts.categories}</h3>
              <span>Total Categories</span>
            </div>
            <div className={styles.Number}>
              <h3 className="count" data-target="105">+{counts.country}</h3>
              <span>In Country</span>
            </div>
            <div className={styles.Number}>
              <h3 className="count" data-target="99">+{counts.happy}%</h3>
              <span>Happy Customer</span>
            </div>
          </div>
        </div>

        <div className={styles.about4}>
          <span>Our Team</span>
          <h3>Meet Our Team</h3>
          <div className={styles.ourMember}>
            <div className={styles.member}>
              <Image src={team1} alt=''/>
              <div className={styles.content}>
                <h4>John Smith</h4>
                <span>Fashion Design</span>
              </div>
            </div>

            <div className={styles.member}>
              <Image src={team2} alt=''/>
              <div className={styles.content}>
                <h4>Christine Wise</h4>
                <span>C.E.O</span>
              </div>
            </div>

            <div className={styles.member}>
              <Image src={team3} alt=''/>
              <div className={styles.content}>
                <h4>Sean Robbins</h4>
                <span>Manager</span>
              </div>
            </div>

            <div className={styles.member}>
              <Image src={team4} alt=''/>
              <div className={styles.content}>
                <h4>Lucy Myers</h4>
                <span>Delivery</span>
              </div>
            </div>
          </div>
        </div>
        
        
        
        <div className={styles.about5}>
          <span>Partner</span>
          <h4>Happy Clients</h4>
          <div className={styles.ourClient}>
              <div className={styles.client}>
                <Image src={client1} alt=''/>
                <Image src={client3} alt=''/>
              </div>
              <div className={styles.client}>
                <Image src={client5} alt=''/>
                <Image src={client4} alt=''/>
              </div>
              <div className={styles.client}>
                <Image src={client2} alt=''/>
                <Image src={client6} alt=''/>
              </div>
              <div className={styles.client}>
                <Image src={client7} alt=''/>
                <Image src={client8} alt=''/>
              </div>
          </div>
        </div>


      </div>

      <Footer />
    </div>
  );
}

export default About;
