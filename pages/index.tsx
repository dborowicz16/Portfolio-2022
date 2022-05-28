import Head from 'next/head'
import Particles from "react-tsparticles";
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/Image';


export default function Home() {

  const [state, handleSubmit] = useForm("xbjwgabz");

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
        <h1 className="mx-80 text-xl text-center">I am a software engineer who graduated from Grand Valley State University with
          a degree in computer information systems. I love to work on programming projects of all sorts however my current field of expertise
          is front end web development. I am currenty looking for any opportunity to grow my skills no matter how big or small!</h1>
      </div>

      <div className="flex items-center justify-center bg-zinc-200 pb-10">
        <a href='https://www.linkedin.com/in/david-borowicz-95315814b/' target="_blank" className="bg-black hover:bg-black/50 text-white font-bold mx-4 py-2 px-4 rounded-full">LinkedIn</a>
        <a href='https://github.com/dborowicz16' target="_blank" className="bg-black hover:bg-black/50 text-white font-bold mx-4 py-2 px-4 rounded-full">GitHub</a>
        <a href='https://i.imgur.com/26KnNr8.jpg' target="_blank" className="bg-black hover:bg-black/50 text-white font-bold mx-4 py-2 px-4 rounded-full">Resume</a>
      </div>

      <div>
        <img className="w-full h-auto bg-contain" src="../waves.svg" />
      </div>

      <div className="flex flex-col bg-zinc-200 pb-10">
        <h1 className="text-5xl self-center mb-10">Skills</h1>

        <div className="flex flex-row justify-around">
          <div className="flex flex-col">
            <div className="relative h-[190px] w-[190px] mb-5">
              <Image
                src="/squircle.svg"
                layout="fill"
              />
            </div>
            <h1 className="self-center w-48 text-center text-lg">It is of the outmost importance to me that all websites I build display seamlessly
              with no delay in load times.</h1>
          </div>

          <h1 className="absolute text-3xl z-10 text-white left-52 translate-x-4 translate-y-20">Swift</h1>
          <h1 className="absolute text-3xl z-10 text-white translate-y-20 translate-x-1">Responsive</h1>
          <h1 className="absolute text-3xl z-10 text-white right-48 translate-y-20">Beautiful</h1>

          <div className="flex flex-col">
            <div className="relative h-[190px] w-[190px] mb-5">
              <Image
                src="/squircle.svg"
                layout="fill"
              />
            </div>
            <h1 className="self-center w-48 text-center text-lg">I will make your website look amazing no matter if it is being viewed from a
              computer, phone, or tablet!</h1>
          </div>

          <div className="flex flex-col">
            <div className="relative h-[190px] w-[190px] mb-5">
              <Image
                src="/squircle.svg"
                layout="fill"
              />
            </div>
            <h1 className="self-center w-48 text-center text-lg">Make a good first impression with potential customers by having a beautifully
              designed website!</h1>
          </div>
        </div>

        <div className="relative h-[500px] w-[500px] my-5">
          <Image
            src="/skillsWheel.svg"
            layout="fill"
          />
        </div>

      </div>

      <div>
        <img className="w-full h-auto bg-contain" src="../waves.svg" />
      </div>

      <div className="flex items-center justify-center bg-zinc-200 pb-10">
        <h1 className="text-5xl">Contact Me</h1>
      </div>

      <div className="flex items-center justify-center bg-zinc-200 pb-10">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
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
              <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                E-mail
              </label>
              <input id="email" type="email" name="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="JaneDoe@Email.com" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Message
              </label>
              <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="message" placeholder="Message Goes Here!"></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button type="submit" disabled={state.submitting} className="bg-black hover:bg-black/50 text-white font-bold py-2 px-4 rounded-full">
                Send
              </button>
              <ValidationError errors={state.errors} />
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


