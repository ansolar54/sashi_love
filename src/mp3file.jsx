import { useEffect, useRef, useState } from "react";

export const Mp3File = () => {
    const audioRef = useRef(null);
    const hasInteracted = useRef(false); 

    useEffect(() => {
        const enableAudio = async () => {
            if (audioRef.current && !hasInteracted.current) {
                try {
                    await audioRef.current.play();
                    hasInteracted.current = true; // Marca que ya se activó
                    removeListeners(); // Elimina eventos para optimizar
                } catch (error) {
                    console.warn("La reproducción automática fue bloqueada:", error);
                }
            }
        };

        const handleUserInteraction = () => enableAudio();

        const addListeners = () => {
            document.addEventListener("mousemove", handleUserInteraction, { once: true });
            document.addEventListener("mousedown", handleUserInteraction, { once: true });
            document.addEventListener("keydown", handleUserInteraction, { once: true });
            document.addEventListener("touchstart", handleUserInteraction, { once: true });
        };

        const removeListeners = () => {
            document.removeEventListener("mousemove", handleUserInteraction);
            document.removeEventListener("mousedown", handleUserInteraction);
            document.removeEventListener("keydown", handleUserInteraction);
            document.removeEventListener("touchstart", handleUserInteraction);
        };

        addListeners();

        return () => removeListeners();
    }, []);


    return <audio ref={audioRef} src="/sashi_love/EresTu.mp3" preload="auto" loop style={{ display: "none" }} />;
};