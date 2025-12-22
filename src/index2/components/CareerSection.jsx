import React from 'react';
import styles from './CareerSection.module.css';
import hiringImage from '../../assets/index2/career_hiring.png';
import techVisualBg from '../../assets/index2/tech_visual_bg_3.jpg';

const CareerSection = () => {
    const jobs = [
        {
            id: 1,
            type: "Full-time",
            title: "Senior Full-Stack Developer",
            department: "Engineering",
            location: "San Francisco, CA"
        },
        {
            id: 2,
            type: "Full-time",
            title: "UX/UI Designer",
            department: "Design",
            location: "Remote"
        },
        {
            id: 3,
            type: "Full-time",
            title: "Product Manager",
            department: "Product",
            location: "New York, NY",
            action: "View Position"
        },
        {
            id: 4,
            type: "Full-time",
            title: "DevOps Engineer",
            department: "Operations",
            location: "Austin, TX"
        }
    ];

    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle} style={{ backgroundImage: `url(${techVisualBg})` }}>Career</h2>
            <div className={styles.contentWrapper}>
                {/* Left Column: Job List */}
                <div className={styles.leftColumn}>

                    {jobs.map((job) => (
                        <div key={job.id} className={styles.jobCard}>
                            <div className={styles.jobInfo}>
                                <span className={styles.jobType}>{job.type}</span>
                                <h3 className={styles.jobTitle}>{job.title}</h3>
                                <div className={styles.jobMeta}>
                                    <span className={styles.metaItem}>{job.department}</span>
                                    <span>•</span>
                                    <span className={styles.metaItem}>{job.location}</span>
                                </div>
                            </div>
                            <div className={styles.arrowIcon}>→</div>
                        </div>
                    ))}
                </div>

                {/* Right Column: Hiring Image */}
                <div className={styles.rightColumn}>
                    <img src={hiringImage} alt="We're Hiring" className={styles.hiringImage} />
                </div>
            </div>
        </div>
    );
};

export default CareerSection;
