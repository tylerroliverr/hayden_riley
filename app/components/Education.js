"use client";
import { useEffect, useState } from "react";
import getEducationData from "./data/getEducationData";
import { toggleAccordion } from "@/public/eventListeners";

export default function Education() {
    const [educationData, setEducationData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getEducationData();
                if (data) {
                    setEducationData(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
        <div className="accordion link" id="educationAccordion" onClick={() => toggleAccordion('educationAccordion')}>
            <p className="subHeading">Education</p>
            <p className="openTag">[open]</p>
            <p className="closeTag">[close]</p>
        </div>
            <div className="itemsWrapper" id="education">
            <div className="itemLine marginItemFirstLine"></div>
                {educationData && educationData.length > 0 && educationData.map((education, index) => (
                    <div key={index}>
                        <p><span className="bold">{education.schoolName}</span></p>
                        <p>{education.dates}</p>
                        <p>{education.areaStudied}</p>
                        <p>{education.description}</p>
                        <div className={"itemLine marginItemLine" + (index === educationData.length - 1 ? " lastItemLine" : "")}></div>
                    </div>
                ))}
            </div>
            <div className="line marginForLine"></div>
        </>
    )
}