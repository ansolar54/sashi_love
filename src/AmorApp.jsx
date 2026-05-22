import { useEffect, useState } from "react";
import { RegaloCumple } from "./RegaloCumple";

export const AmorApp = () => {

    const targetDate = new Date("2026-05-23T00:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState("");
    const [canOpen, setCanOpen] = useState(false);
    const [openGift, setOpenGift] = useState(false);

    useEffect(() => {

        const interval = setInterval(() => {

            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                setCanOpen(true);
                setTimeLeft("¡Ya puedes abrir tu regalo!");
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft(
                `${days}d ${hours}h ${minutes}m ${seconds}s`
            );

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    if (openGift) {
        return <RegaloCumple />;
    }

    return (
        <div className="main-romantic">

            <div className="overlay-romantic" />

            <div className="floating-love">

                <span>❤️</span>
                <span>💚</span>
                <span>😍</span>
                <span>💕</span>
                <span>🥰</span>
                <span>💖</span>
                <span>💘</span>
                <span>❤️</span>
                <span>😍</span>
                <span>💚</span>
                <span>💕</span>
                <span>🥰</span>

            </div>

            <div className="content-romantic">
                <h1 className="title-romantic neon-title">
                    <span>❤️</span>
                    <span>T</span>
                    <span>E</span>

                    <span className="space"></span>

                    <span>A</span>
                    <span>M</span>
                    <span>O</span>                   
                    <span>❤️</span>
                </h1>

                <p className="subtitle-romantic">
                    Tengo un regalo especial para ti
                </p>

                <div className="countdown-box">
                    {timeLeft}
                </div>

                <button
                    className={`gift-button ${!canOpen ? "disabled-btn" : ""}`}
                    disabled={!canOpen}
                    onClick={() => setOpenGift(true)}
                >
                    {canOpen
                        ? "Haz clic para abrir tu regalo 🎁"
                        : "Aún no disponible"}
                </button>

            </div>

        </div>
    );
};