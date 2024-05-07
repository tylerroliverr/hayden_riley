"use client";
import getSkillsData from "./data/getSkillsData";
import { useEffect, useState } from "react";
import { toggleAccordion } from "@/public/eventListeners";

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
        <div className="accordion link" id="skillsAccordion" onClick={() => toggleAccordion('skillsAccordion')}>
            <p className="subHeading">Skills</p>
            <p className="openTag">[open]</p>
            <p className="closeTag">[close]</p>
        </div>
            <div className="itemsWrapper" id="skills">
                <div className="itemLine marginItemFirstLine"></div>
                {skillsData && skillsData.length > 0 && skillsData.map((skill, index) => (
                    <div key={index}>
                        <p><span className="bold">{skill.skill}</span></p>
                        <p>{skill.description}</p>
                        <div className={"itemLine marginItemLine" + (index === skillsData.length - 1 ? " lastItemLine" : "")}></div>
                    </div>
                ))}
            </div>
            <div className="line marginForLine"></div>
        </>
    )
}