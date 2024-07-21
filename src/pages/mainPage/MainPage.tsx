import React, { useEffect, useState } from 'react'
import styles from './MainPage.module.scss'
import '../../styles/colorPalette.ts'
import bigstar from '../../images/bigSixStar.png'
import middlestar from '../../images/mSixStar.png'
import sstar from '../../images/sSixStar.png'
import Text from '../../components/shared/Text'
import mainPic from '../../images/mainPic.png'
import user1 from '../../images/user1.png'
import user2 from '../../images/user2.png'
import user3 from '../../images/user3.png'
import up from '../../images/up.png'
import down from '../../images/down.png'
import bookBtn from '../../images/bookBtn.png'
import IconB from '../../images/IconB.png'
import IconC from '../../images/IconC.png'
import IconE from '../../images/IconD.png'
import team1 from '../../images/team1.png'
import team2 from '../../images/team2.png'
import team3 from '../../images/team3.png'
import team4 from '../../images/team4.png'
import videoImg from '../../images/vedioPost.png'
import circleArrow from '../../images/circleArrow.png'
import Box from '@/components/shared/Box'
import Slider from '@/components/Slider/Slider'
import ReviewBox from '@/components/shared/ReviewBox'

function MainPage() {
  const [activeIndex, setActiveIndex] = useState(null)
  const text = (
    <span>
      LET'S CREATE NEW EXPERIENCES&nbsp;
      <img className={styles.logo} alt="logo" src={sstar} />
      &nbsp;
    </span>
  )
  const repeatText = new Array(10)
    .fill(null)
    .map((_, index) => <React.Fragment key={index}>{text}</React.Fragment>)

  const toggleAccordion = (index: any) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  const accordionContent = [
    {
      title: '01/ Project idea',
      content:
        'The process starts with a detailed discussion with the client to understand their idea & goals.',
    },
    {
      title: '02/ Brainstorming',
      content:
        'In this phase, we brainstorm different approaches and solutions.',
    },
    {
      title: '03/ Launch',
      content: 'Finally, we launch the project and monitor its performance.',
    },
  ]

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
                logo={IconE}
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
        <section className={styles.projects}>
          <div className={styles.slidefont}>
            <Text typography="h3" display="block" color="beige">
              <span>
                Have a wide range of
                <br />
                creative projects
                <img className={styles.logo} alt="logo" src={sstar} />
              </span>
            </Text>
            <div className={styles.slideWrapper}>
              <Slider />
            </div>
          </div>
        </section>
        <section className={styles.process}>
          <div className={styles.processbox}>
            <div className={styles.item3}>
              <Text
                className={styles.protitle}
                typography="h3"
                display="block"
                color="blackBrown"
              >
                <span>
                  Our high-quality
                  <img className={styles.logo} alt="logo" src={middlestar} />
                  <br />
                  working processes
                </span>
              </Text>
              <Text
                typography="t4"
                display="block"
                color="blackBrown"
                className={styles.item2}
              >
                We focus at every stage on effective communication and
                collaboration between the client and ensuring that the final
                design meets the client s objectives and expectations.
                <br /> <br />
                It is important to note that these are simplified steps, and the
                actual work process may vary depending on the complexity of the
                project.
              </Text>
            </div>
            <div className={styles.item4}>
              {accordionContent.map((item, index) => (
                <div
                  className={`${styles.Pbox} ${activeIndex === index ? styles.active : ''}`}
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className={styles.row}>
                    <p>{item.title}</p>
                    <img
                      className={styles.down}
                      alt="arrow"
                      src={activeIndex === index ? up : down}
                    />
                  </div>
                  <div
                    className={`${styles.content} ${activeIndex === index ? styles.expanded : ''}`}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.dashs}></div>
          <div className={styles.reviewTitle}>
            <Text typography="h3" display="block" color="blackBrown">
              <span>
                Clients are always
                <br />
                satisfied with us
                <img className={styles.logo} alt="logo" src={middlestar} />
              </span>
            </Text>
          </div>
          <div className={styles.boxWrapper}>
            <div className={styles.box2}>
              <ReviewBox
                logo={user1}
                title={'Super customer service!'}
                name={'William Jack'}
                job={'Founder@XYZ'}
                description="Excellent customer service and I was really impressed and happy with my purchase especially as it was a last minute order which got to me in time, and when it arrived I was very happy with the design and size and so was the recipient."
              />
              <ReviewBox
                logo={user2}
                title={'Exceptional creativity and vision'}
                name={'Smith Align'}
                job={'Businessman'}
                description="Working Mthemeus was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they perfectly captures our essence & has become instantly recognizable. We couldn't be happier the results!"
              />
              <ReviewBox
                logo={user3}
                title={'Innovative and professional'}
                name={'Smith Align'}
                job={'Milano Joe'}
                description="I can't say enough good things about them. Their team is not only incredibly talented but also highly professional. They listened to our ideas and brought to life in ways we couldn't have imagined. Their innovative approach and dedication to our project."
              />
              <ReviewBox
                logo={user1}
                title={'Transformed our brand'}
                name={'Danial Mark'}
                job={'Marketing Director'}
                description="Our partnership with Mthemeus transformed our brand from ordinary to extraordinary. Their branding expertise and design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition."
              />
            </div>
          </div>
          <div className={styles.marquee}>
            <div className={styles.marquee_content}>{repeatText}</div>
          </div>
          <div className={styles.reviewTitle}>
            <Text typography="h3" display="block" color="blackBrown">
              <span>
                We have a team of
                <br />
                creative people
                <img className={styles.logo} alt="logo" src={middlestar} />
              </span>
            </Text>
          </div>
          <div className={styles.rowBox}>
            <div className={styles.colBox}>
              <img className={styles.team} alt="logo" src={team1} />
              <p className={styles.teamName}>Andrew Mark</p>
              <p>Creative Director</p>
            </div>
            <div className={styles.colBox}>
              <img className={styles.team} alt="logo" src={team2} />
              <p className={styles.teamName}>Jack Taylor</p>
              <p>Senior Designer</p>
            </div>
            <div className={styles.colBox}>
              <img className={styles.team} alt="logo" src={team3} />
              <p className={styles.teamName}>Martine Joy</p>
              <p>Project Manager</p>
            </div>
            <div className={styles.colBox}>
              <img className={styles.team} alt="logo" src={team4} />
              <p className={styles.teamName}>Adam straw</p>
              <p>web Developer</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MainPage
