const universe = document.querySelector(".universe");
const button = document.getElementById("magicButton");
const message = document.getElementById("message");
const moon = document.querySelector(".moon");

// Create twinkling stars
function createStars() {
    for (let i = 0; i < 70; i++) {
        const star = document.createElement("span");

        star.className = "star";
        star.textContent = "✦";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";

        universe.appendChild(star);
    }
}

// Create shooting stars
function createShootingStar() {
    const star = document.createElement("div");

    star.className = "shooting-star";
    star.style.left = (20 + Math.random() * 80) + "%";
    star.style.top = Math.random() * 50 + "%";

    universe.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 1500);
}

// Magic button
button.addEventListener("click", function () {
    message.textContent =
        "✨ A beautiful dream is waiting for you. Keep believing in yourself! 💜";
});

// Interactive moon
moon.addEventListener("click", function () {
    message.textContent =
        "🌙 Your universe is full of possibilities! ✨";
});

// Start animations
createStars();
createShootingStar();
setInterval(createShootingStar, 2000);
// ===== SECRET MESSAGE PORTAL =====

const portalButton = document.getElementById("portalButton");
const secretPortal = document.getElementById("secretPortal");
const closePortal = document.getElementById("closePortal");
const secretMessage = document.getElementById("secretMessage");

const secretText =
    "Welcome to your own little universe! ✨ Every star holds a possibility, every dream deserves a chance, and every new line of code takes you one step further. Keep creating, keep learning, and let your imagination shine. 💜";

let typingTimer;

portalButton.addEventListener("click", function () {
    secretPortal.classList.add("active");

    secretMessage.textContent = "";

    clearInterval(typingTimer);

    let index = 0;

    typingTimer = setInterval(function () {
        secretMessage.textContent += secretText.charAt(index);

        index++;

        if (index >= secretText.length) {
            clearInterval(typingTimer);
        }
    }, 40);
});

// Close the portal

closePortal.addEventListener("click", function () {
    secretPortal.classList.remove("active");
    clearInterval(typingTimer);
});

// Close when clicking outside the message box

secretPortal.addEventListener("click", function (event) {
    if (event.target === secretPortal) {
        secretPortal.classList.remove("active");
        clearInterval(typingTimer);
    }
});
// ===== INTERACTIVE PLANETS =====

// 🌍 Magical Planet Messages

const planets = document.querySelectorAll(".planet");
const planetMessage = document.getElementById("planetMessage");
const planetTitle = document.getElementById("planetTitle");
const planetDescription = document.getElementById("planetDescription");

planets.forEach(function (planet) {
    planet.addEventListener("click", function () {
        const title = planet.getAttribute("data-title");
        const message = planet.getAttribute("data-message");

        planetTitle.textContent = title;
        planetDescription.textContent = message;

        planetMessage.classList.remove("show");
        void planetMessage.offsetWidth;
        planetMessage.classList.add("show");
    });
});
// ✨ Magical Mouse Trail

document.addEventListener("mousemove", function (event) {

    const star = document.createElement("div");

    star.className = "mouse-star";
    star.textContent = "✦";

    star.style.left = event.clientX + "px";
    star.style.top = event.clientY + "px";

    document.body.appendChild(star);

    setTimeout(function () {
        star.remove();
    }, 800);

});
// 🎹 AURORA: Generated Peaceful Music

const musicButton = document.getElementById("playMusic");
const musicStatus = document.getElementById("musicStatus");
const musicVolume = document.getElementById("musicVolume");

let audioContext;
let musicTimer;
let musicPlaying = false;
let noteIndex = 0;

// Peaceful, piano-like notes
const melody = [
    261.63, 329.63, 392.00, 329.63,
    293.66, 349.23, 440.00, 349.23,
    261.63, 329.63, 392.00, 523.25,
    440.00, 392.00, 329.63, 293.66
];

