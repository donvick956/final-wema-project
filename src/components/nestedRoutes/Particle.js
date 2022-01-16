import React from "react";
// import Particles from "react-particles-js"
import Particles from "react-tsparticles";
import particlesConfig from "./ParticleConfig";

export default function ParticleBackground() {
    return (
        <Particles params={ particlesConfig }></Particles>
    );
}