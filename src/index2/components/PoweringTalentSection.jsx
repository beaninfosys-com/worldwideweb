import React from 'react';
import styles from './PoweringTalentSection.module.css';

const PoweringTalentSection = () => {
    return (
        <div className={styles.poweringTalentSection}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Powering Talent Across
                        <span className={styles.titleAccent}>Industries</span>
                    </h2>
                    <p className={styles.description}>
                        We connect top talent with leading organizations across diverse industries, delivering exceptional results through our comprehensive staffing solutions.
                    </p>
                </div>

                {/* Job Roles Images - Top Section */}
                <div className={styles.carouselWrapper}>
                    <div className={styles.carouselContainer}>
                        <div className={styles.scrollContainer}>
                            <div className={styles.imageGrid}>
                                <div className={styles.imageColumn}>
                                    <div className={styles.imageCard}>
                                        <img src="/images/about/per1.jpg" alt="Full Stack Developer" />
                                    </div>
                                </div>
                                <div className={styles.imageColumn}>
                                    <div className={styles.imageCard}>
                                        <img src="/images/about/per2.jpg" alt="Data Scientist" />
                                    </div>
                                </div>
                                <div className={styles.imageColumn}>
                                    <div className={styles.imageCard}>
                                        <img src="/images/about/per3.jpg" alt="UX/UI Designer" />
                                    </div>
                                </div>
                                <div className={styles.imageColumn}>
                                    <div className={styles.imageCard}>
                                        <img src="/images/about/per4.jpg" alt="DevOps Engineer" />
                                    </div>
                                </div>
                                <div className={styles.imageColumn}>
                                    <div className={`${styles.imageCard} ${styles.gradient}`}>
                                        <img src="/images/about/per5.webp" alt="Project Manager" />
                                    </div>
                                </div>
                                <div className={styles.imageColumn}>
                                    <div className={styles.imageCard}>
                                        <img src="/images/about/per6.webp" alt="AI/ML Engineer" />
                                    </div>
                                </div>
                                <div className={styles.imageColumn}>
                                    <div className={styles.imageCard}>
                                        <img src="/images/about/per7.jpg" alt="AI/ML Engineer" />
                                    </div>
                                </div>
                                <div className={styles.imageColumn}>
                                    <div className={styles.imageCard}>
                                        <img src="/images/about/per8.webp" alt="Cyber Security" />
                                    </div>
                                </div>
                                <div className={styles.imageColumn}>
                                    <div className={styles.imageCard}>
                                        <img src="/images/about/per9.jpg" alt="Business Analyst" />
                                    </div>
                                </div>
                                <div className={styles.imageColumn}>
                                    <div className={styles.imageCard}>
                                        <img src="/images/about/per10.jpg" alt="QA Engineer" />
                                    </div>
                                </div>
                                <div className={styles.imageColumn}>
                                    <div className={styles.imageCard}>
                                        <img src="/images/about/per11.jpg" alt="Cloud Architect" />
                                    </div>
                                </div>
                                <div className={styles.imageColumn}>
                                    <div className={styles.imageCard}>
                                        <img src="/images/about/per12.jpg" alt="Cloud Architect" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Arrow Controls */}
                        <div className={styles.arrowControls}>
                            <button
                                className={styles.arrowButton}
                                onClick={() => {
                                    const container = document.querySelector(`.${styles.scrollContainer}`);
                                    if (container) {
                                        container.scrollLeft -= 300;
                                    }
                                }}
                            >
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                className={styles.arrowButton}
                                onClick={() => {
                                    const container = document.querySelector(`.${styles.scrollContainer}`);
                                    if (container) {
                                        container.scrollLeft += 300;
                                    }
                                }}
                            >
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoweringTalentSection;