function playNote(frequency) {
    if (!audioContext || audioContext.state !== "running") return;

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    const volume = Number(musicVolume.value) / 100;

    oscillator.type = "sine";
    oscillator.frequency.value = frequency;

    const now = audioContext.currentTime;

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(
        volume * 0.12,
        now + 0.08
    );
    gain.gain.exponentialRampToValueAtTime(
        0.001,
        now + 1.4
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(now);
    oscillator.stop(now + 1.5);
}

function playMelody() {
    if (!musicPlaying) return;

    playNote(melody[noteIndex]);

    noteIndex = (noteIndex + 1) % melody.length;
}

musicButton.addEventListener("click", async function () {

    if (!audioContext) {
        const AudioContextClass =
            window.AudioContext || window.webkitAudioContext;

        if (!AudioContextClass) {
            musicStatus.textContent =
                "Sorry, your browser doesn't support generated audio.";
            return;
        }

        audioContext = new AudioContextClass();
    }

    if (musicPlaying) {
        musicPlaying = false;
        clearInterval(musicTimer);

        musicButton.textContent = "▶ Play Music";
        musicStatus.textContent = "Music paused 🌙";
        return;
    }

    try {
        await audioContext.resume();

        musicPlaying = true;
        noteIndex = 0;

        playMelody();
        musicTimer = setInterval(playMelody, 700);

        musicButton.textContent = "⏸ Pause Music";
        musicStatus.textContent = "Enjoy your peaceful universe ✨";

    } catch (error) {
        musicStatus.textContent = "Couldn't start the music. Try again.";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const welcomeScreen = document.getElementById("welcomeScreen");
    const enterUniverse = document.getElementById("enterUniverse");

    if (welcomeScreen && enterUniverse) {
        enterUniverse.addEventListener("click", function () {
            welcomeScreen.style.opacity = "0";
            welcomeScreen.style.visibility = "hidden";
            welcomeScreen.style.pointerEvents = "none";

            setTimeout(function () {
                welcomeScreen.style.display = "none";
            }, 1000);
        });
    } else {
        console.error("Welcome screen or Enter button was not found!");
    }
});
// Secret Star Surprise - Random Messages with Typing Animation
document.addEventListener("DOMContentLoaded", function () {
    const secretStar = document.getElementById("secretStar");
    const surpriseBox = document.getElementById("surpriseBox");
    const closeSurprise = document.getElementById("closeSurprise");
    const surpriseMessage = document.getElementById("surpriseMessage");

    const messages = [
        "✨ Even the smallest star can light up the darkest universe.",
        "💜 You are made of dreams, courage, and a little bit of magic.",
        "🌙 Somewhere in this universe, a beautiful surprise is waiting for you.",
        "🌠 Never stop exploring. Your story is still being written.",
        "🪐 Your ideas can create wonderful things in this huge universe."
    ];

    let lastMessageIndex = -1;
    let typingTimer = null;

    function stopTyping() {
        if (typingTimer !== null) {
            clearInterval(typingTimer);
            typingTimer = null;
        }
    }

    function typeMessage(message) {
        stopTyping();

        surpriseMessage.textContent = "";

        let letterIndex = 0;

        typingTimer = setInterval(function () {
            surpriseMessage.textContent += message.charAt(letterIndex);
            letterIndex++;

            if (letterIndex >= message.length) {
                stopTyping();
            }
        }, 40);
    }

    if (secretStar && surpriseBox && closeSurprise && surpriseMessage) {

        secretStar.addEventListener("click", function () {
            let randomIndex;

            // Avoid repeating the previous message
            do {
                randomIndex = Math.floor(Math.random() * messages.length);
            } while (randomIndex === lastMessageIndex);

            lastMessageIndex = randomIndex;

            surpriseBox.classList.add("show");

            // Type the selected message magically
            typeMessage(messages[randomIndex]);
        });

        closeSurprise.addEventListener("click", function () {
            stopTyping();
            surpriseBox.classList.remove("show");
        });

        // Close the surprise when clicking outside the box
        document.addEventListener("click", function (event) {
            if (
                surpriseBox.classList.contains("show") &&
                !surpriseBox.contains(event.target) &&
                event.target !== secretStar
            ) {
                stopTyping();
                surpriseBox.classList.remove("show");
            }
        });
    }
});
// PROJECT AURORA - Magical Sparkle Explosion

function setupAuroraSparkles() {
    const secretStar = document.getElementById("secretStar");

    if (!secretStar) {
        console.error("Secret Star button was not found!");
        return;
    }

    secretStar.addEventListener("click", function () {
        const starPosition = secretStar.getBoundingClientRect();

        const centerX = starPosition.left + starPosition.width / 2;
        const centerY = starPosition.top + starPosition.height / 2;

        const colors = [
            "#c084fc",
            "#f0abfc",
            "#93c5fd",
            "#ffffff",
            "#fde68a"
        ];

        const symbols = ["✦", "✧", "⋆", "✶"];

        for (let i = 0; i < 24; i++) {
            const sparkle = document.createElement("span");

            sparkle.className = "star-particle";

            sparkle.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            sparkle.style.color =
                colors[Math.floor(Math.random() * colors.length)];

            sparkle.style.left = (centerX - 12) + "px";
            sparkle.style.top = (centerY - 12) + "px";

            document.body.appendChild(sparkle);

            const angle = Math.random() * Math.PI * 2;
            const distance = 50 + Math.random() * 100;

            const moveX = Math.cos(angle) * distance;
            const moveY = Math.sin(angle) * distance;

            const rotation = 180 + Math.random() * 360;

            const animation = sparkle.animate(
                [
                    {
                        transform: "translate(0, 0) scale(0.2) rotate(0deg)",
                        opacity: 1,
                        offset: 0
                    },
                    {
                        transform:
                            `translate(${moveX * 0.5}px, ${moveY * 0.5}px) scale(1.2) rotate(120deg)`,
                        opacity: 1,
                        offset: 0.45
                    },
                    {
                        transform:
                            `translate(${moveX}px, ${moveY}px) scale(0.1) rotate(${rotation}deg)`,
                        opacity: 0,
                        offset: 1
                    }
                ],
                {
                    duration: 900,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );

            animation.onfinish = function () {
                sparkle.remove();
            };
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupAuroraSparkles);
} else {
    setupAuroraSparkles();
}
// PROJECT AURORA - Magical Planets

function setupAuroraPlanetMagic() {
    // Find planets that contain a data-message attribute
    const planets = document.querySelectorAll("[data-message]");

    if (planets.length === 0) {
        console.warn("No planets with data-message were found.");
        return;
    }

    const colors = [
        "#c084fc",
        "#f0abfc",
        "#93c5fd",
        "#ffffff",
        "#fde68a"
    ];

    const symbols = ["✦", "✧", "⋆", "✶"];

    planets.forEach(function (planet) {
        planet.addEventListener("click", function () {
            const rect = planet.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // 1. Make the planet glow
            planet.classList.add("planet-magic-glow");

            setTimeout(function () {
                planet.classList.remove("planet-magic-glow");
            }, 750);

            // 2. Create an expanding energy ring
            const ring = document.createElement("div");

            ring.className = "planet-pulse-ring";

            const ringSize = Math.max(rect.width, rect.height) + 20;

            ring.style.width = ringSize + "px";
            ring.style.height = ringSize + "px";
            ring.style.left = centerX + "px";
            ring.style.top = centerY + "px";

            document.body.appendChild(ring);

            ring.addEventListener("animationend", function () {
                ring.remove();
            });

            // 3. Release 16 tiny magical stars
            for (let i = 0; i < 16; i++) {
                const particle = document.createElement("span");

                particle.className = "planet-particle";

                particle.textContent =
                    symbols[Math.floor(Math.random() * symbols.length)];

                particle.style.color =
                    colors[Math.floor(Math.random() * colors.length)];

                particle.style.left = centerX + "px";
                particle.style.top = centerY + "px";

                document.body.appendChild(particle);

                const angle = Math.random() * Math.PI * 2;
                const distance = 35 + Math.random() * 75;

                const moveX = Math.cos(angle) * distance;
                const moveY = Math.sin(angle) * distance;

                const animation = particle.animate(
                    [
                        {
                            transform: "translate(-50%, -50%) scale(0.2)",
                            opacity: 1
                        },
                        {
                            transform:
                                `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) scale(1.2)`,
                            opacity: 1
                        },
                        {
                            transform:
                                `translate(calc(-50% + ${moveX * 1.3}px), calc(-50% + ${moveY * 1.3}px)) scale(0.1)`,
                            opacity: 0
                        }
                    ],
                    {
                        duration: 850 + Math.random() * 300,
                        easing: "ease-out",
                        fill: "forwards"
                    }
                );

                animation.onfinish = function () {
                    particle.remove();
                };
            }
        });
    });

    console.log("Aurora planet magic is ready!");
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        setupAuroraPlanetMagic
    );
} else {
    setupAuroraPlanetMagic();
}
// PROJECT AURORA - 3D Galaxy Mouse Effect

function setupAurora3DGalaxy() {

    // Create the background star layer
    const galaxyLayer = document.createElement("div");

    galaxyLayer.id = "auroraParallaxLayer";
    galaxyLayer.setAttribute("aria-hidden", "true");

    // Create 70 background stars
    for (let i = 0; i < 70; i++) {

        const star = document.createElement("span");

        star.className = "aurora-depth-star";

        // Mix different star shapes
        star.textContent = Math.random() > 0.5 ? "✦" : "✧";

        // Random positions
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        // Different star sizes
        star.style.fontSize = (5 + Math.random() * 10) + "px";

        // Different twinkling speeds
        star.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        star.style.animationDelay =
            (Math.random() * 3) + "s";

        galaxyLayer.appendChild(star);
    }

    // Add the stars behind the main website content
    document.body.appendChild(galaxyLayer);

    // Find the existing interactive planets
    const planets = document.querySelectorAll("[data-message]");

    // Prepare planets for smooth movement
    planets.forEach(function (planet, index) {
        planet.classList.add("planet-mouse-depth");

        // Give each planet a different depth
        planet.dataset.auroraDepth = 12 + (index % 5) * 6;
    });

    let animationFrame = null;

    // Move the galaxy and planets when the mouse moves
    document.addEventListener("mousemove", function (event) {

        if (animationFrame !== null) {
            cancelAnimationFrame(animationFrame);
        }

        animationFrame = requestAnimationFrame(function () {

            // Mouse position relative to the screen centre
            const mouseX =
                (event.clientX / window.innerWidth - 0.5) * 2;

            const mouseY =
                (event.clientY / window.innerHeight - 0.5) * 2;

            // Move the stars gently in the opposite direction
            galaxyLayer.style.translate =
                `${mouseX * -8}px ${mouseY * -8}px`;

            // Move each planet by a different amount
            planets.forEach(function (planet) {

                const depth = Number(planet.dataset.auroraDepth);

                const moveX = mouseX * depth;
                const moveY = mouseY * depth;

                // Individual translate preserves the existing transform
                planet.style.translate =
                    `${moveX}px ${moveY}px`;
            });

            animationFrame = null;
        });
    });

    // Reset the positions when the mouse leaves the window
    document.addEventListener("mouseleave", function () {

        galaxyLayer.style.translate = "0px 0px";

        planets.forEach(function (planet) {
            planet.style.translate = "0px 0px";
        });

    });

    console.log("PROJECT AURORA 3D Galaxy is ready!");
}

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        setupAurora3DGalaxy
    );

} else {

    setupAurora3DGalaxy();

}
// PROJECT AURORA - Day and Night Mode

function setupAuroraModeSwitch() {
    const modeButton = document.getElementById("auroraModeSwitch");

    if (!modeButton) {
        console.error("Aurora mode button was not found!");
        return;
    }

    function updateButton() {
        const isDayMode =
            document.body.classList.contains("aurora-day-mode");

        modeButton.textContent = isDayMode
            ? "🌙 Night Mode"
            : "☀️ Day Mode";

        modeButton.setAttribute(
            "aria-pressed",
            String(isDayMode)
        );
    }

    modeButton.addEventListener("click", function () {
        document.body.classList.toggle("aurora-day-mode");
        updateButton();
    });

    updateButton();
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        setupAuroraModeSwitch
    );
} else {
    setupAuroraModeSwitch();
}
// PROJECT AURORA - Transform Moon into Sun

function setupAuroraMoonSun() {
    const moon = document.querySelector(".moon");
    const modeButton = document.getElementById("auroraModeSwitch");

    if (!moon || !modeButton) {
        console.error("Moon or Day/Night button was not found!");
        return;
    }

    function updateMoonSun() {
        const isDayMode =
            document.body.classList.contains("aurora-day-mode");

        if (isDayMode) {
            moon.textContent = "☀️";
            moon.setAttribute("aria-label", "Sun");
        } else {
            moon.textContent = "🌙";
            moon.setAttribute("aria-label", "Moon");
        }
    }

    // Set the correct symbol when the website loads
    updateMoonSun();

    // Update the symbol when Day/Night Mode changes
    modeButton.addEventListener("click", updateMoonSun);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupAuroraMoonSun);
} else {
    setupAuroraMoonSun();
}
// PROJECT AURORA - Sunrise and Sunset Transitions

