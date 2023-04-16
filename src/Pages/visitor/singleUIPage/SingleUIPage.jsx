import React, { useState, useEffect,useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { useTranslation } from 'react-i18next';
import { BehanceIcon, CopyIcon, DribbleIcon, LikeIcon, ShareIcon } from '../../../UI/Icons';
import ButtonTransition from '../../../UI/Buttons/ButtonTransition';
import SingleLastProject from '../home/lastProjects/SingleLastProject';
import Slider from "react-slick";
import SectionTitle from '../../../UI/Titles/SectionTitle/SectionTitle';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '@react-pdf-viewer/core/lib/styles/index.css';
import './singleUIPage.css';


const SingleUIPage = () => {

  const {t, i18n} = useTranslation();
  const [path, setPath] = useState('./MostafaKamel-UXDesigner-2022(1).pdf');
  const [likes, setLikes] = useState(32);
  const [liked, setLiked] = useState(false);


  useEffect(() => {
    const likedState = localStorage.getItem('liked');

    if(likedState) {
      setLiked(true);
    }else {
      setLiked(false);
    }
  }, []);
  
  const likeHandler = () => {
    setLiked(prev => !prev);
    setLikes(prev => (
      liked ? prev - 1 : prev + 1
    ));
  };

  useEffect(() => {

    if(liked) {
      localStorage.setItem('liked', true);
    }else {
      localStorage.removeItem('liked');
    }

  }, [liked]);

  // ============ Display PDF:=
 
  const changeValueHandler = e => {
    const selectedFile = e.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = e => {
      setPath(e.target.result);
    }
  };

  // === Slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    setElementTop(ref.current.offsetTop);
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    className: 'main_slider',
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const DUMMY_PROJECTS = [
    {
        id: 1,
        dataType: "case-study",
        type: "Case Study",
        title: "E-courses",
        imgSrc: "https://mir-s3-cdn-cf.behance.net/projects/404/d16c77126901637.Y3JvcCwyNjg0LDIxMDAsMjY1LDA.png",
    },
    {
        id: 2,
        dataType: "mobile-app",
        type:"Mobile App",
        title:"Modern Website",
        imgSrc: "https://mir-s3-cdn-cf.behance.net/projects/404/d16c77126901637.Y3JvcCwyNjg0LDIxMDAsMjY1LDA.png",
    },
    {
        id: 3,
        dataType:"case-study",
        type:"Case Study",
        title:"Zaynah App",
        imgSrc: "https://mir-s3-cdn-cf.behance.net/projects/404/d16c77126901637.Y3JvcCwyNjg0LDIxMDAsMjY1LDA.png",
    },
    {
      id: 4,
        dataType:"dashboard",
        type:"Dashboard",
        title:"Kotoby App",
        imgSrc: "https://mir-s3-cdn-cf.behance.net/projects/404/d16c77126901637.Y3JvcCwyNjg0LDIxMDAsMjY1LDA.png",
    },
    {
      id: 5,
        dataType:"website",
        type:"Website",
        title:"E-courses",
        imgSrc: "https://mir-s3-cdn-cf.behance.net/projects/404/d16c77126901637.Y3JvcCwyNjg0LDIxMDAsMjY1LDA.png",

    },
    {
      id: 6,
        dataType:"website",
        type:"Website",
        title:"E-courses",
        imgSrc: "https://mir-s3-cdn-cf.behance.net/projects/404/d16c77126901637.Y3JvcCwyNjg0LDIxMDAsMjY1LDA.png",
    }
  ];

  return (
    <section className='single-ui-page'>
      <input type="file" onChange={changeValueHandler} />
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
        <div className='pdf_container'>
          <Viewer fileUrl={path} defaultScale={1} />
        </div>
      </Worker>
      <Container>
        <div className="flex buttons_container">
          <ul className='single_project_btns'>
            <li>
              <ButtonTransition>
                <button 
                  onClick={likeHandler}
                  className={`${liked ? 'liked' : ''}`}
                >
                  <LikeIcon />
                  {t('liked')}
                  <span>{likes}</span>
                </button>
              </ButtonTransition>
            </li>
            <li>
              <ButtonTransition>
                <button>
                  <CopyIcon />
                  {t('Copy')}
                </button>
              </ButtonTransition>
            </li>
            <li>
            <ButtonTransition>
                <button>
                  <ShareIcon />
                  {t('Share')}
                </button>
              </ButtonTransition>
            </li>
            <li>
              <ButtonTransition>
                <button>
                  <BehanceIcon />
                  {t('Behance')}
                </button>
              </ButtonTransition>
            </li>
            <li>
              <ButtonTransition>
                <button>
                  <DribbleIcon />
                  {t('Dribbble')}
                </button>
              </ButtonTransition>
            </li>
          </ul>
          <div className="puplished">
          {t('Published')}: July 30th 2021
          </div>
        </div>
        <section ref={ref} className="certification_section">
          <SectionTitle Title={t('Similar_Projects')}/>
          <Slider ref={sliderRef} {...settings}>
            {DUMMY_PROJECTS.map((project, i) => <SingleLastProject index={i} key={project.id} elementTop={elementTop} {...project} />)}
          </Slider>
        </section>
      </Container>
    </section>
  );
  
};

export default SingleUIPage