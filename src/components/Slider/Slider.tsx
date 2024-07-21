import React, { useState, useRef, useEffect } from 'react'
import styles from './slider.module.scss'
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/project3.png'
import project4 from '../../images/project4.png'
import arrow from '../../images/arrow.png'

const slides = [
  {
    image: project1,
    title: 'App UI/UX Design',
    description:
      'Designing the UI/UX for mobile apps and web applications to ensure usability & engagement.',
    link: 'https://example.com/app-ui-ux-design',
  },
  {
    image: project2,
    title: 'Packaging Design',
    description:
      'Creating packaging solutions for products that not only protect but also attract customers on store.',
    link: 'https://example.com/packaging-design',
  },
  {
    image: project3,
    title: 'Graphic Design',
    description:
      'Crafting visual content to communicate messages through typography, imagery, color, and form.',
    link: 'https://example.com/graphic-design',
  },
  {
    image: project4,
    title: 'Brand Identity',
    description:
      'Developing brand identities that represent the values and visions of businesses.',
    link: 'https://example.com/brand-identity',
  },
  {
    image: project1,
    title: 'App UI/UX Design',
    description:
      'Designing the UI/UX for mobile apps and web applications to ensure usability & engagement.',
    link: 'https://example.com/app-ui-ux-design',
  },
  {
    image: project2,
    title: 'Packaging Design',
    description:
      'Creating packaging solutions for products that not only protect but also attract customers on store.',
    link: 'https://example.com/packaging-design',
  },
]
const actualSlides = [project1, project2, project3, project4]

function Slider() {
  const [translateX, setTranslateX] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleScroll = (event: WheelEvent) => {
    const delta = event.deltaY
    if (delta > 0) {
      setActiveIndex((prev) => Math.min(prev + 1, actualSlides.length - 1))
    } else {
      setActiveIndex((prev) => Math.max(prev - 1, 0))
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener('wheel', handleScroll)
      return () => {
        slider.removeEventListener('wheel', handleScroll)
      }
    }
  }, [])

  useEffect(() => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth
      setTranslateX(activeIndex * (width / 2)) // 슬라이드 너비의 절반으로 조정
    }
  }, [activeIndex])

  return (
    <div className={styles.sliderContainer} ref={sliderRef}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${translateX}px)` }}
      >
        {slides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <div className={styles.slideContent}>
              <div className={styles.imageContainer}>
                <img
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className={styles.image}
                />
              </div>
              <div className={styles.textContainer}>
                <div>
                  <a href={slide.link} className={styles.titleLink}>
                    <h1 className={styles.title}>{slide.title}</h1>
                  </a>
                  <p className={styles.description}>{slide.description}</p>
                </div>
                <div>
                  <a href={slide.link} className={styles.arrowLink}>
                    <img src={arrow} alt="arrow" className={styles.arrow} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.indicatorContainer}>
        {actualSlides.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${index === activeIndex ? styles.active : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
