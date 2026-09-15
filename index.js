const logo = document.querySelector('.logo');
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {if (window.scrollY > window.innerHeight * 0.8) {
    navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

//responsive nav 
const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>{
navMenu.classList.toggle("active");
if(navMenu.classList.contains("active")){
menuBtn.innerHTML="✕";
}else{
menuBtn.innerHTML="☰";
}

});
//automatically close menu ,when any option is clicked
document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

menuBtn.innerHTML="☰";

});

});


// Tooltip 
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
tooltip.innerText = "Nice to see you!!";
document.body.appendChild(tooltip);
tooltip.style.position = "absolute";
tooltip.style.zIndex = "9999";
tooltip.style.display = "none";

// Hover start
logo.addEventListener('mouseover', () => {
  logo.style.transform = 'translateY(-5px) scale(1.1)';
  logo.style.transition = 'transform 0.3s ease';

  const rect = logo.getBoundingClientRect();
  tooltip.style.left = rect.right + 10 + 'px';
 tooltip.style.top = window.scrollY + rect.top + 'px';
 tooltip.style.left = window.scrollX + rect.right + 10 + 'px';
  tooltip.style.display = 'block';
  console.log("hover working");
});

// Hover end
logo.addEventListener('mouseout', () => {
  logo.style.transform = 'translateY(0) scale(1)';
  tooltip.style.display = 'none';
});



/// ==========================================
// HOME PAGE ANIMATION — AFTER LOADER
// ==========================================

window.addEventListener("load", () => {

    const elements = [
        document.querySelector(".welcome-wrapper"),
        document.querySelector("#hero-heading"),
        document.querySelector("#hero-subheading"),
        document.querySelector(".resume-btn"),
        document.querySelector(".stats-container")
    ];

    // Hide Home content immediately
    elements.forEach(el => {
        if (!el) return;

        el.style.opacity = "0";
        el.style.transform = "translateY(-50px)";
    });

    // Start Home animation AFTER loading screen disappears
    setTimeout(() => {

        elements.forEach((el, index) => {

            if (!el) return;

            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, index * 400);

        });

    }, 4100); // 3 sec loader + 1 sec fade-out + small buffer

});
//icon glow

document.querySelectorAll(".stat-box").forEach(box => {

    const circle = box.querySelector(".icon-circle");
    const icon = circle.querySelector("i");

    box.addEventListener("mouseenter", () => {

        circle.style.background =
            "linear-gradient(135deg,#00d9ff,#0486f7,#00d9ff)";

        circle.style.transform = "scale(1.15)";

        circle.style.boxShadow = `
            0 0 20px rgba(116, 249, 236, 0.7),
            0 0 40px rgba(0,217,255,.6)
        `;

        icon.style.color = "#fff";
    });

    box.addEventListener("mouseleave", () => {

        circle.style.background = "transparent";
        circle.style.transform = "scale(1)";
        circle.style.boxShadow = "none";

        icon.style.color = "#00d9ff";
    });

});









//ABout section

// Select all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// triggers elemnt for type writter effect

const aboutSection = document.querySelector("#about");
const elements = document.querySelectorAll("#about .reveal-left");
let lastScrollTop = 0;
let triggered = false;
window.addEventListener("scroll", () => {
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (
    scrollTop > lastScrollTop &&
    !triggered &&
    aboutSection.getBoundingClientRect().top < window.innerHeight * 0.7
  ) {
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 250);
    });
    triggered = true;
  }
  lastScrollTop = scrollTop;
});

//about paragraph animation
const lines = document.querySelectorAll(".about-content span");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }else{
            entry.target.classList.remove("visible");
        }
    });
},{
    threshold:0.7
});
lines.forEach(line=>observer.observe(line));

//about rectangular box animation
const neonBox = document.querySelector(".neon-box");

neonBox.addEventListener("mousemove", (e) => {

    const rect = neonBox.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const moveAmount = 40;

    if (x > rect.width / 2) {
        // Mouse right → box left
        neonBox.style.transform =
            `translateY(-50%) translateX(-${moveAmount}px)`;
    } else {
        // Mouse left → box right
        neonBox.style.transform =
            `translateY(-50%) translateX(${moveAmount}px)`;
    }
});

neonBox.addEventListener("mouseleave", () => {

    neonBox.style.transform =
        "translateY(-50%) translateX(0)";

});












//skill section---=================
const skillsSection = document.querySelector("#skills");
const skillsElements = document.querySelectorAll(".reveal-left-skills");

let skillsTriggered = false;

window.addEventListener("scroll", () => {

    if (
        !skillsTriggered &&
        skillsSection.getBoundingClientRect().top < window.innerHeight * 0.7
    ) {

        skillsElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add("show");
            }, index * 250);
        });

        skillsTriggered = true;
    }

});

