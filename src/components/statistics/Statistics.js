import React from 'react'
import PropTypes from 'prop-types';
import styles from './statistics.module.css'

const Statistics = ({title, stats}) => (

<section className={`${styles.statistics} ${styles.container}`}>
  <h2 className={styles.title}>{title}</h2>
  <ul className={styles.statList}>
    {stats.map(elem=> (
    <li key= {elem.id} className={styles.item}>
      <span className="label">{elem.label}</span>
      <span className="percentage">{elem.percentage}%</span>
    </li>))}
  </ul>
</section>
)

Statistics.propTypes = {
title: PropTypes.string,
stats: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
)
}

export default Statistics