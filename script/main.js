// Animation Timeline
const animationTimeline = () => {
  function playBackgroundMusic1() {
    setTimeout(function() {
      var audio = document.getElementById("backgroundMusic1");
      audio.play();
    }, 100); // Adjust the delay in milliseconds (e.g., 5000 for 5 seconds)
  }

  function playBackgroundMusic2() {
    setTimeout(function() {
      var audio2 = document.getElementById("backgroundMusic2");
      var audio1 = document.getElementById("backgroundMusic1");
      audio1.pause();
      audio2.play();
    }, 71000); // Adjust the delay in milliseconds (e.g., 5000 for 5 seconds)
  }

  playBackgroundMusic1();
  playBackgroundMusic2();

  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];


  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();



  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 2, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 2, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      1,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.8, {
      backgroundColor: "red"
    })
    .to( 
      ".four",
      1,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=1"
    )
    .from(".idea-1", 5, ideaTextTrans)
    .to(".idea-1", 4, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 3, ideaTextTrans)
    .to(".idea-2", 4, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 4, ideaTextTrans)
    .to(".idea-3 strong", 3, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 3, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 4, ideaTextTrans)
    .to(".idea-4", 3, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      2.5,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      2,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      2,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      2,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      1,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".mahi-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -30,
      y: 100,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      2,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      2,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
    .to(".six", 2, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      2,
      {
        rotation: 90
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      Object.keys(data).map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};


// Wrap your code in the event listener for 'DOMContentLoaded'
document.addEventListener("DOMContentLoaded", function () {
  document.getElementsByClassName("container")[0].style.display = "none";

  document.getElementById("start-button").addEventListener("click", () => {
    // Hide the starting screen
    document.getElementById("start-screen").style.display = "none";
    document.getElementsByClassName("container")[0].style.display = "block";
  
    // Run fetch and animation in sequence
    resolveFetch().then(function () {
      animationTimeline();
    });
  });
});
