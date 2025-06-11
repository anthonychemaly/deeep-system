import styles from './styles.module.scss';

const Frame1 = () => {
	return(
		<div className={styles.frame1}>
			<span className={styles.labelText}>Total Visits</span>
			<span className={styles.visitCount}>13</span>
			<div className={styles.visitTrend}>
				<span className={styles.trendPercentage}>+4%</span>
				<span className={styles.trendDescription}>then last month</span>
			</div>
		</div>
	)
};

export default Frame1;