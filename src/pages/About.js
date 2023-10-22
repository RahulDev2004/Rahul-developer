import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/12.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Rahul B</span>
              </p>
              <h2 className="about__heading">
                A freelance Full-stach Developer
              </h2>
              <div className="about__info">
                <PText>
                  Hello, I'm Rahul, an aspiring entrepreneur with a strong
                  background in computer science and a passion for creating
                  cutting-edge software solutions. I am currently pursuing my
                  Third year of B.E. in computer science at Rajalakshmi
                  Institute of Technology in Chennai.
                  <br /> <br />
                  With two years of experience in software development, my
                  expertise lies in utilizing web3 technologies to build
                  decentralized solutions. I am deeply fascinated by the
                  potential of blockchain technology and its ability to
                  revolutionize various industries.
                  <br />
                  <br />I thrive on leveraging my technical knowledge and
                  innovative mindset to develop decentralized applications
                  (Dapps) that empower individuals and businesses. I am
                  committed to delivering high-quality solutions that harness
                  the power of decentralization.
                </PText>
              </div>
              <Button
                btnText="Download CV"
                btnLink="https://drive.google.com/file/d/1VHxxtJFv49WHYPWSKRS7TzvtBFjNrRdf/view?usp=sharing"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Velammal Matriculation Higher Secondary School']}
              />
              <AboutInfoItem
                title="Collage"
                items={['Rajalakshmi Institute of Technology']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['React', 'Typescript', 'JavaScript', 'Next']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'MongoDB', 'laravel']}
              />
              <AboutInfoItem
                title="Languages"
                items={['Solidity', 'Rust', 'C/C++', 'Java', 'Python']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2021-2022"
                items={['Software Developer at ROOK']}
              />
              <AboutInfoItem
                title="2023-Present"
                items={['CTO at ROOK Fellows']}
              />
              <AboutInfoItem
                title="2023-Present"
                items={['Part-time Freelancer']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
