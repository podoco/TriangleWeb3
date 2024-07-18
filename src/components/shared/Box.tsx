import React from 'react'
import styles from './Box.module.scss'
import arrow from '../../images/arrow.svg'
import Text from '../../components/shared/Text'

interface IconTextComponentProps {
  logo: string
  title: string
  description: string
}

function Box({ logo, title, description }: IconTextComponentProps) {
  return (
    <div className={styles.box}>
      <img className={styles.logo} alt="logo" src={logo} />
      <Text typography="t1" display="block" color="blackBrown">
        {title}
      </Text>
      <Text typography="t3" display="block" color="blackBrown">
        {description}
      </Text>
      <img className={styles.logo} alt="arrow" src={arrow} />
    </div>
  )
}
export default Box
