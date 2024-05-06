"use client";
import getReferencesData from "./data/getReferencesData";
import { useEffect, useState } from 'react';

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
            <p className="subHeading">References</p>
            <div className="itemsWrapper" id="references">
                {referencesData && referencesData.length > 0 && referencesData.map((references, index) => (
                    <div key={index}>
                        <p><span className="bold">{references.referenceName}</span></p>
                        <p>{references.roleOfReference}</p>
                        <p>{references.contactDetails}</p>
                    </div>
                ))}
            </div>
        </>
    )
}