import React from 'react';
import { Phone } from 'lucide-react';
import styles from './CTASection.module.css';
import ctaTextBg from '../../assets/index2/cta_text_bg.png';

const CTASection = ({ headline = "Ready to supercharge <br/> your AI Transformation process?" }) => {
    return (
        <section className={styles.section}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.headline} style={{ backgroundImage: `url(${ctaTextBg})` }} dangerouslySetInnerHTML={{ __html: headline }}>
                </h2>

                <div className={styles.buttonGroup}>
                    <button className={`${styles.button} ${styles.callButton}`}>
                        <Phone size={18} className={styles.phoneIcon} />
                        +1 469-919-5225
                    </button>
                    <button className={`${styles.button} ${styles.demoButton}`}>
                        Book a demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
