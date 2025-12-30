import React from 'react';
import styles from './CTASection.module.css';
import ctaTextBg from '../../assets/index2/cta_text_bg.png';

const CTASection = ({ headline = "Ready to supercharge <br/> your AI Transformation process?" }) => {
    return (
        <section className={styles.section}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.headline} style={{ backgroundImage: `url(${ctaTextBg})` }} dangerouslySetInnerHTML={{ __html: headline }}>
                </h2>

                <div className={styles.buttonGroup}>
                    <a
                        href="/contact"
                        className={`${styles.button} ${styles.callButton}`}
                    >
                        Contact Us
                    </a>
                    <a
                        href="contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.button} ${styles.demoButton}`}
                    >
                        Book a Free Consultation Call
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
