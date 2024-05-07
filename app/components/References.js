"use client";
import getReferencesData from "./data/getReferencesData";
import { useEffect, useState } from 'react';
import { toggleAccordion } from "@/public/eventListeners";

export default function References() {

    const [referencesData, setReferencesData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getReferencesData();
                if (data) {
                    setReferencesData(data);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
        <div className="accordion link" id="referencesAccordion" onClick={() => toggleAccordion('referencesAccordion')}>
            <p className="subHeading">References</p>
            <p className="openTag">[open]</p>
            <p className="closeTag">[close]</p>
        </div>
            <div className="itemsWrapper" id="references">
            <div className="itemLine marginItemFirstLine"></div>
                {referencesData && referencesData.length > 0 && referencesData.map((references, index) => (
                    <div key={index}>
                        <p><span className="bold">{references.referenceName}</span></p>
                        <p>{references.roleOfReference}</p>
                        <p>{references.contactDetails}</p>
                        <div className={"itemLine marginItemLine" + (index === referencesData.length - 1 ? " lastItemLine" : "")}></div>
                    </div>
                ))}
            </div>
            <div className="line marginForLine"></div>
        </>
    )
}