import React, { useRef, useEffect, useState } from 'react';
import styles from './TechVisualSection.module.css';
import bgImage from '../../assets/index2/tech_visual_bg_3.jpg';

const TechVisualSection = () => {
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
                <div className={styles.textColumn}>
                    <h2 className={styles.headline}>
                        Pushing the boundaries<br />
                        with <span className={styles.highlight}>AI and Technology</span>
                    </h2>
                    <p className={styles.description}>
                        We merge technology and visual design to create innovative, impactful solutions.
                        Our mission is to deliver designs that are both striking and highly functional,
                        redefining what's possible in the digital space.
                    </p>
                </div>

                <div className={styles.visualColumn}>
                    <div className={styles.visualWrapper}>
                        <svg viewBox="0 0 1000 600" className={styles.svgShape}>
                            <defs>
                                <clipPath id="ai-text-clip">
                                    <text x="50%" y="50%" textAnchor="middle" dy=".35em" className={styles.svgText}>AI</text>
                                </clipPath>
                            </defs>
                            <image
                                href={bgImage}
                                width="100%"
                                height="100%"
                                preserveAspectRatio="xMidYMid slice"
                                clipPath="url(#ai-text-clip)"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className={styles.statsGrid}>
                {[
                    { number: "320+", label: "Projects Completed" },
                    { number: "150+", label: "Happy Clients" },
                    { number: "98%", label: "Customer Retention" },
                    { number: "1000+", label: "Person Years of Experience." }
                ].map((stat, index) => (
                    <div key={index} className={styles.statItem} style={{ transitionDelay: `${index * 0.1}s` }}>
                        <span className={styles.statNumber}>{stat.number}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechVisualSection;
