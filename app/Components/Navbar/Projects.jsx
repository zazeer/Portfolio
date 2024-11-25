import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from "react-icons/ai";
import { SiFigma } from "react-icons/si";

function Projects() {
  useEffect(() => {
    const captures = document.querySelectorAll(".glow-capture");

    captures.forEach((capture) => {
      const clonedChild = capture.children[0].cloneNode(true);
      const overlay = capture.querySelector(".glow-overlay");

      overlay.appendChild(clonedChild);

      const handleMouseMove = (event) => {
        const x = event.pageX - capture.offsetLeft;
        const y = event.pageY - capture.offsetTop;

        overlay.style.setProperty("--glow-x", `${x}px`);
        overlay.style.setProperty("--glow-y", `${y}px`);
        overlay.style.setProperty("--glow-opacity", "1");
      };

      const handleMouseLeave = () => {
        overlay.style.setProperty("--glow-opacity", "0");
      };

      capture.addEventListener("mousemove", handleMouseMove);
      capture.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        capture.removeEventListener("mousemove", handleMouseMove);
        capture.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div className="bg-[#030014] min-h-screen text-white flex flex-wrap">
      <div className="z-20 flex items-center md:mt-20 flex-col md:flex-row">
        {/* project 1 */}
        <div className="relative glow-capture md:ml-20 md:mt-10 ml-10 mr-10 ">
          {/* Efek glow-overlay*/}
          <div 
            className="absolute inset-1 -z-10 glow-overlay"
            style={{
              '--glow-color': '#f0abfc', 
              '--glow-opacity': 1,       
            }}
          >
          </div>

          {/*Main Container*/}
          <div className="group h-full bg-zinc-900/50 border-2 border-fuchsia-300 border-opacity-50 rounded-2xl p-10 shadow-lg shadow-black/80 flex flex-col items-center gap-6 backdrop-blur-sm relative">
            
            {/* Project Picture*/}
            <Image
              src="/images/Vhotel Mockup.png"
              alt="Vhotel mockup"
              layout='intrinsic'
              width={4000}
              height={3000}
              className="w-[42rem] h-[21rem] rounded-lg object-cover border-2 border-fuchsia-300 border-opacity-50"
            />
            

            {/* Bagian teks dan deskripsi project */}
            <div className="text-justify">
              {/* Judul project */}
              <h2 className="font-bold text-4xl tracking-tight">VHOTEL</h2>

              {/* Label kategori project */}
              <p className="opacity-50 text-sm uppercase tracking-wide mb-3">Front-End</p>
              
              {/* Deskripsi project */}
              <div className="prose md:prose-base prose-lg prose-zinc prose-invert text-opacity-90">
                <p>VHotel is a front-end web application. Developed as a university project, it offers a user-friendly platform for easy hotel booking. Built using HTML, CSS, and JavaScript, VHotel ensures a responsive and intuitive experience, providing users with a seamless interface to find and reserve a hotel effortlessly.</p>
              </div>

              {/* button */}
              <div className='flex flex-row'>
                <Link href='https://github.com/zazeer/Vhotel'>
                  <button className="text-3xl space-x-10 bg-zinc-950/50 backdrop-blur-xl py-3 rounded-xl border-2 border-fuchsia-300  border-opacity-50 mt-6 mr-3 flex justify-center w-20 hover:bg-gradient-to-r from-fuchsia-800 via-fuchsia-600 to-fuchsia-400 bg-300% animate-gradient ">
                    <span>
                        <AiFillGithub/>
                    </span>
                  </button>
                </Link>
                <Link href='https://www.figma.com/design/m9m5iwlHydwM3qd0lcS8fS/VhoTel_2602128945?node-id=0-1&t=Zhs3HxHvchCsz2kA-1'>
                  <button className="text-3xl space-x-10 bg-zinc-950/50 backdrop-blur-xl py-3 rounded-xl border-2 border-fuchsia-300  border-opacity-50 mt-6 flex justify-center w-20 hover:bg-gradient-to-r from-fuchsia-800 via-fuchsia-600 to-fuchsia-400 bg-300% animate-gradient ">
                    <span>
                        <SiFigma/>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* project 2 */}
        <div className="relative glow-capture md:mr-20  ml-10 mr-10 mt-10">
          {/* Efek glow-overlay*/}
          <div 
            className="absolute inset-1 -z-10 glow-overlay"
            style={{
              '--glow-color': '#7c3aed', 
              '--glow-opacity': 1,       
            }}
          >
          </div>

          {/*Main Container*/}
          <div className="group h-full bg-zinc-900/50 border-2 border-violet-600 border-opacity-50 rounded-2xl p-10 shadow-lg shadow-black/80 flex flex-col items-center gap-6 backdrop-blur-sm">
            
            {/* Project Picture*/}
            <Image
              src="/images/portfolio_mockup.png"
              alt="Portfolio mockup"
              layout='intrinsic'
              width={4000}  // Lebar asli gambar
              height={3000}
              className="w-[42rem] h-[21rem] rounded-lg object-cover border-2 border-violet-600 border-opacity-50"
            />
            

            {/* Bagian teks dan deskripsi project */}
            <div className="text-justify">
              {/* Judul project */}
              <h2 className="font-bold text-4xl tracking-tight">PORTFOLIO</h2>

              {/* Label kategori project */}
              <p className="opacity-50 text-sm uppercase tracking-wide mb-3">Front-End</p>
              
              {/* Deskripsi project */}
              <div className="prose md:prose-base prose-lg prose-zinc prose-invert text-opacity-90">
                <p>This portfolio website built using Next.js and styled with Tailwind CSS. Developed to showcase my skills and projects, this site offers a clean, responsive, and dynamic experience. The wesbite delivers fast load times and a modern, visually appealing design, ensuring a smooth user experience across all devices.</p>
              </div>

              {/* button */}
              <div>
                <Link href='https://github.com/zazeer/Portfolio'>
                  <button className="text-3xl space-x-10 bg-zinc-950/50 backdrop-blur-xl py-3 rounded-xl border-2 border-violet-600  border-opacity-50 mt-6 flex justify-center w-20 hover:bg-gradient-to-r from-violet-800 via-violet-600 to-violet-400 bg-300% animate-gradient ">
                    <span>
                        <AiFillGithub/>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="z-20 flex items-center flex-col md:flex-row">
        {/* project 3 */}
        <div className="relative glow-capture md:ml-20 mt-10 ml-10 mr-10 mb-10">
          {/* Efek glow-overlay*/}
          <div 
            className="absolute inset-1 -z-10 glow-overlay"
            style={{
              '--glow-color': '#45b2ff', 
              '--glow-opacity': 1,       
            }}
          >
          </div>

          {/*Main Container*/}
          <div className="group h-full bg-zinc-900/50 border-2 border-[#45b2ff] border-opacity-50 rounded-2xl p-10 shadow-lg shadow-black/80 flex flex-col items-center gap-6 backdrop-blur-sm relative">
            
            {/* Project Picture*/}
            <Image
              src="/images/sikotes_mockup _2.png"
              alt="Sikotes mockup"
              layout='intrinsic'
              width={4000}
              height={3000}
              className="w-[42rem] h-[21rem] rounded-lg object-cover border-2 border-[#45b2ff] border-opacity-50"
            />
            

            {/* Bagian teks dan deskripsi project */}
            <div className="text-justify">
              {/* Judul project */}
              <h2 className="font-bold text-4xl tracking-tight">SIKOTES</h2>

              {/* Label kategori project */}
              <p className="opacity-50 text-sm uppercase tracking-wide mb-3">UI/UX DESIGN</p>
              
              {/* Deskripsi project */}
              <div className="prose md:prose-base prose-lg prose-zinc prose-invert text-opacity-90">
                <p>Sikotes is an application for people who want to apply for jobs. This app can assist with the psychometric test and interview stages of the selection process. The application aims to address the challenges people face in the employment sector, providing tools to help candidates prepare effectively and improve their chances of success.</p>
              </div>

              {/* button */}
              <div>
                <Link href='https://www.figma.com/design/87SQeZ0SZtA8mpmq5noFjy/%5BSikotes%5DExtraordinary_Techfest?node-id=0-1&t=9aJMLbksyqytNZK7-1'>
                  <button className="text-3xl space-x-10 bg-zinc-950/50 backdrop-blur-xl py-3 rounded-xl border-2 border-[#45b2ff] border-opacity-50 mt-6 flex justify-center w-20 hover:bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 bg-300% animate-gradient ">
                    <span>
                        <SiFigma/>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* project 4 */}
        <div className="relative glow-capture md:mr-20  ml-10 mr-10 mt-10 mb-10">
          {/* Efek glow-overlay*/}
          <div 
            className="absolute inset-1 -z-10 glow-overlay"
            style={{
              '--glow-color': '#fd9319', 
              '--glow-opacity': 1,       
            }}
          >
          </div>

          {/*Main Container*/}
          <div className="group h-full bg-zinc-900/50 border-2 border-[#fd9319] border-opacity-50 rounded-2xl p-10 shadow-lg shadow-black/80 flex flex-col items-center gap-6 backdrop-blur-sm">
            
            {/* Project Picture*/}
            <Image
              src="/images/u-trip_mockup_2.png"
              alt="U-trip mockup"
              layout='intrinsic'
              width={2160}
              height={1080}
              className="w-[42rem] h-[21rem] rounded-lg object-cover border-2 border-[#fd9319] border-opacity-50"
            />
            

            {/* Bagian teks dan deskripsi project */}
            <div className="text-justify">
              {/* Judul project */}
              <h2 className="font-bold text-4xl tracking-tight">U-TRIP</h2>

              {/* Label kategori project */}
              <p className="opacity-50 text-sm uppercase tracking-wide mb-3">UI/UX DESIGN</p>
              
              {/* Deskripsi project */}
              <div className="prose md:prose-base prose-lg prose-zinc prose-invert text-opacity-90">
                <p>U-Trip is an application designed to create itinerary schedules quickly and easily with the help of AI. U-Trip also assists users in discovering and searching for tourist attractions and culinary spots. The app aims to simplify trip planning and execution, making travel more convenient for its users while ensuring a personalized and enjoyable travel experience.</p>
              </div>

              {/* button */}
              <div>
                <Link href='https://www.figma.com/design/cGqsdgSmGhqR1iBOI46FJx/MVP-Remodel?node-id=6-120&t=uO2B07QxH4IkDZ34-1'>
                  <button className="text-3xl space-x-10 bg-zinc-950/50 backdrop-blur-xl py-3 rounded-xl border-2 border-[#fd9319] border-opacity-50 mt-6 flex justify-center w-20 hover:bg-gradient-to-r from-orange-800 via-orange-600 to-orange-400 bg-300% animate-gradient ">
                    <span>
                        <SiFigma/>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
