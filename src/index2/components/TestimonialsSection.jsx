import React, { useRef, useEffect } from 'react';
import styles from './TestimonialsSection.module.css';
import techVisualBg from '../../assets/index2/tech_visual_bg_3.jpg';
// Using industry-relevant HD images instead of person photos
const voiceAIImage = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
const dataAnalyticsImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
const healthcareImage = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
const fintechImage = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
const ecommerceImage = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';

const TestimonialsSection = () => {
    const scrollContainerRef = useRef(null);
    const animationFrameRef = useRef(null);
    const isHoveredRef = useRef(false);
    const lastManualScrollTimeRef = useRef(0);

    // Initial scroll position and auto-scroll
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // Start from the middle set of triplicated items
        const resetToMiddle = () => {
            container.scrollLeft = container.scrollWidth / 3;
        };

        // Reset once on load (slight delay to ensure scrollWidth is calculated)
        const initTimeout = setTimeout(resetToMiddle, 100);

        const autoScroll = () => {
            const now = Date.now();
            const isManualScrolling = now - lastManualScrollTimeRef.current < 2000;

            if (!isHoveredRef.current && !isManualScrolling && container) {
                container.scrollLeft += 0.8; // Speed of scroll

                const scrollWidth = container.scrollWidth;
                const clientWidth = container.clientWidth;
                const scrollLeft = container.scrollLeft;
                const singleSetWidth = scrollWidth / 3;

                // Seamless reset logic
                if (scrollLeft + clientWidth >= (singleSetWidth * 2)) {
                    // When reaching end of 2nd set, jump back one full set
                    container.scrollLeft -= singleSetWidth;
                } else if (scrollLeft <= singleSetWidth / 2) {
                    // When reaching beginning of 2nd set, jump forward one full set
                    container.scrollLeft += singleSetWidth;
                }
            }
            animationFrameRef.current = requestAnimationFrame(autoScroll);
        };

        animationFrameRef.current = requestAnimationFrame(autoScroll);

        return () => {
            clearTimeout(initTimeout);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            lastManualScrollTimeRef.current = Date.now();
            const scrollAmount = 390; // Card width + padding
            const container = scrollContainerRef.current;
            const targetScroll = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    // Data - Industry-focused testimonials based on ImpactCarousel structure
    const testimonials = [
        {
            id: 1,
            businessType: "Voice AI Technology",
            image: voiceAIImage,
            backgroundImage: "/images/voice_ai_bg.png",
            challenge: "Building a sophisticated interactive voice AI engine for customer service automation",
            solution: "Implemented open-source multilingual AI core with advanced natural language processing",
            impact: "Achieved 60% reduction in customer resolution time and improved user satisfaction scores"
        },
        {
            id: 2,
            businessType: "Data Analytics Firm",
            image: dataAnalyticsImage,
            backgroundImage: "/images/data_analytics_bg.png",
            challenge: "Needed skilled data analysts with expertise in machine learning and quick turnaround time",
            solution: "Matched 3 certified analysts within 48 hours and facilitated immediate project integration",
            impact: "Reduced data processing backlog by 70% and improved analytical insights delivery"
        },
        {
            id: 3,
            businessType: "Healthcare Network",
            image: healthcareImage,
            backgroundImage: "/images/healthcare_bg.png",
            challenge: "Required specialized IT security experts during critical system expansion phase",
            solution: "Deployed a team of 5 certified cybersecurity professionals with healthcare compliance experience",
            impact: "Maintained zero security incidents during critical system transition and expansion"
        },
        {
            id: 4,
            businessType: "Financial Services",
            image: fintechImage,
            challenge: "Finding qualified project managers with deep fintech domain knowledge and PMP certification",
            solution: "Connected them with 2 PMP-certified senior project managers experienced in financial services",
            impact: "Completed comprehensive digital transformation project 2 months ahead of original schedule"
        },
        {
            id: 5,
            businessType: "E-Commerce Platform",
            image: ecommerceImage,
            backgroundImage: "/images/ecommerce_bg.png",
            challenge: "Urgent requirement for experienced UX designers during major product redesign initiative",
            solution: "Placed 4 senior UX specialists with e-commerce expertise within one week of engagement",
            impact: "New design implementation resulted in 32% increase in user conversion rates"
        }
    ];

    // Create a long list for seamless infinite scrolling (Triplicated for smooth loop)
    const marqueeList = [...testimonials, ...testimonials, ...testimonials];

    return (
        <div className={styles.sectionContainer}>
            <h2 className={styles.headline} style={{ backgroundImage: `url(${techVisualBg})` }}>Success Stories</h2>

            <div className={styles.carouselWrapper}>
                {/* Left Arrow */}
                <button
                    className={styles.scrollButton + ' ' + styles.scrollButtonLeft}
                    onClick={() => scroll('left')}
                    aria-label="Scroll left"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <div
                    className={styles.marqueeViewport}
                    ref={scrollContainerRef}
                    onMouseEnter={() => { isHoveredRef.current = true; }}
                    onMouseLeave={() => { isHoveredRef.current = false; }}
                >
                    <div className={styles.marqueeTrack}>
                        {marqueeList.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className={styles.slideItem}
                            >
                                <div
                                    className={styles.card}
                                    style={item.backgroundImage ? {
                                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(${item.backgroundImage})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    } : {}}
                                >
                                    <div className={styles.imageContainer}>
                                        <img src={item.image} alt={item.businessType} className={styles.personImage} />
                                    </div>

                                    {/* Business Type - Prominently displayed */}
                                    <div className={styles.businessType}>
                                        {item.businessType}
                                    </div>

                                    {/* Challenge, Solution, Impact - Clean format */}
                                    <div className={styles.detailsContainer}>
                                        <div className={styles.detailSection}>
                                            <h4 className={styles.sectionTitle}>Challenge:</h4>
                                            <p className={styles.sectionText}>{item.challenge}</p>
                                        </div>

                                        <div className={styles.detailSection}>
                                            <h4 className={styles.sectionTitle}>Solution:</h4>
                                            <p className={styles.sectionText}>{item.solution}</p>
                                        </div>

                                        <div className={styles.detailSection}>
                                            <h4 className={styles.sectionTitle}>Impact:</h4>
                                            <p className={styles.sectionText}>{item.impact}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    className={styles.scrollButton + ' ' + styles.scrollButtonRight}
                    onClick={() => scroll('right')}
                    aria-label="Scroll right"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

            {/* Background decorative circle lines */}
            <div className={styles.bgCircles}></div>
        </div>
    );
};

export default TestimonialsSection;