// ==========================================
// SKILL CARD DECK
// ==========================================

const skillCards = document.querySelectorAll("#skills .tech-card");
const skillTitle = document.querySelector("#skillTitle");
const skillDesc = document.querySelector("#skillDesc");
const skillLabel = document.querySelector(".skill-label");
const skillDetails = document.querySelector(".skill-details");
const skillsArea = document.querySelector(".skills-scroll-area");
const skillCurrent = document.querySelector("#skillCurrent");

// ==========================================
// SKILL INFORMATION
// ==========================================

const skillData = [

    {
        label: "MARKUP",
        title: "HTML5",
        desc: "Semantic, accessible and responsive layouts using modern HTML standards and best practices."
    },

    {
        label: "STYLING",
        title: "CSS3",
        desc: "Modern styling, responsive layouts, animations and visually engaging interfaces."
    },

    {
        label: "LANGUAGE",
        title: "JavaScript",
        desc: "Interactive interfaces, DOM manipulation and dynamic web experiences."
    },

    {
        label: "FRONTEND",
        title: "React",
        desc: "Reusable components and dynamic user interfaces for modern web applications."
    },

    {
        label: "UTILITY CSS",
        title: "Tailwind CSS",
        desc: "Utility-first styling for creating fast, responsive and consistent interfaces."
    },

    {
        label: "UI FRAMEWORK",
        title: "Bootstrap",
        desc: "Responsive layouts and reusable components for efficient frontend development."
    }

];
let skillIndex = 0;


function updateSkillText() {

    skillDetails.classList.add("changing");

    setTimeout(() => {

        skillLabel.textContent =
    skillData[skillIndex].label;

        skillTitle.textContent =
            skillData[skillIndex].title;

        skillDesc.textContent =
            skillData[skillIndex].desc;

          skillCurrent.textContent =
    String(skillIndex + 1).padStart(2, "0"); 

        skillDetails.classList.remove("changing");

    }, 250);
}

// ==========================================
// UPDATE CARD POSITIONS
// ==========================================

function updateSkillCards() {

    const totalCards = skillCards.length;


    skillCards.forEach((card, i) => {

        card.classList.remove(
            "active",
            "second",
            "third",
            "hidden"
        );

        const position =
            (i - skillIndex + totalCards) % totalCards;

        if (position === 0) {
            card.classList.add("active");

        }
        else if (position === 1) {
            card.classList.add("second");
        }
        else if (position === 2) {
            card.classList.add("third");
        }
        else {
            card.classList.add("hidden");
        }

    });
    updateSkillText();

}

updateSkillCards();


function updateSkillFromScroll() {

    const rect = skillsArea.getBoundingClientRect();

    const totalScroll =
        skillsArea.offsetHeight - window.innerHeight;

    if (totalScroll <= 0) return;


    // Current scroll position inside Skills
    const currentScroll =
        Math.max(0, -rect.top);

    // into equal card sections
    const sectionSize =
        totalScroll / skillCards.length;

    let newIndex =
        Math.floor(currentScroll / sectionSize);


    // Keep index between 0 and last card
    newIndex =
        Math.max(
            0,
            Math.min(
                newIndex,
                skillCards.length - 1
            )
        );

    if (newIndex !== skillIndex) {

        skillIndex = newIndex;

        updateSkillCards();

    }
}


// ==========================================
// NORMAL SCROLL===========================

window.addEventListener(
    "scroll",
    updateSkillFromScroll,
    { passive: true }
);

// ==========================================
// KEYBOARD SUPPORT
// ==========================================

window.addEventListener("keydown", (event) => {

    const keys = [
        "ArrowDown",
        "ArrowUp",
        "PageDown",
        "PageUp",
        "Home",
        "End"
    ];

    if (!keys.includes(event.key)) return;

    /*
     * Wait until browser finishes
     * moving the page.
     */

    setTimeout(() => {

        updateSkillFromScroll();

    }, 50);

});


// ==========================================
// INITIALIZE
// ==========================================

updateSkillFromScroll();

skillCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 10;
        const rotateX = ((centerY - y) / centerY) * 10;

        card.style.setProperty("--tiltX", `${rotateX}deg`);
        card.style.setProperty("--tiltY", `${rotateY}deg`);

    });

    card.addEventListener("mouseleave", () => {

        card.style.setProperty("--tiltX", "0deg");
        card.style.setProperty("--tiltY", "0deg");

    });

});















// =====================================================
// EXPERIENCE — SCROLL CONTROLLED TIMELINE
// =====================================================

const experienceSection = document.querySelector("#experience");
const experienceTimeline = document.querySelector(".experience-timeline");
const timelineGlow = document.querySelector(".timeline-glow");
const experienceItems = document.querySelectorAll(".experience-item");

