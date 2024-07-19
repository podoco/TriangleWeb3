import React from 'react'
import styles from './Footer.module.scss'
import '../../styles/colorPalette.ts'
import Text from '../../components/shared/Text'
import middlestar from '../../images/mSixStar.png'
import tweet from '../../images/tweet.png'
import tlogo from '../../images/tlogo.png'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import linked from '../../images/linked.png'

function Footer() {
  return (
    <div className={styles.footer}>
      <Text typography="h2" display="block" color="beige">
        <span>
          Lets start a
          <img className={styles.logo} alt="logo" src={middlestar} />
          <br />
          project together
        </span>
      </Text>
      <Text
        typography="t2"
        display="block"
        color="beige"
        className={styles.text}
      >
        <p>
          We work closely with our clients to understand their objectives,
          target audience, <br /> and unique needs. We use our creative skills
          to translate these requirements and practical design solutions.
        </p>
      </Text>
      <Text
        typography="t2"
        display="block"
        color="brightGreen"
        className={styles.text2}
      >
        Give us a call:
      </Text>
      <Text
        typography="t2"
        display="block"
        color="beige"
        className={styles.marginbottom}
      >
        (123) 456-7890
      </Text>
      <Text
        typography="t2"
        display="block"
        color="brightGreen"
        className={styles.text2}
      >
        Send us an email:
      </Text>
      <Text
        typography="t2"
        display="block"
        color="beige"
        className={styles.marginbottom}
      >
        info@mthemeus.com
      </Text>

      <div className={styles.btns}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img className={styles.link} alt="Twitter" src={tweet} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.link} alt="Facebook" src={facebook} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.link} alt="Instagram" src={instagram} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.link} alt="LinkedIn" src={linked} />
        </a>
      </div>
      <div className={styles.dash}>
        <div>
          <img className={styles.link} alt="tlogo" src={tlogo} />
        </div>
        <div>
          <Text typography="t4" display="block" color="darkgrey">
            © Copyright 2024, All Rights Reserved by Mthemeus
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Footer
