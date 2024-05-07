"use client";
import getSkillsData from "./data/getSkillsData";
import { useEffect, useState } from "react";

export default function Skills() {

    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getSkillsData();
                if (data) {
                    setSkillsData(data);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);
    
    return (
        <>
        <div className="accordion" id="skillsAccordion">
            <p className="subHeading">Skills</p>
            <p className="openTag">[open]</p>
            <p className="closeTag">[close]</p>
        </div>
            <div className="itemsWrapper" id="skills">
                {skillsData && skillsData.length > 0 && skillsData.map((skill, index) => (
                    <div key={index}>
                        <p><span className="bold">{skill.skill}</span></p>
                        <p>{skill.description}</p>
                        <div className="itemLine marginItemLine"></div>
                    </div>
                ))}
            </div>
            <div className="line marginForLine"></div>
        </>
    )
}