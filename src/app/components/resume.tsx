"use client";

import React, { useState } from 'react';
import styles from './Resume.module.css';
import Image from 'next/image';

const Resume: React.FC = () => {
    const [showSkills, setShowSkills] = useState(true);

    return (
        <div className={styles.resumeContainer}>
            {/* Personal Information */}
            <section className={styles.personalInfo}>
                <Image 
                src="/profile-picture.jpg" alt="Muhammad Faisal Peerzada" 
                width={80} height={80}
                
                />
                <h1 className={styles.heading1}>Muhammad Faisal Peerzada</h1>
                <p>Address: Saddar, Karachi, Pakistan</p>
                <p>Phone: +92 345 8340669</p>
                <p>Email: mohammadfaisalpirzada@gmail.com</p>
            </section>

            {/* Professional Summary */}
            <section className={styles.summary}>
                <h2 className={styles.heading2}>Professional Summary</h2>
                <p>Experienced education professional with over 20 years of expertise in teaching Mathematics and Physics, curriculum development, and department management. A tech-savvy leader with a passion for integrating digital tools into education, adept at handling online education platforms and fostering innovative learning environments. Committed to lifelong learning and excellence in education.</p>
            </section>

            {/* Education Section */}
            <section className={styles.education}>
                <h2 className={styles.heading2}>Education</h2>
                <ul>
                    <li>Master of Arts in Distance and Formal Education - Allama Iqbal Open University</li>
                    <li>Bachelor of Education - University of Karachi</li>
                    <li>Bachelor of Arts - University of Karachi</li>
                    <li>Higher Secondary Certificate in Pre-Engineering - Board of Intermediate Education Karachi</li>
                    <li>Secondary School Certificate in Computer Science - Board of Secondary Education Karachi</li>
                </ul>
            </section>

            {/* Skills Section */}
            <section className={styles.skills}>
                <h2 className={styles.heading2}>Skills</h2>
                <button className={styles.toggleButton} onClick={() => setShowSkills(!showSkills)}>
                    {showSkills ? "Hide" : "Show"} Skills
                </button>
                {showSkills && (
                    <ul>
                        <li>Microsoft Office (Word, Excel, Visio), Adobe Illustrator, Photoshop, Canva, and Serif</li>
                        <li>Digital Communication: Managing Facebook pages, WhatsApp communities, and running ads</li>
                        <li>Online Education Management with platforms like Zoom</li>
                        <li>Typing Skills: Urdu, Arabic, and English</li>
                        <li>Computer Literacy: Skilled in various software tools and applications for educational technology</li>
                    </ul>
                )}
            </section>

            {/* Work Experience Section */}
            <section className={styles.workExperience}>
                <h2 className={styles.heading2}>Professional Experience</h2>
                <ul>
                    <li>
                        <h3>Head of Department (Secondary) at Peace International School</h3>
                        <p>Lead and manage the secondary department, oversee curriculum planning, and coordinate teaching methods to align with Cambridge and local education standards.</p>
                    </li>
                    <li>
                        <h3>Mathematics Teacher at Government Girls Secondary School</h3>
                        <p>Focus on building students analytical and problem-solving skills through effective Mathematics teaching and engagement in extracurricular activities.</p>
                    </li>
                    <li>
                        <h3>Mathematics Teacher at The Islamic Public School (TIPS)</h3>
                        <p>Designed assessments and provided instruction in Mathematics for grades VII to X.</p>
                    </li>
                </ul>
            </section>

            {/* Interests */}
            <section className={styles.interests}>
                <h2 className={styles.heading2}>Interests</h2>
                <ul>
                    <li>Learning New Software and Technology</li>
                    <li>Gardening</li>
                    <li>Travel and Exploration, especially to northern areas</li>
                    <li>Photography</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;
