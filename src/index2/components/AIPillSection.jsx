import React, { useRef, useEffect, useState } from 'react';
import styles from './AIPillSection.module.css';
import aiPillImage from '../../assets/index2/ai_pill_bean.png';
import aiServicesBg from '../../assets/index2/ai_services_bg.jpg';

const AIPillSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.contentContainer}>
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <img src={aiPillImage} alt="AI Pill" className={styles.pillImage} />
                    </div>
                </div>

                <div className={styles.textColumn}>
                    <h2 className={styles.headline} style={{ backgroundImage: `url(${aiServicesBg})` }}>
                        AI Services for your <span className={styles.highlight}>enterprise</span>
                    </h2>

                    <div className={styles.productsSection}>
                        <div className={styles.productsList}>
                            <div className={styles.productItem}>
                                <div className={styles.productNumber}>01</div>
                                <div className={styles.productContent}>
                                    <h4 className={styles.productTitle}>AI Solutions & Integration</h4>
                                    <p className={styles.productDescription}>
                                        Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation. Our AI solutions are tailored to transform your business operations and enhance decision-making capabilities.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.productItem}>
                                <div className={styles.productNumber}>02</div>
                                <div className={styles.productContent}>
                                    <h4 className={styles.productTitle}>Consulting and Advisory</h4>
                                    <p className={styles.productDescription}>
                                        Strategic guidance from industry experts to optimize your technology investments and improve business processes. We provide actionable insights to help you navigate digital transformation and achieve sustainable growth.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.productItem}>
                                <div className={styles.productNumber}>03</div>
                                <div className={styles.productContent}>
                                    <h4 className={styles.productTitle}>Business Intelligence</h4>
                                    <p className={styles.productDescription}>
                                        Transform your data into actionable insights with our comprehensive business intelligence solutions. We help you make informed decisions through advanced analytics, reporting, and visualization tools.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIPillSection;
