

// export const tsparticleConfig = {
//   fullScreen: {
//     enable: false,
//     zIndex: -1,
//   },
//   background: {
//     color: {
//       value: "#0d47a1",
//     },
//   },
//   fpsLimit: 120,
//   interactivity: {
//     events: {
//       onClick: {
//         enable: true,
//         mode: "push",
//       },
//       onHover: {
//         enable: true,
//         mode: "repulse",
//       },
//       resize: true,
//     },
//     modes: {
//       push: {
//         quantity: 4,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//       },
//     },
//   },
//   particles: {
//     color: {
//       value: "#ffffff",
//     },
//     links: {
//       color: "#ffffff",
//       distance: 150,
//       enable: true,
//       opacity: 0.5,
//       width: 1,
//     },
//     move: {
//       direction: "none",
//       enable: true,
//       outModes: {
//         default: "bounce",
//       },
//       random: false,
//       speed: 6,
//       straight: false,
//     },
//     number: {
//       density: {
//         enable: true,
//         area: 800,
//       },
//       value: 80,
//     },
//     opacity: {
//       value: 0.5,
//     },
//     shape: {
//       type: "circle",
//     },
//     size: {
//       value: { min: 1, max: 5 },
//     },
//   },
//   detectRetina: true,
// };





export const tsparticleConfig = {
  fullScreen: {
    enable: true,
    zIndex: 100,
  },
  fpsLimit: 80,
  particles: {
    number: {
      value: 0,
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 180,
        sync: true,
      },
    },
    shape: {
      type: "image",
      image: {
        src: "/Emoji_u1f64f.svg.png",
      },
    },
    opacity: {
      value: 1,
    },
    size: {
      value: 18,
      animation: {
        enable: true,
        speed: 15,
        minimumValue: 18,
        sync: false,
        startValue: "min",
        count: 1,
      },
    },
    move: {
      enable: true,
      speed: 15,
      direction: "none",
      random: true,
      straight: false,
      // angle: {
      //   offset: 100,
      //   value: 50,
      // },
      random: false,
      straight: false,
      outMode: "destroy",
      gravity: {
        enable: true,
        acceleration: 30,
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      direction: "random",
      move: true,
      animation: {
        enable: true,
        speed: 100,
      },
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 6,
      },
    },
  },
  retina_detect: true,
};
