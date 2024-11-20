import { useState } from "react";
import { AmorAcept } from "./AmorAcept";

export const AmorApp = () => {
    const [showAcept, setShowAcept] = useState(false);
    const [position, setPosition] = useState({ top: 51.4, left: 57 });

    const moveButton = () => {
        const randomTop = Math.random() * 70 + 10; // Rango entre 0 y 80% para evitar que salga del viewport
        const randomLeft = Math.random() * 70 + 10;
        setPosition({ top: randomTop, left: randomLeft });
    };

    const handleYesClick = () => {
        // const response = confirm("¿Estás segura?");
        // if (response) {
        //     alert("¡Me haces muy feliz! ❤");
        // } else {
        //     alert("Está bien, tomaré tu tiempo 😅");
        // }
        setShowAcept(true);
    };

    if (showAcept) {
        return <AmorAcept />;
    }

    return (
        <> 
        <div className="amor-container">
        <img src="https://media1.giphy.com/media/bOQeC2SNniMNy/giphy.gif" />
            <h1>¿Quieres ser mi novia?</h1>

            <button className="button-yes" onClick={handleYesClick}>Sí, acepto =D</button>

            <button
                className="button-no"
                style={{ top: `${position.top}%`, left: `${position.left}%` }}
                onMouseEnter={moveButton}
            >
                No, ni soñando
            </button>
        </div></>
       
    )
}
