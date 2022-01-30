import Head from 'next/head'
import Particles from "react-tsparticles";



export default function Home() {

  const particlesInit = (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  return (

    <>

      <div className="wrapper flex items-center justify-center h-screen">

        <div>
          <Particles
            id="tsparticles"
            //init={particlesInit}
            //loaded={particlesLoaded}
            options={{
              "background": {
                "color": {
                  "value": "#232741"
                },
                /*  "image": "url('http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1237px-NASA_logo.svg.png')",
                 "position": "50% 50%",
                 "repeat": "no-repeat",
                 "size": "20%" */
              },
              "fullScreen": {
                "zIndex": -1
              },
              "interactivity": {
                "events": {
                  "onClick": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "onHover": {
                    "enable": true,
                    "mode": "bubble"
                  }
                },
                "modes": {
                  "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "opacity": 0,
                    "size": 0
                  },
                  "grab": {
                    "distance": 400
                  },
                  "repulse": {
                    "distance": 400
                  }
                }
              },
              "particles": {
                "color": {
                  "value": "#ffffff"
                },
                "links": {
                  "color": {
                    "value": "#ffffff"
                  },
                  "distance": 150,
                  "opacity": 0.4
                },
                "move": {
                  "attract": {
                    "rotate": {
                      "x": 600,
                      "y": 600
                    }
                  },
                  "enable": true,
                  "outModes": {
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
                  },
                  "random": true,
                  "speed": 1
                },
                "number": {
                  "density": {
                    "enable": true
                  },
                  "value": 160
                },
                "opacity": {
                  "random": {
                    "enable": true
                  },
                  "value": {
                    "min": 0,
                    "max": 1
                  },
                  "animation": {
                    "enable": true,
                    "speed": 1,
                    "minimumValue": 0
                  }
                },
                "size": {
                  "random": {
                    "enable": true
                  },
                  "value": {
                    "min": 1,
                    "max": 3
                  },
                  "animation": {
                    "speed": 4,
                    "minimumValue": 0.3
                  }
                }
              }
            }
            }




          />

          <div className="flex-wrap md:mx-80">
            <h1 className="text-white text-center text-2xl md:text-6xl">My name is <span className="text-[#00fdff]">David Borowicz</span>. Welcome to my website!</h1>
          </div>

          <img className="mt-20 mx-auto h-20 animate-bounce" src="down-arrow.png" />

        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-zinc-200 border-black border-t-[20px] p-10">
        <h1 className="text-5xl mb-7">About Me</h1>
        <img className="h-96" src="grey-headshot.png" />
        <h1 className="mx-80 text-4xl text-center">I am an aspiring software engineer who is currently seeking all opportunities for growth!</h1>
      </div>

      <div className="flex items-center justify-center bg-zinc-200 pb-10">
        <button className="bg-black hover:bg-black/50 text-white font-bold mx-4 py-2 px-4 rounded-full">LinkedIn</button>
        <button className="bg-black hover:bg-black/50 text-white font-bold mx-4 py-2 px-4 rounded-full">GitHub</button>
        <button className="bg-black hover:bg-black/50 text-white font-bold mx-4 py-2 px-4 rounded-full">Resume</button>
      </div>

      <div>
        <img className="w-full h-auto bg-contain" src="../waves.svg" />
      </div>


      <div className="flex items-center justify-center bg-zinc-200 pb-10">
        <h1 className="text-5xl">Contact Me</h1>
      </div>
      
      <div className="flex items-center justify-center bg-zinc-200 pb-10">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              <p className="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                E-mail
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="JaneDoe@Email.com" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Message
              </label>
              <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="Message Goes Here!"></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
            <button className="bg-black hover:bg-black/50 text-white font-bold py-2 px-4 rounded-full">
              Send
            </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>

      <div>
        <img className="w-full h-auto bg-contain" src="../waves.svg" />
      </div>

    </>



  )
};


