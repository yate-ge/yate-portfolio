// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-hello-world",
        
          title: "Hello World",
        
        description: "My first blog post.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hello-world/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-website-is-live-welcome-to-my-personal-academic-site",
          title: 'Website is live! Welcome to my personal academic site.',
          description: "",
          section: "News",},{id: "projects-aoi-planet",
          title: 'AOI Planet',
          description: "AOI Planet is a motion-sensing game designed for overweight children and their parents. When playing, kids actually exercise while learning how to eat healthier. It is not only an indoor game, but outdoor activities are also recorded through a wearable device. The project includes a motion-sensing game built with Unity, a companion wearable device powered by Arduino 101 with IMU and machine learning modules for motion recognition, and a parent-child interaction system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aoiplanet/";
            },},{id: "projects-cocobo",
          title: 'Cocobo',
          description: "Cocobo is an LLM-powered end-user programming system for service robot task customization. Drawing on the theory of multiple representations in end-user development, the system leverages LLMs&#39; code generation, general knowledge, and knowledge representation capabilities to let non-technical users create and modify robot programs through natural language, while providing interactive flowcharts for visual verification and MagicDebug for node-level debugging. A user study with 16 participants validated that non-programmers can independently create and refine robot service programs. I led the system design, development, and paper writing. The work was published at IEEE VL/HCC, the flagship conference in visual languages and end-user development.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cocobo/";
            },},{id: "projects-cyber-ring-赛博回环",
          title: 'Cyber Ring / 赛博回环',
          description: "Cyber Ring is an independent VR game inspired by the classic street ring-toss game. It reimagines the familiar carnival experience in a cyberpunk-styled virtual space, where players use VR controllers to toss glowing neon rings onto targets in an immersive environment. I independently designed and developed the entire project using Unity. The game was showcased at street pop-up events and at Maker Faire, attracting players of all ages.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cyberring/";
            },},{id: "projects-gencomui",
          title: 'GenComUI',
          description: "GenComUI explores generative visual aids as a communication medium to support task-oriented human-robot interaction. Powered by LLMs, the system dynamically generates contextual visual aids (map annotations, path indicators, and animations) on the robot&#39;s screen to complement verbal task communication and facilitate end-user robot programming. A formative study of human visual communication practices informed the design, and a within-subjects user study (n=20) demonstrated that generative visual aids enhance communication quality by providing continuous visual feedback and supporting iterative task refinement. I led the project&#39;s system design, development, and paper writing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gencomui/";
            },},{id: "projects-genfaceui",
          title: 'GenFaceUI',
          description: "GenFaceUI explores generative personalized facial expression interfaces for intelligent agents from a meta-design perspective. Built on the GPFEI framework, it helps designers create facial templates, apply semantic tags, define context-expression rules, and iteratively test run-time generation within coherent, rule-bounded design spaces. A qualitative study with 12 designers showed gains in controllability and consistency while also revealing the need for better visual structure and lightweight explanations; I led the project&#39;s system design, prototype development, and paper writing. An early version was presented as a poster at UIST 2025, and the full research was published at CHI 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/genfaceui/";
            },},{id: "projects-hypercard",
          title: 'Hypercard',
          description: "Hypercard is a tangible programming education system that combines board games, augmented reality, and tangible programming language to teach computational thinking in a spatial, embodied way. Children place hexagonal programming cards on a table, the mobile app recognizes and configures each card, then renders interactive AR scenes on top. The system supports multiple input modalities (voice, face recognition, screen gestures, UI widgets) and seven card types (operating, user input, logic, variable, signal, object, AI). Built with Unity and Vuforia, prototypes demonstrate scenarios including voice-controlled lighting, multiplayer AR golf, facial expression weather control, and guided programming challenges.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hypercard/";
            },},{id: "projects-jokeasy",
          title: 'Jokeasy',
          description: "Jokeasy is a search-enabled human-AI collaboration tool for thematic joke writing. It integrates a dual-role LLM agent as both material scout and prototype writer, providing a visual canvas where retrieved web content becomes editable inspiration blocks within a multistage workflow. A qualitative study with 18 participants (hobbyists, professional comedians, and HCI/AI specialists) showed that the approach enriches ideation while preserving author agency. The interactive prototype was built as a Figma widget plugin for rapid testing. I led research design, system development, and paper writing as a TA for a graduate course on Human-AI Collaborative Intelligence (人机智能协同).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jokeasy/";
            },},{id: "projects-ninja",
          title: 'Ninja',
          description: "Ninja is a smart phone companion that transforms your phone from a tool into a friend. Inspired by the ninja&#39;s spirit of endurance and perseverance, the device uses the Pomodoro technique to help users stay focused while building an emotional bond through anthropomorphic expressions, eye contact via face tracking, and contactless gesture interaction. The phone becomes Ninja&#39;s face, displayed on a 3D-printed body with servo-driven movements.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ninja/";
            },},{id: "projects-visual-analytics-for-service-robot-personalized-knowledge-graphs",
          title: 'Visual Analytics for Service Robot Personalized Knowledge Graphs',
          description: "This project explores user-in-the-loop visual analytics for building and refining personalized knowledge graphs that support service robots in individualized environments. I participated in the visualization interface and interaction design, focusing on how to visually represent working knowledge graphs so that users can inspect potential errors, input domain knowledge, and iteratively refine the graph.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robot-kg/";
            },},{id: "projects-virtual-design-platform-for-service-robot",
          title: 'Virtual Design Platform for Service Robot',
          description: "A simulation design platform for service robots, developed as my master&#39;s thesis project. The platform leverages virtual reality, mixed reality, and component-based prototyping to support three key phases of service robot interaction design: conceptual character design through virtual bodystorming, interface and flow design through a visual interaction prototype builder, and usability testing through mixed-reality user simulation. Built with Unity and tested with designers, the platform lowers the cost of robot prototyping and enables rapid iteration across the full design cycle. Part of this work was published at AHFE 2023.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vibo/";
            },},{id: "projects-智启新生-wisdom-awakens",
          title: '智启新生 / Wisdom Awakens',
          description: "Opening performance of the 2025 World Design Cities Conference, fusing interactive lighting, embodied intelligence, and new media visuals. The show illustrates a progression from human creativity through machine assistance to algorithm generation and embodied perception. As a member of the robot performance development and execution team, I was responsible for robot motion choreography and development.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zhiqixinsheng/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yate-ge", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/geyate", "_blank");
        },
      },];