function setupAuroraSkyTransition() {
    const modeButton = document.getElementById("auroraModeSwitch");

    if (!modeButton) {
        console.error("Aurora mode button was not found!");
        return;
    }

    // Create the transition layer
    let transitionLayer = document.getElementById("auroraSkyTransition");

    if (!transitionLayer) {
        transitionLayer = document.createElement("div");
        transitionLayer.id = "auroraSkyTransition";

        transitionLayer.setAttribute("aria-hidden", "true");

        document.body.appendChild(transitionLayer);
    }

    let transitionTimer = null;

    modeButton.addEventListener("click", function () {
        const isDayMode =
            document.body.classList.contains("aurora-day-mode");

        // Choose the color of the incoming sky
        transitionLayer.style.background = isDayMode
            ? "radial-gradient(circle at 75% 20%, #fff2b2 0%, #8bd3ff 45%, #dbeafe 100%)"
            : "radial-gradient(circle at 75% 20%, #35205e 0%, #170b35 55%, #08051c 100%)";

        // Restart the transition animation
        transitionLayer.classList.remove("active");

        void transitionLayer.offsetWidth;

        transitionLayer.classList.add("active");

        // Animate the existing moon/sun
        const moon = document.querySelector(".moon");

        if (moon) {
            moon.classList.remove("aurora-celestial-morph");

            void moon.offsetWidth;

            moon.classList.add("aurora-celestial-morph");

            setTimeout(function () {
                moon.classList.remove("aurora-celestial-morph");
            }, 900);
        }

        // Clean up after the transition finishes
        clearTimeout(transitionTimer);

        transitionTimer = setTimeout(function () {
            transitionLayer.classList.remove("active");
        }, 1450);
    });

    console.log("Aurora sunrise and sunset transitions are ready!");
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        setupAuroraSkyTransition
    );
} else {
    setupAuroraSkyTransition();
}
// PROJECT AURORA - Sunset Mode Controller

