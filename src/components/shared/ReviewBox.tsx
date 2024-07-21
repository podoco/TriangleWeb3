import React from 'react'
import styles from './ReviewBox.module.scss'
import Text from '../../components/shared/Text'
import star from '../../images/fiveStar.png'

interface IconTextComponentProps {
  logo: string
  title: string
  description: string
  name: string
  job: string
}

function ReviewBox({
  logo,
  title,
  description,
  name,
  job,
}: IconTextComponentProps) {
  return (
    <div className={styles.box}>
      <img className={styles.star} alt="star" src={star} />
      <Text typography="t1Bold" display="block" color="blackBrown">
        {title}
      </Text>
      <Text typography="t3" display="block" color="blackBrown">
        {description}
      </Text>
      <div className={styles.people}>
        <img className={styles.logo} alt="logo" src={logo} />
        <p className={styles.name}>{name}</p>
        <p className={styles.job}>{job}</p>
      </div>
    </div>
  )
}

export default ReviewBox
