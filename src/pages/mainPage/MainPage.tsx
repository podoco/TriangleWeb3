import React, { useEffect } from 'react'
import styles from './MainPage.module.scss'
import '../../styles/colorPalette.ts'
import bigstar from '../../images/bigSixStar.png'
import middlestar from '../../images/mSixStar.png'
import Text from '../../components/shared/Text'
import mainPic from '../../images/mainPic.png'
import user1 from '../../images/user1.png'
import user2 from '../../images/user2.png'
import user3 from '../../images/user3.png'
import bookBtn from '../../images/bookBtn.png'
import IconB from '../../images/IconB.png'
import IconC from '../../images/IconC.png'
import IconE from '../../images/IconE.png'
import IconF from '../../images/IconF.png'
import videoImg from '../../images/vedioPost.png'
import circleArrow from '../../images/circleArrow.png'
import Box from '@/components/shared/Box'

function MainPage() {
  useEffect(() => {
    function animateValue(
      element: HTMLElement,
      start: number,
      end: number,
      duration: number,
    ) {
      const range = end - start
      const stepTime = Math.abs(Math.floor(duration / range))
      let current = start
      const increment = end > start ? 1 : -1
      const timer = setInterval(() => {
        current += increment
        element.innerHTML = current.toString()
        if (current === end) {
          clearInterval(timer)
        }
      }, stepTime)
    }

    const countElements = document.querySelectorAll<HTMLElement>('.count')
    countElements.forEach((element) => {
      const startValue = parseInt(element.getAttribute('data-start') || '0')
      const endValue = parseInt(element.getAttribute('data-end') || '0')
      animateValue(element, startValue, endValue, 1000)
    })
  }, [])
  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.mainTop}>
          <div className={styles.intro}>
            <div className={styles.font}>
              <Text typography="h1" display="block" color="beige">
                <span>
                  Triangle
                  <img className={styles.logo} alt="logo" src={bigstar} />
                  <br />
                  Web3 Lab
                </span>
              </Text>
              <Text
                typography="t3"
                display="block"
                color="beige"
                className={styles.text}
              >
                <p>
                  We're a creative design studio specializing in meeting the
                  needs of the new generation. We offer innovative and
                  cutting-edge design solutions to help our clients stand out in
                  today's fast-paced.
                </p>
              </Text>
              <div className={styles.characters}>
                <img className={styles.circlePic} alt="pic" src={user1} />
                <img className={styles.circlePic} alt="pic" src={user2} />
                <img className={styles.circlePic} alt="pic" src={user3} />
                <Text
                  typography="t5"
                  display="block"
                  color="beige"
                  className={styles.text2}
                >
                  Believed by more than a thousand people
                </Text>
              </div>
              <div className={styles.row}>
                <button>
                  <img className={styles.bookBtn} alt="pic" src={bookBtn} />
                </button>
                <img
                  className={styles.circleArrow}
                  alt="pic"
                  src={circleArrow}
                />
              </div>
            </div>
            <div className={styles.pic}>
              <img className={styles.mainPic} alt="pic" src={mainPic} />
            </div>
          </div>
        </section>
        <section className={styles.solution}>
          <div className={styles.mfont}>
            <Text typography="h3" display="block" color="blackBrown">
              <span>
                We provide effective
                <br />
                design solutions
                <img className={styles.logo} alt="logo" src={middlestar} />
              </span>
            </Text>
          </div>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <Box
                logo={IconB}
                title={'UI/UX Design'}
                description="Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app."
              />
              <Box
                logo={IconC}
                title={'Graphic Design'}
                description="Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral."
              />
              <Box
                logo={IconE}
                title={'Motion Graphics'}
                description="FDesigning and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website."
              />
              <Box
                logo={IconF}
                title={'Web Design'}
                description="Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service."
              />
            </div>
          </div>
          <div className={styles.mfontMiddle}>
            <Text
              className={styles.item1}
              typography="h3"
              display="block"
              color="blackBrown"
            >
              <span>
                We make your
                <img className={styles.logo} alt="logo" src={middlestar} />
                <br />
                business stand out
              </span>
            </Text>
            <Text
              typography="t4"
              display="block"
              color="blackBrown"
              className={styles.item2}
            >
              <p>
                We work closely with our clients to know their objectives,
                target audience, unique needs, and practical design solutions.
              </p>
            </Text>
          </div>
          <div className={styles.vedioPost}>
            <div className={styles.item1}>
              <img className={styles.vedioImg} alt="logo" src={videoImg} />
            </div>
            <div className={styles.column}>
              <div className={styles.row}>
                <Text
                  typography="h3"
                  display="block"
                  color="brightGreen"
                  className={`${styles.item2} count`}
                  data-start="10"
                  data-end="15"
                >
                  10
                </Text>
                <Text typography="h3" display="block" color="brightGreen">
                  +
                </Text>
              </div>
              <Text
                typography="t5"
                display="block"
                color="beige"
                className={styles.item2}
              >
                Years of experience
              </Text>
              <div className={styles.dash} />
              <div className={styles.row}>
                <Text
                  typography="h3"
                  display="block"
                  color="brightGreen"
                  className={`${styles.item2} count`}
                  data-start="100"
                  data-end="120"
                >
                  100
                </Text>
                <Text typography="h3" display="block" color="brightGreen">
                  k
                </Text>
              </div>
              <Text
                typography="t5"
                display="block"
                color="beige"
                className={styles.item2}
              >
                Successful projects
              </Text>
              <div className={styles.dash} />
              <div className={styles.row}>
                <Text
                  typography="h3"
                  display="block"
                  color="brightGreen"
                  className={`${styles.item2} count`}
                  data-start="90"
                  data-end="100"
                >
                  90
                </Text>
                <Text typography="h3" display="block" color="brightGreen">
                  %
                </Text>
              </div>
              <Text
                typography="t5"
                display="block"
                color="beige"
                className={styles.item2}
              >
                Client satisfaction rate
              </Text>
            </div>
          </div>
        </section>
        <section className={styles.projects}></section>
      </div>
    </>
  )
}

export default MainPage
