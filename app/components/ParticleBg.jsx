"use client";

import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { tsparticleConfig } from "../tools/tsparticleConfig";





const ParticleBg = () => {
  async function loadParticles(main) {
    await loadFull(main);
  }
  return (
    <>
      <Particles
        id="tsparticles"
        init={loadParticles}
        options={tsparticleConfig}
      />

    </>
  );
};

export default ParticleBg;