if (
  experienceSection &&
  experienceTimeline &&
  timelineGlow &&
  experienceItems.length
) {

  function updateExperience() {

    const sectionRect = experienceSection.getBoundingClientRect();
    const timelineRect = experienceTimeline.getBoundingClientRect();

    const viewportHeight = window.innerHeight;

    /*
      The timeline animation starts when the top of the
      timeline reaches this point on the screen.
    */

    const startTrigger = viewportHeight * 0.70;

    /*
      How much scrolling is required to travel through
      the entire timeline.
    */

    const scrollDistance = timelineRect.height + viewportHeight * 0.5;

    /*
      How far the timeline has travelled.
    */

    let travelled = startTrigger - timelineRect.top;

    /*
      Convert travelled distance into 0 → 1 progress.
    */

    let progress = travelled / scrollDistance;

    progress = Math.max(0, Math.min(1, progress));


    // =================================================
    // GLOWING LINE
    // =================================================

    const lineHeight = progress * timelineRect.height;

    timelineGlow.style.height = `${lineHeight}px`;


    // =================================================
    // DESTINATIONS
    // =================================================

    experienceItems.forEach((item) => {

      const dot = item.querySelector(".experience-dot");

      if (!dot) return;

      const dotRect = dot.getBoundingClientRect();

      /*
        Position of the destination dot inside
        the timeline.
      */

      const destination =
        dotRect.top -
        timelineRect.top +
        dotRect.height / 2;


      /*
        Current position of the glowing line.
      */

      const currentLinePosition = lineHeight;


      // -----------------------------------------------
      // DESTINATION REACHED
      // -----------------------------------------------

      if (currentLinePosition >= destination) {

        /*
           destination glow.
        */

        item.classList.add("reached");

        /*
          Then reveal the card.
        */

        item.classList.add("active");

      }


      // -----------------------------------------------
      // DESTINATION NOT REACHED
      // -----------------------------------------------

      else {

        item.classList.remove("reached");
        item.classList.remove("active");

      }

    });

  }


  // ===================================================
  // SCROLL
  // ===================================================

  window.addEventListener(
    "scroll",
    updateExperience,
    { passive: true }
  );


  // ===================================================
  // RESIZE
  // ===================================================

  window.addEventListener(
    "resize",
    updateExperience
  );


  // Initial calculation
  updateExperience();

}















// ===================================================
  // contact section
  // ===================================================

const contactFormBox = document.querySelector(".contact-form-box");

if (contactFormBox) {
  contactFormBox.addEventListener("mousemove", (e) => {
    const rect = contactFormBox.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    contactFormBox.style.setProperty("--mouse-x", `${x}px`);
    contactFormBox.style.setProperty("--mouse-y", `${y}px`);
  });

  contactFormBox.addEventListener("mouseleave", () => {
    contactFormBox.style.setProperty("--mouse-x", "50%");
    contactFormBox.style.setProperty("--mouse-y", "50%");
  });
}









/* =========================================
   LUMINOUS CURSOR
========================================= */

const luminousCursor = document.querySelector(".cursor-glow");

