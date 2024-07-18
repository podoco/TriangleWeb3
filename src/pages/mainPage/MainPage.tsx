import React from 'react'
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
import arrow from '../../images/arrow.svg'
import circleArrow from '../../images/circleArrow.png'
import Box from '@/components/shared/Box'
function MainPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.mainTop}>
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
        </div>
        <div className={styles.solution}>
          <div className={styles.mfont}>
            <Text typography="h2" display="block" color="blackBrown">
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
