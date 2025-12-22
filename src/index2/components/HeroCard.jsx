import React, { useState, useEffect } from 'react';
// import logo from '../../assets/index2/logo.png';
const logo = '/logo.png';

export default function HeroCard() {
    const labels = [
        ["AI", "CONSULTING"],
        ["TALENT", "& JOBS"],
        ["CUSTOM", "SOFTWARE"]
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % labels.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [labels.length]);

    return (
        <div className="cardContainer">
            <div className="glassPill">
                {/* Top Circle Area */}
                <div className="circleWindow">
                    <div className="circleContent">
                        <img src={logo} alt="BeanInfosys Logo" className="logo" />
                        <div className="sphereVisual"></div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="cardContent">
                    <div key={index} className="labelContainer">
                        {labels[index].map((line, i) => (
                            <span key={i} className="labelLine">{line}</span>
                        ))}
                    </div>

                    <div className="metaData">
                        <div className="metaItem">
                            <div className="soundWaveVisual">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <span className="metaLabel">Voice AI</span>
                        </div>
                        <div className="metaItem">
                            <span className="metaLabel">Efficiency</span>
                            <span className="metaValue">+40%</span>
                        </div>
                    </div>

                    <a href="tel:+14699195225" className="payBtn">
                        <span className="btnIcon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </span>
                        + 1 469-919-5225
                    </a>

                    <p className="footerText">Enhance operations without disruption.</p>
                </div>
            </div>
        </div>
    );
}
