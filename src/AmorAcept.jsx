import { useEffect, useState } from "react";
import { RptaNo } from "./RptaNo";
import { RptaSi } from "./RptaSi";

export const AmorAcept = () => {

    const [showAcept, setShowAcept] = useState(false);
    const [showSi, setShowSi] = useState(false)
    const [redirectBack, setRedirectBack] = useState(false);

    const handleNoClick = () => {
        setShowAcept(true);

        setTimeout(() => {
            setRedirectBack(true);
        }, 4000); 
    };

    const handleYesClick = () => {
        setShowSi(true)
    }

    useEffect(() => {
        if (redirectBack) {
            setShowAcept(false); 
            setRedirectBack(false); 
        }
    }, [redirectBack]);

    if (showSi) {
        return <RptaSi />;
    }

    if (showAcept) {
        return <RptaNo />;
    }

    return (
        <div className="amor-container">
            <img src="https://media4.giphy.com/media/N4NCWkkrgqJPy/giphy.gif" />
            <h1>¿Estás segura de tu respuesta?</h1>

            <div className="buttons-container">
                <button className="button-yes1" onClick={handleYesClick}>Sí</button>
                <button className="button-no1" onClick={handleNoClick}>No</button>
            </div>
        </div>
    )
}
