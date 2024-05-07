"use client";
import getProjectData from "@/app/components/data/getProjectData";
import { useEffect, useState } from "react";

export default function Projects() {

    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getProjectData();
                if (data) {
                    setProjectData(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
        <div className="line"></div>
        <div className="accordion link" id="projectsAccordion">
            <p className="subHeading">Projects</p>
            <p className="openTag">[open]</p>
            <p className="closeTag">[close]</p>
        </div>
            <div className="itemsWrapper"  id="projects">
                {projectData && projectData.length > 0 && projectData.map((project, index) => (
                    <div key={index}>
                        <p><span className="bold">{project.projectTitle}: </span>{project.projectTags}</p>
                        <p><span className="bold">Director of Photography: </span>{project.directorOfPhotography}</p>
                        <p><span className="bold">Company: </span>{project.company}</p>
                        <p><span className="bold">Format: </span>{project.format}</p>
                        <div className="itemLine marginItemLine"></div>
                    </div>
                ))}
            </div>
        <div className="line marginForLine"></div>
        </>
    )
}