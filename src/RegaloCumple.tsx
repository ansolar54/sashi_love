export const RegaloCumple = () => {

    return (

        <div className="birthday-container">

            {/* PARTICULAS */}
            <div className="neon-particles"></div>

            {/* CORAZONES */}
            <div className="hearts">
                <span>💚</span>
                <span>💚</span>
                <span>💚</span>
                <span>💚</span>
                <span>💚</span>
            </div>

            {/* CONTENIDO */}
            <div className="birthday-content">

                <h1 className="birthday-title">
                    FELIZ CUMPLEAÑOS
                </h1>

                <h2 className="birthday-subtitle">
                    ❤️ MI LULU ❤️
                </h2>

                <p className="birthday-message">
                    Gracias por llegar a mi vida,
                    por existir y hacer mis días más felices. Dios te bendiga y te de muchos años más de vida. Te amo mucho #23❤️.
                </p>


                {/* <div className="flex">
                    <div className="photo-frame">

                        <div className="photo-glow"></div>

                        <img
                            src="/images/SASHI_LOVE.jpeg"
                            alt="Sashi Love"
                            className="birthday-photo"
                        />

                    </div>
                    <div className="video-section">
                        <div className="video-glow"></div>
                        <video
                            className="birthday-video"
                            autoPlay
                            loop
                            controls
                            playsInline
                        >
                            <source
                                src="/el_sake_de_binks.mp4"
                                type="video/mp4"
                            />
                            Tu navegador no soporta video.
                        </video>
                    </div>
                </div> */}

                <div className="memory-showcase">

                    {/* FOTO */}
                    <div className="photo-card">

                        <div className="photo-glow"></div>

                        <img
                            src="/images/SASHI_LOVE.jpeg"
                            alt="Sashi Love"
                            className="birthday-photo"
                        />

                        <div className="photo-overlay">
                            ❤️ Mi Persona Favorita ❤️
                        </div>

                    </div>

                    {/* VIDEO */}
                    <div className="video-card">

                        <div className="video-glow"></div>

                        <video
                            className="birthday-video"
                            autoPlay
                            loop
                            controls
                            playsInline
                        >
                            <source
                                src="/el_sake_de_binks.mp4"
                                type="video/mp4"
                            />

                            Tu navegador no soporta video.
                        </video>

                    </div>

                </div>




                {/* ROSAS */}
                {/* <div className="rose-wrapper"></div> */}
                {/* ROSAS */}
                {/* <div className="rose-wrapper">

                    <div className="rose">
                        <div className="petal petal1"></div>
                        <div className="petal petal2"></div>
                        <div className="petal petal3"></div>
                        <div className="stem"></div>
                        <div className="leaf leaf1"></div>
                        <div className="leaf leaf2"></div>
                    </div>

                    <div className="rose">
                        <div className="petal petal1"></div>
                        <div className="petal petal2"></div>
                        <div className="petal petal3"></div>
                        <div className="stem"></div>
                        <div className="leaf leaf1"></div>
                        <div className="leaf leaf2"></div>
                    </div>

                    <div className="rose">
                        <div className="petal petal1"></div>
                        <div className="petal petal2"></div>
                        <div className="petal petal3"></div>
                        <div className="stem"></div>
                        <div className="leaf leaf1"></div>
                        <div className="leaf leaf2"></div>
                    </div>

                </div> */}

            </div>

        </div>
    );
};