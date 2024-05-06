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
                    console.log(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    console.log(projectData);

    return (
        <>
            <p className="subHeading">Projects</p>
            <div className="projectsWrapper">
                {projectData && projectData.length > 0 && projectData.map((project, index) => (
                    <div key={index}>
                        <p><span className="bold">{project.projectTitle}: </span>{project.projectTags}</p>
                        <p>Company: {project.company}</p>
                        <p>Director of Photography: {project.directorOfPhotography}</p>
                        <p>Format: {project.format}</p>
                        <div className="line"></div>
                    </div>
                ))}
            </div>
        </>
    )
}