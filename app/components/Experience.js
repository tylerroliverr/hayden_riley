"use client";
import { useEffect, useState } from 'react';
import getExperienceData from './data/getExperienceData';

export default function Experience() {

    const [experienceData, setExperienceData] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getExperienceData();
                if (data) {
                    setExperienceData(data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
        <div className="accordion link" id="experienceAccordion">
            <p className="subHeading">Experience</p>
            <p className="openTag">[open]</p>
            <p className="closeTag">[close]</p>
        </div>
            <div className='itemsWrapper' id='experience'>
                {experienceData && experienceData.length > 0 && experienceData.map((experience, index) => (
                    <div key={index}>
                        <p><span className="bold">{experience.experienceTitle}</span></p>
                        <p>{experience.dates}</p>
                        <p>{experience.description}</p>
                        <div className="itemLine marginItemLine"></div>
                    </div>
                ))}
            </div>
            <div className="line marginForLine"></div>
        </>
    )
}