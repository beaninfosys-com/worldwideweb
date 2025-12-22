import React from 'react';
import styles from './TestimonialsSection.module.css';
import sarahImage from '../../assets/index2/testimonial_sarah.png';
import michaelImage from '../../assets/index2/testimonial_michael.png';
import michelleImage from '../../assets/index2/testimonial_michelle.png';
import robImage from '../../assets/index2/testimonial_rob.png';
import alexImage from '../../assets/index2/testimonial_alex.png';

const TestimonialsSection = () => {
    // Data
    const testimonials = [
        {
            id: 1,
            image: robImage,
            headline: '"The AI solution delivered was magic—a flawless voice AI engine."',
            info: { title: "CEO, S7 Systems", name: "Rob Klaren" },
            details: [
                { label: "Challenge:", text: "Building an interactive voice AI engine" },
                { label: "Solution:", text: "Open-source multilingual AI core" },
                { label: "Impact:", text: "Customer resolution time -60%" }
            ]
        },
        {
            id: 2,
            image: sarahImage,
            headline: '"Their talent transformed our data operations beyond expectations."',
            info: { title: "CTO, InnovateTech", name: "Sarah Chen" },
            details: [
                { label: "Challenge:", text: "Needed data analysts fast" },
                { label: "Solution:", text: "Matched 3 certified analysts in 48h" },
                { label: "Impact:", text: "Reduced backlog by 70%" }
            ]
        },
        {
            id: 3,
            image: michaelImage,
            headline: '"Seamless collaboration during a challenging infrastructure upgrade."',
            info: { title: "CISO, MediCare Systems", name: "Dr. James Wilson" },
            details: [
                { label: "Challenge:", text: "Security specialists for expansion" },
                { label: "Solution:", text: "Deployed 5 cybersecurity experts" },
                { label: "Impact:", text: "Zero security incidents" }
            ]
        },
        {
            id: 4,
            image: michelleImage,
            headline: '"The project managers had exactly the industry knowledge we needed."',
            info: { title: "COO, FinancePlus", name: "Michelle Rodriguez" },
            details: [
                { label: "Challenge:", text: "Finding fintech PMs" },
                { label: "Solution:", text: "2 PMP-certified senior PMs" },
                { label: "Impact:", text: "Transformation ahead of schedule" }
            ]
        },
        {
            id: 5,
            image: alexImage,
            headline: '"They didn\'t just fill positions – they contributed to our bottom line."',
            info: { title: "Product Director, ShopEase", name: "Alex Thompson" },
            details: [
                { label: "Challenge:", text: "Urgent need for UX designers" },
                { label: "Solution:", text: "Placed 4 senior specialists" },
                { label: "Impact:", text: "Conversion rate +32%" }
            ]
        }
    ];

    // Create a long list for seamless scrolling (Duplicated twice to ensure scroll continuity)
    const marqueeList = [...testimonials, ...testimonials];

    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Testimonials</h2>

            <div className={styles.marqueeViewport}>
                <div className={styles.marqueeTrack}>
                    {marqueeList.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className={styles.slideItem}
                        >
                            <div className={styles.card}>
                                <div className={styles.imageContainer}>
                                    <img src={item.image} alt={item.info.name} className={styles.personImage} />
                                </div>

                                <div className={styles.personInfo}>
                                    <div className={styles.personName}>{item.info.name}</div>
                                    <div className={styles.personTitle}>{item.info.title}</div>
                                </div>

                                <blockquote className={styles.headline}>
                                    {item.headline}
                                </blockquote>

                                <div className={styles.detailsGrid}>
                                    {item.details.map((detail, idx) => (
                                        <div key={idx} className={styles.detailItem}>
                                            <span className={styles.detailLabel}>{detail.label}</span>
                                            <span className={styles.detailText}>{detail.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background decorative circle lines */}
            <div className={styles.bgCircles}></div>
        </div>
    );
};

export default TestimonialsSection;
