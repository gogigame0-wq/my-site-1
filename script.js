const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/webgl-fluid@0.0.5/dist/webgl-fluid.min.js";

script.onload = () => {
  const canvas = document.getElementById("canvas");

  webGLFluidEnhanced.simulation(canvas, {
    SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 1024,
    DENSITY_DISSIPATION: 0.97,
    VELOCITY_DISSIPATION: 0.98,
    PRESSURE: 0.8,
    CURL: 25,
    SPLAT_RADIUS: 0.3,
    COLORFUL: true,
  });
};

document.body.appendChild(script);
