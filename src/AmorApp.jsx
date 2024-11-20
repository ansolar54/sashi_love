import { useEffect, useState } from "react";
import { AmorAcept } from "./AmorAcept";

export const AmorApp = () => {
    const [showAcept, setShowAcept] = useState(false);
    const [position, setPosition] = useState({ top: 51.4, left: 57 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detectar si el dispositivo es móvil
        const checkIfMobile = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        // Comprobar cuando el componente se monte y cuando cambie el tamaño de la ventana
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);

        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }, []);

    const moveButton = () => {

        const safeRange = isMobile ? 50 : 70;
        const randomTop = Math.random() * (safeRange - 10) + 10; // Rango entre 10 y 50% para móviles, entre 10 y 70% para escritorio
        const randomLeft = Math.random() * (safeRange - 10) + 10;
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