function setupAuroraSunsetMode() {
    const sunsetButton = document.getElementById("auroraSunsetSwitch");
    const modeButton = document.getElementById("auroraModeSwitch");
    const moon = document.querySelector(".moon");

    if (!sunsetButton || !modeButton) {
        console.error("Aurora theme buttons were not found!");
        return;
    }

    // Reuse the existing transition overlay
    let transitionLayer = document.getElementById("auroraSkyTransition");

    function playSunsetTransition(isSunset) {
        if (!transitionLayer) return;

        transitionLayer.style.background = isSunset
            ? "linear-gradient(135deg, #f9a8d4, #ffb58a, #ba7bd1)"
            : "linear-gradient(135deg, #35205e, #170b35, #08051c)";

        transitionLayer.classList.remove("active");

        // Restart the CSS animation
        void transitionLayer.offsetWidth;

        transitionLayer.classList.add("active");

        setTimeout(function () {
            transitionLayer.classList.remove("active");
        }, 1450);
    }

    function updateThemeButton() {
        const isDay = document.body.classList.contains("aurora-day-mode");

        modeButton.textContent = isDay
            ? "🌙 Night Mode"
            : "☀️ Day Mode";

        modeButton.setAttribute("aria-pressed", String(isDay));
    }

    function setSunsetMoon(isSunset) {
        if (!moon) return;

        moon.textContent = isSunset ? "🌇" : "🌙";

        moon.setAttribute(
            "aria-label",
            isSunset ? "Sunset" : "Moon"
        );
    }

    // Click to enter or exit Sunset Mode
    sunsetButton.addEventListener("click", function () {
        const isAlreadySunset =
            document.body.classList.contains("aurora-sunset-mode");

        if (isAlreadySunset) {
            // Return to Night Mode
            document.body.classList.remove("aurora-sunset-mode");

            sunsetButton.textContent = "🌇 Sunset Mode";
            sunsetButton.setAttribute("aria-pressed", "false");

            setSunsetMoon(false);

            playSunsetTransition(false);
        } else {
            // Enter Sunset Mode
            document.body.classList.remove("aurora-day-mode");
            document.body.classList.add("aurora-sunset-mode");

            sunsetButton.textContent = "🌙 Exit Sunset";
            sunsetButton.setAttribute("aria-pressed", "true");

            setSunsetMoon(true);

            playSunsetTransition(true);
        }

        updateThemeButton();
    });

    // If the Day/Night button is clicked during sunset,
    // exit Sunset Mode and allow the existing switch to work.
    modeButton.addEventListener("click", function () {
        if (document.body.classList.contains("aurora-sunset-mode")) {
            document.body.classList.remove("aurora-sunset-mode");

            sunsetButton.textContent = "🌇 Sunset Mode";
            sunsetButton.setAttribute("aria-pressed", "false");

            updateThemeButton();
        }
    });

    console.log("Aurora Sunset Mode is ready!");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupAuroraSunsetMode);
} else {
    setupAuroraSunsetMode();
}