if (luminousCursor) {

    let lx = window.innerWidth / 2;
    let ly = window.innerHeight / 2;

    let targetLX = lx;
    let targetLY = ly;

    let moveVX = 0;
    let moveVY = 0;

    let oldLX = lx;
    let oldLY = ly;


    // Mouse movement
    document.addEventListener("mousemove", function (event) {

        targetLX = event.clientX;
        targetLY = event.clientY;

        moveVX = targetLX - oldLX;
        moveVY = targetLY - oldLY;

        oldLX = targetLX;
        oldLY = targetLY;

    });


    // Smooth movement
    function luminousCursorAnimation() {

        lx += (targetLX - lx) * 0.15;
        ly += (targetLY - ly) * 0.15;

        const movementSpeed = Math.min(
            Math.sqrt(
                moveVX * moveVX +
                moveVY * moveVY
            ),
            12
        );

        const movementAngle = Math.atan2(moveVY, moveVX);

        const stretchHorizontal = 1 + movementSpeed * 0.012;
        const stretchVertical = 1 - movementSpeed * 0.004;


        luminousCursor.style.left = lx + "px";
        luminousCursor.style.top = ly + "px";

        luminousCursor.style.transform =
            "translate(-50%, -50%) " +
            "rotate(" + movementAngle + "rad) " +
            "scale(" +
            stretchHorizontal +
            ", " +
            stretchVertical +
            ")";


        moveVX *= 0.86;
        moveVY *= 0.86;


        requestAnimationFrame(luminousCursorAnimation);
    }


    luminousCursorAnimation();


    // Hover effect
    const cursorTargets = document.querySelectorAll(
        "a, button, .project-card, .skill-card, .neon-box"
    );


    cursorTargets.forEach(function (target) {

        target.addEventListener("mouseenter", function () {

            luminousCursor.style.width = "48px";
            luminousCursor.style.height = "48px";

        });


        target.addEventListener("mouseleave", function () {

            luminousCursor.style.width = "50px";
            luminousCursor.style.height = "50px";

        });

    });


    // Hide outside page
    document.addEventListener("mouseleave", function () {
        luminousCursor.style.opacity = "0";
    });


    document.addEventListener("mouseenter", function () {
        luminousCursor.style.opacity = "0.9";
    });

}
/* =========================================
   PREMIUM LOADER
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const loadingScreen =
        document.getElementById("loading-screen");

    if (!loadingScreen) return;

    document.body.style.overflow = "hidden";


    setTimeout(function () {

        loadingScreen.classList.add(
            "loader-finished"
        );

        setTimeout(function () {
            document.body.style.overflow = "";
        }, 1000);

    }, 3000);

});









document.addEventListener("DOMContentLoaded", function () {

    const ball = document.querySelector(".energy-core");

    if (!ball) return;

    function bounceGlow(strength = 1) {

    const glow = document.querySelector(".bounce-glow");

    if (!glow) return;

    glow.animate(
        [
            {
                transform:
                    "translate(-50%, 25px) scale(0.4)",
                opacity: 0
            },

            {
                transform:
                    `translate(-50%, 25px) scale(${1.4 * strength})`,
                opacity: 0.8 * strength
            },

            {
                transform:
                    `translate(-50%, 25px) scale(${2.8 * strength})`,
                opacity: 0
            }
        ],
        {
            duration: 500,
            easing: "cubic-bezier(.22,.61,.36,1)"
        }
    );
}
    /* =========================================
       WAIT FOR THE INITIAL FALL
    ========================================= */

    setTimeout(() => {


        /* =====================================
           FIRST IMPACT + BOUNCE
        ===================================== */

        ball.animate(
            [
                {
                    transform: "translateY(0) scale(1, 1)"
                },

                /* Soft impact / squash */
                {
                    transform: "translateY(4px) scale(1.20, .80)"
                },

                /* Release / stretch */
                {
                    transform: "translateY(-70px) scale(.94, 1.06)"
                }
            ],
            {
                duration: 650,
                easing: "cubic-bezier(.25, .8, .25, 1)",
                fill: "forwards"
            }
        );


        /* =====================================
           SECOND IMPACT + BOUNCE
        ===================================== */

        setTimeout(() => {

            ball.animate(
                [
                    {
                        transform:
                            "translateY(-70px) scale(.94, 1.06)"
                    },

                    /* Second squash — softer */
                    {
                        transform:
                            "translateY(3px) scale(1.12, .88)"
                    },

                    /* Release */
                    {
                        transform:
                            "translateY(-36px) scale(.97, 1.03)"
                    }
                ],
                {
                    duration: 520,
                    easing: "cubic-bezier(.25, .8, .25, 1)",
                    fill: "forwards"
                }
            );

        }, 800);


        /* =====================================
           THIRD IMPACT + SMALL BOUNCE
        ===================================== */

        setTimeout(() => {

            ball.animate(
                [
                    {
                        transform:
                            "translateY(-36px) scale(.97, 1.03)"
                    },

                    /* Third squash — very subtle */
                    {
                        transform:
                            "translateY(2px) scale(1.07, .93)"
                    },

                    /* Small release */
                    {
                        transform:
                            "translateY(-14px) scale(.99, 1.01)"
                    }
                ],
                {
                    duration: 430,
                    easing: "cubic-bezier(.25, .8, .25, 1)",
                    fill: "forwards"
                }
            );

        }, 1400);


        /* =====================================
           FINAL SETTLE
        ===================================== */

        setTimeout(() => {

            ball.animate(
                [
                    {
                        transform:
                            "translateY(-14px) scale(.99, 1.01)"
                    },

                    {
                        transform:
                            "translateY(2px) scale(1.035, .965)"
                    },

                    {
                        transform:
                            "translateY(0) scale(1, 1)"
                    }
                ],
                {
                    duration: 350,
                    easing: "cubic-bezier(.34, 1.56, .64, 1)",
                    fill: "forwards"
                }
            );

        }, 1600);

    }, 1150);

});
setTimeout(() => {

    const status = document.querySelector(".loader-status");

    if (!status) return;

    status.style.opacity = "0";
    status.style.transform = "translateY(-5px)";

    setTimeout(() => {

        status.textContent = "WELCOME";

        status.classList.add("welcome");

        status.style.transform = "translateY(5px)";

        requestAnimationFrame(() => {
            status.style.opacity = "1";
            status.style.transform = "translateY(0)";
        });

    }, 500);

},1650);










