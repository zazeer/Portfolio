This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

//   const [isOpen, setIsOpen] = useState(false);
//   useEffect(() => {
//     const words = ["Reza Tafazzul Zaheer"];
//     let i = 0;
//     let j = 0;
//     let currentWord = "";
//     let isDeleting = false;

//     const type = () => {
//       currentWord = words[i];
//       if (isDeleting) {
//         document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
//         j--;
//         if (j === 0) {
//           isDeleting = false;
//           i++;
//           if (i === words.length) {
//             i = 0;
//           }
//         }
//       } else {
//         document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
//         j++;
//         if (j === currentWord.length) {
//           isDeleting = true;
//         }
//       }
//       setTimeout(type, 100);
//   };
//   type();
// }, []);

<!-- <span className="absolute w-0 h-0 transition-all duration-10 ease-out bg-[#06b6d4] rounded-full group-hover:w-20 group-hover:h-20 opacity-20"></span>
                    </span> -->
                    hover effeect

<!-- <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">Reza Tafazzul Zaheer</span> -->
text grad

<section id="projects" className="bg-[#343240] min-h-screen text-white font-poppins scrollbar-hide">

          <div>
            <h1 className="text-5xl pt-20 mb-20 text-center">Projects</h1>
          </div>

          <div className='grid grid-cols-3'>
            <div className='ease-in'>
              <div className="text-center shadow-white-glow p-8 rounded-lg backdrop-blur-md border-gray-300 transition-transform transform mx-10 hover:duration-200 hover:scale-105 hover:bg-gradient-to-b from-transparent via-transparent to-blue-500 duration-500 ease-out">
                <Image
                  src="/images/Sikotes.png" 
                  alt="Sikotes"
                  width={600} 
                  height={600} 
                  className="mx-auto mb-4 rounded-lg"
                />
                <h3 className="pt-2 text-2xl font-bold text-white">Sikotes</h3>
                <p className="mt-2 text-white text-md">
                  Mathmify is a math website for elementary school students to learn.
                </p>
              </div>
            </div>


            <div className='ease-in'>
              <div className="text-center shadow-white-glow p-8 rounded-lg backdrop-blur-md border-gray-300 transition-transform transform mx-10 hover:duration-200 hover:scale-105 hover:bg-gradient-to-b from-transparent via-transparent to-orange-500 duration-500 ease-out">
                <Image
                  src="/images/Calm.png" 
                  alt="Calm"
                  width={600} 
                  height={600} 
                  className="mx-auto mb-4 rounded-lg"
                />
                <h3 className="pt-2 text-2xl font-bold text-white">Calm</h3>
                <p className="mt-2 text-white text-md">
                  Mathmify is a math website for elementary school students to learn.
                </p>
                  <Icon icon={figmaIcon} style={{ fontSize: '50px'}} />
              </div>
            </div>

            <div className='ease-in'>
              <div className="text-center shadow-white-glow p-8 rounded-lg backdrop-blur-md border-gray-300 transition-transform transform mx-10 hover:duration-200 hover:scale-105 hover:bg-gradient-to-b from-transparent via-transparent to-[#326775] duration-500 ease-out">
                <Image
                  src="/images/Leftopia.png" 
                  alt="Leftopia"
                  width={600} 
                  height={600} 
                  className="mx-auto mb-4 rounded-lg"
                />
                <h3 className="pt-2 text-2xl font-bold text-white">Leftopia</h3>
                <p className="mt-2 text-white text-md">
                  Mathmify is a math website for elementary school students to learn.
                </p>
              </div>
            </div>

          </div>
        </section>
