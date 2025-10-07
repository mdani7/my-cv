import Header from "./components/Header";
import Footer from "./components/Footer";
import ExpandableCard from "./components/ExpandableCard";


export default function App() {
  const Star = ({ color = "transparent", size = 25, outline = "white" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      stroke={outline}
      strokeWidth="2"
      strokeLinejoin="round"
      style={{ transform: "translateY(-1px)" }}
    >
      <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
    </svg>
  );

  const Tool = () => (
    <svg
      height="32"
      viewBox="0 0 376.846 376.846"
      width="32"
      fill="white"
      style={{ transform: "translateY(4px)" }}>
      <g>
        <path d="M364.966,372.743c2.382-2.39,4.316-4.324,4.316-4.324l4.316-4.324   c2.382-2.398-1.691-13.453-9.104-24.695l-19.013-28.865c-7.413-11.242-19.127-21.565-26.174-23.044   c-7.047-1.488-12.762-2.691-12.762-2.691l-57.298-57.274L228.389,248.4l57.25,57.282l2.707,12.762   c1.488,7.039,11.819,18.769,23.061,26.174l28.881,19.037C351.529,371.06,362.584,375.133,364.966,372.743z" />
        <path d="M13.608,74.197l85.139,85.139l10.632,10.608c0.244,0.26,0.48,0.398,0.715,0.642l14.062-14.071   L23.728,56.086c-2.447-2.422-2.447-6.397,0-8.795c2.422-2.455,6.34-2.455,8.795,0l100.396,100.453l15.664-15.696L48.154,31.635   c-2.455-2.43-2.455-6.365,0-8.795c2.422-2.422,6.365-2.422,8.763,0l100.477,100.477l14.038-14.087   c-0.211-0.244-0.366-0.504-0.585-0.74l-11.161-11.177l-84.594-84.57c-16.972-17.005-44.52-16.981-61.485,0   C-3.389,29.709-3.389,57.224,13.608,74.197z" />
        <path d="M375.728,81.651c-1.024-13.428-12.892-16.038-22.41-6.519l-33.262,33.27   c-7.722,7.779-20.378,7.755-28.125,0l-21.549-21.524c-7.803-7.844-7.779-20.46-0.024-28.247l34.392-34.359   c9.527-9.519,7.112-21.817-6.259-23.41c-25.865-3.089-52.82,5.275-72.678,25.117c-15.127,15.152-23.573,34.473-25.361,54.258   c-0.715,7.999-0.341,16.07,1.097,24.004L16.965,288.84c-9.746,9.754-15.127,22.703-15.127,36.497   c0,13.762,5.381,26.694,15.103,36.432c20.11,20.102,52.819,20.102,72.962,0c0,0,132.683-132.666,186.413-186.461   c8.446,1.154,16.997,1.073,25.41-0.26c17.769-2.78,34.847-10.925,48.56-24.613C369.152,131.568,377.614,106.296,375.728,81.651z    M70.857,345.91c-10.551,10.494-27.523,10.494-38.042-0.024c-10.47-10.445-10.494-27.499,0.024-37.969   c10.494-10.47,27.466-10.445,37.985,0C81.295,318.387,81.295,335.441,70.857,345.91z" />
      </g>
    </svg>
  );

  const Education = () => (
    <svg
      height="32"
      viewBox="0 0 24 24"
      width="32"
      fill="white"
      style={{ transform: "translateY(4px)" }}>
      <path d="m24 8v12h-2v-10.71l-7.88 5.082a3.892 3.892 0 0 1 -4.24 0l-9.88-6.372 9.88-6.373a3.9 3.9 0 0 1 4.24 0zm-12 9a5.894 5.894 0 0 1 -3.2-.947l-4.8-3.093v7.454l.293.293c.094.093 2.354 2.293 7.707 2.293s7.613-2.2 7.707-2.293l.293-.293v-7.454l-4.8 3.093a5.894 5.894 0 0 1 -3.2.947z" />
    </svg>
  );

  const User = () => (
    <svg
      viewBox="0 0 24 24"
      width="32"
      fill="white"
      style={{ transform: "translateY(4px)" }}
      height="32">
      <path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z" />
      <circle cx="12" cy="6" r="6" />
    </svg>
  );

  const World = () => (
    <svg
      viewBox="0 0 24 24"
      width="32"
      fill="white"
      style={{ transform: "translateY(4px)" }}
      height="32">
      <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.534,13.511l-2.241,4.856c-.178.386-.564.633-.989.633h-.213c-.602,0-1.09-.488-1.09-1.09v-2.365c0-.349-.139-.684-.386-.931l-1.19-1.19c-.272-.272-.425-.641-.425-1.025v-.963c0-.279-.111-.547-.309-.745l-.373-.373c-.204-.204-.48-.318-.768-.318h-1.949c-.384,0-.751-.157-1.016-.436l-1.658-1.743c1.587-3.43,5.052-5.821,9.073-5.821.206,0,.407.019.609.031-.533.808-1.016,1.551-1.309,2.005-.185.285-.189.648-.014.94l.837,1.396c.222.369.163.842-.141,1.147l-.003.003c-.286.286-.722.357-1.084.176l-.88-.44c-.307-.154-.678-.093-.921.149l-.529.529c-.312.312-.312.817,0,1.128l.592.592c.22.22.519.344.83.344h1.431c.381,0,.754.107,1.077.309l2.562,1.601c.539.337.744,1.023.477,1.601Zm3.99-1.251c-.332-.165-.575-.467-.665-.827l-.627-2.507c-.137-.548.106-1.121.595-1.403l1.583-.913c1.002,1.557,1.59,3.405,1.59,5.39,0,.488-.047.963-.115,1.432l-2.362-1.172Z" />
    </svg>
  );

  const Work = () => (
    <svg
      viewBox="0 0 24 24"
      width="32"
      fill="white"
      style={{ transform: "translateY(4px)" }}
      height="32">
      <polygon points="13 14 13 16 11 16 11 14 0 14 0 24 24 24 24 14 13 14" />
      <path d="M24,12V7a3,3,0,0,0-3-3H18V2a2,2,0,0,0-2-2H8A2,2,0,0,0,6,2V4H3A3,3,0,0,0,0,7v5ZM8,2h8V4H8Z" />
    </svg>
  );

  const Training = () => (
    <svg
      viewBox="0 0 24 24"
      width="32"
      fill="white"
      style={{ transform: "translateY(4px)" }}
      height="32">
      <path d="m23.121 7.122-2.414-2.415 2-2-1.414-1.414-2 2-2.414-2.414a3 3 0 0 0 -4.243 0l-2.828 2.828 4.535 4.536-6.1 6.1-4.536-4.535-2.828 2.828a3 3 0 0 0 0 4.242l2.414 2.415-2 2 1.414 1.414 2-2 2.414 2.414a3 3 0 0 0 4.243 0l2.828-2.828-4.535-4.536 6.1-6.1 4.535 4.535 2.828-2.828a3 3 0 0 0 0-4.242z" />
    </svg>
  );

  const Check = () => (
    <svg
      viewBox="0 0 24 24"
      width="32"
      fill="white"
      style={{ transform: "translateY(4px)" }}
      height="32">
      <path d="m20.05,15.051c.061-.431.047-.86-.049-1.283-.064-.284.072-.591.34-.764.498-.321.902-.758,1.202-1.298.285-.515.434-1.106.431-1.7.003-.604-.146-1.195-.431-1.71h0c-.299-.54-.704-.977-1.202-1.298-.268-.173-.405-.479-.34-.765.134-.593.114-1.199-.059-1.804-.33-1.148-1.247-2.065-2.396-2.396-.606-.172-1.212-.191-1.803-.058-.287.059-.591-.073-.764-.341-.321-.498-.757-.902-1.297-1.202-1.044-.578-2.343-.579-3.388,0-.538.299-.974.703-1.295,1.201-.173.268-.476.405-.765.34-.59-.132-1.197-.113-1.804.06-1.148.329-2.066,1.247-2.394,2.394-.174.606-.194,1.214-.06,1.806.064.284-.072.591-.34.764-.499.322-.903.758-1.203,1.298-.285.515-.434,1.106-.431,1.7-.003.604.146,1.195.432,1.711.299.539.704.975,1.202,1.296.268.174.405.48.34.765-.098.429-.111.866-.047,1.304l-3.929,3.929h5v5l4.794-4.794c.16.127.316.259.501.362.522.289,1.108.434,1.693.434s1.172-.145,1.695-.435c.19-.105.35-.239.513-.37l4.804,4.804v-5h5l-3.95-3.95Zm-7.386-2.637c-.378.378-.88.586-1.414.586s-1.036-.208-1.414-.586l-2.49-2.49,1.414-1.414,2.49,2.49,4.132-4.132,1.414,1.414-4.132,4.132Z" />
    </svg>
  );

  const Puzzel = () => (
    <svg
      viewBox="0 0 24 24"
      width="32"
      fill="white"
      style={{ transform: "translateY(4px)" }}
      height="32">
      <path d="m15.782,23.398c-.75.781-1.992.805-2.773.055-.041-.04-1.042-1.412-1.22-1.664l-1.327,1.307c-.579.58-1.356.901-2.183.901s-1.604-.322-2.188-.907l-1.448-1.448c.938-.661,1.77-1.249,1.788-1.267.751-.781.827-1.905-.184-2.896.045.039-.041-.043,0,0-.818-.709-2.057-.621-2.766.197-.107.127-.6.837-1.156,1.647l-1.417-1.417c-1.207-1.207-1.207-3.17,0-4.376l1.099-1.082c-.463-.335-1.426-1.039-1.459-1.073-.75-.781-.726-2.022.055-2.773.906-.906,2.186-.744,2.896.074.209.247.707.972.967,1.352l2.089-2.057,3.527,3.527c-.424.305-1.499,1.09-1.534,1.127-.75.781-.662,2.087.119,2.837.818.709,2.122.68,2.831-.139.219-.26.757-1.045,1.004-1.405l3.613,3.613-1.922,1.892c.274.188,1.224.834,1.515,1.079.818.709.97,2.034.074,2.896Zm7.541-10.896c-.229-.193-.868-.635-1.262-.906l1.061-1.159c1.17-1.169,1.17-3.073,0-4.243l-1.527-1.528c.495-.339,1.495-.973,1.728-1.169.818-.709.907-1.948.197-2.766-.805-.941-2.115-.935-2.896-.184-.034.033-1.001,1.217-1.39,1.759l-1.43-1.43c-1.171-1.169-3.074-1.168-4.243,0l-.799.799c.919.629,1.782,1.226,1.923,1.345.818.709.907,1.948.197,2.766.043-.041-.039.045,0,0-.991,1.011-2.115.935-2.896.184-.021-.02-.724-1.017-1.459-2.06l-2.554,2.652,9.566,9.566h0s-.006-.006-.006-.006l2.065-2.064c.349.482.993,1.363,1.026,1.394.781.75,1.888.763,2.896-.184.709-.818.621-2.057-.197-2.766Z" />
    </svg>
  );

  const Connect = () => (
    <svg
      viewBox="0 0 24 24"
      width="32"
      fill="white"
      style={{ transform: "translateY(4px)" }}
      height="32">
      <path d="m14,4c0-.552.447-1,1-1h2c2.206,0,4,1.794,4,4v2c0,.552-.447,1-1,1s-1-.448-1-1v-2c0-1.103-.897-2-2-2h-2c-.553,0-1-.448-1-1Zm-5,15h-2c-1.103,0-2-.897-2-2v-2c0-.552-.447-1-1-1s-1,.448-1,1v2c0,2.206,1.794,4,4,4h2c.553,0,1-.448,1-1s-.447-1-1-1Zm3-13c0,3.309-2.691,6-6,6S0,9.309,0,6,2.691,0,6,0s6,2.691,6,6Zm-8-2c0,1.105.895,2,2,2s2-.895,2-2-.895-2-2-2-2,.895-2,2Zm4.776,4.87c-.445-1.095-1.514-1.87-2.768-1.87h-.016c-1.254,0-2.325.774-2.769,1.868.72.698,1.698,1.132,2.778,1.132s2.055-.433,2.776-1.13Zm15.224,9.13c0,3.309-2.691,6-6,6s-6-2.691-6-6,2.691-6,6-6,6,2.691,6,6Zm-8-2c0,1.105.895,2,2,2s2-.895,2-2-.895-2-2-2-2,.895-2,2Zm4.776,4.87c-.445-1.095-1.514-1.87-2.768-1.87h-.016c-1.254,0-2.325.774-2.769,1.868.72.698,1.698,1.132,2.778,1.132s2.055-.433,2.776-1.13Z" />
    </svg>
  );

  const Phone = () => (
    <svg
      viewBox="0 0 24 24"
      width="24"
      fill="white"
      style={{ transform: "translateY(4px)" }}
      height="24">
      <path d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z" />
    </svg>
  );

  const LinkedIn = () => (
    <svg
      viewBox="0 0 24 24"
      width="24"
      fill="white"
      style={{ transform: "translateY(4px)" }}
      height="24">
      <path d="M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908   V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065   c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745   C6.26,7.284,5.479,8.065,4.515,8.065L4.515,8.065 M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497   C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245   c-0.012-0.819-0.685-1.474-1.503-1.463" />
    </svg>
  );

  const Mail = () => (
    <svg
      viewBox="0 0 24 24"
      width="24"
      fill="white"
      style={{ transform: "translateY(4px)" }}
      height="24">
      <path d="M9.878,12.546a3.007,3.007,0,0,0,4.244,0l9.659-9.66A3,3,0,0,0,21,1H3A3,3,0,0,0,.219,2.886Z" /><path d="M15.536,13.96a5.007,5.007,0,0,1-7.072,0L0,5.5V23H24V5.5Z" />
    </svg>
  );

  return (
    <>
      <Header />
      <div style={{ paddingTop: '300px' }}></div>
      <div style={{ width:'800px' }}>
        <ExpandableCard
          title="About Me"
          teaser="Hi! I am a software developer with..."
          icon={<User />}
        >
          <p>Hi! I am a full-stack software developer with a strong front-end focus, 4+ years of experience building responsive, accessible web applications using Angular, TypeScript, and modern web technologies. Skilled in developing intuitive UIs, optimizing user experience, and collaborating in Agile environments. Proficient across the stack with Java, Spring, Node.js, and SQL, and experienced with CI/CD and containerized cloud deployments. Passionate about solving real user problems through clean, scalable code and design systems.</p>
        </ExpandableCard>
      </div>
      <div style={{ width: "800px" }}>
        <ExpandableCard
          title="Skills & Tools"
          teaser="What I can and what I use..."
          icon={<Tool />}
        >
          <p><b>Front-End Development | </b>Angular, TypeScript, JavaScript, HTML5, CSS3 (Sass), Accessibility, UI Design, Node.js, WYSIWYG editors</p>
          <p><b>Back-End Development | </b>Java, Spring Framework, REST APIs, SQL, Flyway, Linux, Maven</p>
          <p><b>Tools & Technologies | </b>Docker, Red Hat OpenShift (Kubernetes), Git, GitLab CI/CD, Postman</p>
          <p><b>Testing & QA: </b>Unit Testing, Karma, Jasmine</p>
          <p><b>Development Practices | </b>Agile (Scrum), Clean Code, Code Reviews, Pair Programming</p>
          <p><b>Human Skills | </b>React (Native)</p>
        </ExpandableCard></div>
      <div style={{ width: "800px" }}><ExpandableCard
        title="Work Experience"
        teaser="Some of the relevant work experience I have..."
        icon={<Work />}
      >
        <h3>Software Developer</h3>
        <p><b>2021 - Present | </b><i>The Dutch Inspectorate of Education</i></p>
        <p>Developed and maintained Angular front-end and Spring-based back-end services for multiple web applications used nationwide.</p>
        <p>Led integration and customization of a WYSIWYG editor within an Angular application, greatly improving accessibility and user experience.</p>
        <p>Worked across the full stack with TypeScript, JavaScript, SQL, Node.js, Java, and REST APIs.</p>
        <p>Created CI/CD pipelines with GitLab, deployed in a cloud-based Red Hat OpenShift (Kubernetes) environment.
          Collaborated in Agile sprints and contributed to sprint planning, story refinement, and demos.</p>
        <br></br>
        <h3>Junior Omnichannel Integration Specialist</h3>
        <p><b>2019 - 2021 | </b> <i>Achmea</i></p>
        <p>Maintained server operations and monitored performance as part of the Run Team, managing users, roles, and authentication with Microsoft Azure exposure.</p>
        <p>Configured Genesys customer service software using low-code XML development, streamlining operations.</p>
        <p>Led technical implementation and training for a new branch integration.</p>
        <p>Troubleshot and optimized system integrations, enhancing performance and user satisfaction.</p>

      </ExpandableCard></div>
      <div style={{ width: "800px" }}>

        <ExpandableCard
          title="Traineeships"
          teaser="What I learned before I started in IT..."
          icon={<Training />}
        >
          <p><b>2019 | </b><i>YoungCapital</i></p>
          <p>Completed intensive training in Java SE8, Angular 6, Git, HTML5, CSS3, JavaScript, TypeScript, Bootstrap, Spring, REST, SQL, Unit Testing, and Scrum.</p>
          <p>Built sample applications, applying Agile principles to deliver functional prototypes.</p>
          <br></br>
          <b>2019 | </b><i>CALCO</i>
          <p>Gained foundational skills in software development, project management, cloud computing, and project management.</p>
          <p>Learned Agile methodologies, team communication, and technical documentation best practices.</p>

        </ExpandableCard></div>
      <div style={{ width: "800px" }}>
        <ExpandableCard
          title="Education"
          teaser="My degrees..."
          icon={<Education />}
        >
          <p><i>Radboud University, Nijmegen (NL)</i></p>
          <p style={{ margin: '0' }}>2017 - 2018 | <b>Master of Science (MSc), Psychology (Behaviour Change)</b></p>
          <ul style={{ textIndent: "3em", margin: '0' }}>- Built prototypes involving IoT and user behavior.</ul>
          <ul style={{ textIndent: "3em", margin: '0' }}>- Applied behavioral design principles to tech-driven solutions.</ul>
          <p>2017 - 2018 | <b>Master Honours Diploma</b></p>
          <p>2014 - 2017 | <b>Bachelor of Science (BSc) Psychology</b></p>

        </ExpandableCard></div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "24px", width: "800px"}}>
        <div style={{ flex: "1 1 0px" }}>
          <ExpandableCard
            title="Languages"
            teaser="All the languages I learned over time..."
            icon={<World />}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", gap: "16px" }}>
              <i>German</i>
              <span>
                <Star color="white" />
                <Star color="white" />
                <Star color="white" />
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <i>Dutch</i>
              <span>
                <Star color="white" />
                <Star color="white" />
                <Star color="white" />
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <i>English</i>
              <span>
                <Star color="white" />
                <Star color="white" />
                <Star />
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <i>Russian</i>
              <span>
                <Star color="white" />
                <Star />
                <Star />
              </span>
            </div>

          </ExpandableCard>
        </div>
        <div style={{ flex: "2 1 0px" }}>
          <ExpandableCard
            title="Certifications"
            teaser="Certificates I got while working and in training..."
            icon={<Check />}
          >
            <p>Professional Certificate in UI Design</p>
            <p>Java SE 8 (OCA)</p>
            <p>Professional Scrum Master I</p>
            <p>EXIN Cloud Computing Foundation</p>
          </ExpandableCard>
        </div>
      </div>
      <div style={{ width: "800px" }}>
        <ExpandableCard
          title="Hobbies & Interests"
          teaser="To get to know me a bit better..."
          icon={<Puzzel />}
        >
          <p><b>User Interface Design |</b> Exploring best practices for creating intuitive UI</p>
          <p><b>Reading & Writing |</b> Interests in storytelling & world-building</p>
          <p><b>Escape Rooms |</b> Problem-solving and teamwork</p>
          <p><b>Video & Board Games |</b> Creativity, strategy, and design insights</p>
        </ExpandableCard></div>
      <div style={{ width: "800px" }}>
        <ExpandableCard
          title="Let's Connect"
          teaser="Think I might be a good match for your team and work? Then..."
          icon={<Connect />}
        >
          <p><Mail /> m.daniluk@tutamail.com </p>
          <p><Phone /> +31682866613</p>
          <p><LinkedIn /> www.linkedin.com/in/maria-daniluk-71a6b5144</p>
        </ExpandableCard>
      </div>
      <Footer />
    </>
  );
}
