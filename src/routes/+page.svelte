<script lang="ts">
  import { base } from '$app/paths';
  
  function navigateToSection(sectionId: string){
    
    const section = document.querySelector(sectionId);
    if(section){
      window.scrollTo({
        top: section.getBoundingClientRect().top,
        behavior: 'smooth'
      })
    } else{
      console.error(`Section ${sectionId} not found`);
    }
  }

  function openResumePDF(){
    window.open('./FDSG_CV.pdf' );
  }

  function toggleMenu(){
    const nav = document.querySelector('nav');
    nav?.classList.toggle('hidden');
  }

</script>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=devide-width, initial-scale=1.0">
        <title>Fabio Suárez</title>
    </head>

    <body>
        <header class="bg-white">
            <!-- <div class="container mx-auto flex justify-evenly p-5"> -->
              <div class="container mx-auto flex flex-col md:flex-row justify-evenly p-5">
              <div class="flex justify-between">
                <div class="text-3xl space-x-5">Fabio Suárez</div>
                <div>
                  <button id="hamburger" class="md:hidden" on:click={() => toggleMenu()}>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <nav class="hidden md:block">
                <ul class="flex  items-center flex-col sm:flex-row space-x-4">
                  <li><a href="#about" class="text-2xl text-gray-600 hover:text-blue" on:click={() => navigateToSection('#about')}>About</a></li>
                  <li><a href="#experience" class="text-2xl text-gray-600 hover:text-blue" on:click={() => navigateToSection('#experience')}>Experience</a></li>
                  <li><a href="#projects" class="text-2xl text-gray-600 hover:text-blue" on:click={() => navigateToSection('#projects')}>Projects</a></li>
                  <li><a href="#contact" class="text-2xl text-gray-600 hover:text-blue" on:click={() => navigateToSection('#contact')}>Contact</a></li>
                </ul>
              </nav>
            </div>
        </header>
            
        <section class="container flex  items-center flex-col sm:flex-row justify-center p-5 mt-32">
          <div>
            <img class="rounded-full mx-auto" src="./imagen1.jpg" alt="Fabio Suárez profile picture" width="400px" height="400px"/>
          </div>

          <div class="ml-10 ">
            <p class="text-2xl text-center">Hello, I'm</p>
            <h1 class="text-3xl font-bold text-center">Fabio Suárez</h1>
            <p class="text-4xl text-center">Software Engineer</p>
            
            <div class="container mx-auto flex justify-evenly pt-5">
              <button class="bg-blue hover:bg-blue-hover text-white font-bold py-2 px-4 rounded"
              on:click={() => openResumePDF()}>
                Download CV
              </button>

              <button class="bg-orange hover:bg-orange-hover text-white font-bold py-2 px-4 rounded" on:click={() => navigateToSection('#contact')}>
                Contact Info
              </button>
            </div>

            <div class="container mx-auto flex justify-evenly pt-5">
              <a href="https://www.linkedin.com/in/fabio-su%C3%A1rez-gorr%C3%ADn-471322211/"> 
                <img src="./linkedin.png" alt="linkedin" height="30px" width="30px">
              </a>

              <a href="https://github.com/Fadasgo"> 
                <img src="./github.png" alt="github" height="30px" width="30px">
              </a>
            </div>
          </div>
        </section>

        <section id="about" class="mt-16">
          <h1 class="text-4xl font-bold text-center mb-16">
            About Me
          </h1>

          <div class="flex flex-col sm:flex-row justify-center items-center lg:items-start">
            <div class="w-2/4 md:ml-5 lg:ml-0 lg:w-1/4"><img class="rounded-2xl" src="./imagen2.jpg" alt="about-image" width="300px" height="400px"></div>
            
            <!-- h-screen -->
            <div class="w-2/4 h-1/2 lg:grid grid-rows-2 gap-4 mt-16 lg:mt-0">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="border  border-black rounded-3xl h-36 w-128 flex flex-col justify-center">
                  <h2 class="text-2xl font-bold text-center">
                    Experience
                  </h2>

                  <p class="text-xl text-center">
                    +2.5 years
                  </p>

                  <p class="text-xl text-center">
                    Full Stack Software Engineer
                  </p>
                </div>

                <div class="border  border-black rounded-3xl h-36 w-128 flex flex-col justify-center">
                  <h2 class="text-2xl font-bold text-center">
                    Education
                  </h2>

                  <p class="text-xl text-center">
                    B.Sc Computer Science
                  </p>

                  <p class="text-xl text-center">
                    Simón Bolívar University (Vzla)
                  </p>
                </div>
              </div>

              <div class="container flex flex-col items-start mt-8 lg:mt-0">
                <p class="text-justify text-xl">
                  I am a passionate B.Sc. Computer Science graduate with a keen interest in web development and software engineering. With hands-on experience in SQL, MySQL, and front-end frameworks like Angular and Svelte, I bring a strong foundation in both backend and frontend technologies. My academic projects, such as [d], demonstrate my ability to deliver practical and user-centric solutions. Eager to contribute to innovative projects, I am looking for opportunities that will challenge me and allow me to grow as a full-stack developer.
                </p>
              </div>
          
            </div>
          </div>

        </section>

        <section id="experience" class="mt-16">
          <h1 class="text-4xl font-bold text-center mb-16">
            Experience
          </h1>

          <div class="flex flex-col sm:flex-row justify-center items-center">
            <div class="w-1/2">
              <ul>
                <li class="text-xl text-center">Algorithms</li>
                <li class="text-xl text-center">Data Structures</li>
                <li class="text-xl text-center">Databases</li>
                <li class="text-xl text-center">BI</li>
                <li class="text-xl text-center">Linux</li>
                <li class="text-xl text-center">HTML</li>
                <li class="text-xl text-center">CSS</li>
                <li class="text-xl text-center">Typescript</li>
                <li class="text-xl text-center">Javascript</li>
                <li class="text-xl text-center">Angular</li>
                <li class="text-xl text-center">Python</li> 
              </ul>
            </div>
            
            <!-- h-screen -->
              <div class="w-1/2 mt-16 lg:mt-0">
                <ul>
                  <li class="text-xl text-center">Java</li>
                  <li class="text-xl text-center">Spring Boot</li>
                  <li class="text-xl text-center">SQL</li>
                  <li class="text-xl text-center">PostgreSQL</li>
                  <li class="text-xl text-center">SQL Server</li>
                  <li class="text-xl text-center">MySQL</li>
                  <li class="text-xl text-center">Oracle DB</li>
                  <li class="text-xl text-center">Cassandra</li> 
                  <li class="text-xl text-center">Git</li>
                  <li class="text-xl text-center">Flyway</li>
                  <li class="text-xl text-center">Jasper Report</li>
                </ul>
              </div>
          </div>

          <div class="container mx-auto flex justify-evenly pt-5">
            <button class="bg-blue hover:bg-blue-hover text-white font-bold py-2 px-4 rounded"
            on:click={() => openResumePDF()}>
              Download CV
            </button>
          </div>

        </section>

        <section id="projects" class="mt-16">
          <h1 class="text-4xl font-bold text-center mb-16">
            Projects
          </h1>

          <!-- <div class="flex justify-center w-1/2 lg:justify-end lg:w-3/4"> -->
          <div class="container mx-auto w-1/2 lg:w-3/4">
              <ul>
                <li class="text-xl text-justify"><b>Symbolic Calculator:</b> Symbolic trigonometric integral calculator using Haskell and MathJax library.</li>
                <br>
                <li class="text-xl text-justify"><b>WillyStar:</b> Developed an interpreter of the programming language Willy* implemented with Python.</li>
                <br>
                <li class="text-xl text-justify"><b>Nonogram Solver:</b> Implemented a Nonogram game solver with Python using the SAT Solver Glucose.</li> 
              </ul>
          </div>

          <div class="container mx-auto flex justify-evenly pt-5">
            <a class="flex flex-row items-center space-x-2" href="https://github.com/Fadasgo"> 
              <img src="./github.png" alt="github" height="30px" width="30px">
              <p class="text-xl text-center hover:text-blue" >
                Github
              </p>
            </a>
          </div>

        </section>


        <section id="contact" class="mt-16">
          <h1 class="text-4xl font-bold text-center mb-16">
            Contact Me
          </h1>

          <div class="container mx-auto w-2/3 lg:w-1/3">
            <div class="border  border-black rounded-3xl h-36 w-128 flex flex-col lg:flex-row justify-evenly items-center">
                
              <div>
                <a href="mailto:fadasgo@gmail.com" class="flex flex-row items-center space-x-2">
                  <img src="./email.png" alt="email" height="40px" width="40px">
                  <p class="text-xl text-center hover:text-blue">
                    fadasgo@gmail.com
                  </p>
                </a>
              </div>

              <!-- <div class="flex flex-row items-center space-x-2"> -->
              <div> 
                <a class="flex flex-row items-center space-x-2" href="https://www.linkedin.com/in/fabio-su%C3%A1rez-gorr%C3%ADn-471322211/"> 
                  <img src="./linkedin.png" alt="linkedin" height="30px" width="30px">
                  <p class="text-xl text-center hover:text-blue" >
                    Linkedin
                  </p>
                </a>
              </div>
            </div>
          </div>


          <footer class="mt-16">
            <!-- <p>Copyright &#169; 2023 fadasgo. All Rights Reserved.</p> -->

            <div class="container mx-auto flex justify-center p-5">
              <nav class="block">
                <ul class="flex space-x-4">
                  <li><a href="#about" class="text-2xl text-gray-600 hover:text-blue" on:click={() => navigateToSection('#about')}>About</a></li>
                  <li><a href="#experience" class="text-2xl text-gray-600 hover:text-blue" on:click={() => navigateToSection('#experience')}>Experience</a></li>
                  <li><a href="#projects" class="text-2xl text-gray-600 hover:text-blue" on:click={() => navigateToSection('#projects')}>Projects</a></li>
                  <li><a href="#contact" class="text-2xl text-gray-600 hover:text-blue" on:click={() => navigateToSection('#contact')}>Contact</a></li>
                </ul>
              </nav>
            </div>
          </footer>
          
        </section>
          
    </body>

</html>
  
  
  <!-- <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style> -->