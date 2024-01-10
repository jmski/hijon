import React from "react";
import { Container, MarqueeText } from "../components";
import { Footer } from "@/app/container/prototype";

const Main = () => {
  return (
    <>
      {/* Header */}
      <Container isGrid={false} className="min-h-screen flex-col pt-12">
        <h1 className=" text-5xl md:text-7xl lg:text-8xl">
          One of the most important pieces of a great product experience is you.
        </h1>
        <span className="text-xl md:text-3xl pt-12">
          A creative agency that crafting a digital experience.
        </span>
      </Container>

      {/* Video? */}
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-base-100 to-slate-100 p-4">
        <div className="bg-white rounded-3xl min-h-[500px] w-full h-full text-black">
          <p className="p-8">your browser does not support the video tag</p>
        </div>
      </div>

      {/* Milestones */}
      <div className="min-h-screen bg-white text-black">
        <div className="min-h-screen bg-slate-100 rounded-b-[10svw] px-[2rem] md:px-[10rem]">
          <div>
            <span className="pb-8 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">
              Milestones
            </span>
            <h2 className="text-5xl md:text-6xl max-w-3xl pb-20 pt-8">
              Stand aware of accomplishments, stay awake to achieve more.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 pb-12 gap-12">
            <div className="">
              <h2 className="text-5xl md:text-6xl pb-8">$99M+</h2>
              <h3 className="text-2xl md:text-4xl pb-4">Capital Raised</h3>
              <p>
                Total amount of capital raised following collaboration with Jon
              </p>
            </div>
            <div className="">
              <h2 className="text-5xl md:text-6xl pb-8">1</h2>
              <h3 className="text-2xl md:text-4xl pb-4">Unicorn Branded</h3>
              <p>
                Unicorn brands that have gained up to $1B valuations
                post-branding
              </p>
            </div>
            <div className="">
              <h2 className="text-5xl md:text-6xl pb-8">300</h2>
              <h3 className="text-2xl md:text-4xl pb-4">Acquisitions</h3>
              <p>
                Number of clients who have been acquired following collaboration
                with Jon
              </p>
            </div>
          </div>
          <p className="text-2xl md:text-3xl pb-[15svh] leading-loose">
            Our clients are companies, brands, and startups that keep the world
            going around.
            <br />
            <br />
            They treat diseases, move parcels, insure cars, process payments,
            create jobs, rent homes and publish news. They are vast and complex
            businesses requiring design experiences that are just as{" "}
            <span className="bg-orange-100">
              people-friendly as they are, robust and scalable.
            </span>
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="min-h-screen bg-white text-black px-[2rem] md:px-[10rem]">
        <div className="pt-12">
          <span className="pb-4 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">
            Services
          </span>
          <h2 className="text-5xl md:text-6xl max-w-3xl pb-20 pt-8">
            It&apos;s not about limitations, but this is something about what we
            focus on.
          </h2>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
          <div className="bg-purple-100 rounded-3xl shadow-sm p-8">
            <div>Icon</div>
            <h4 className="text-2xl pb-2">Brand identity</h4>
            <p>
              the essential ability to combine empathy, creativity and
              rationality to meet use needs and business success.
            </p>
            <ul className="flex flex-col gap-2 md:text-lg mt-8 mx-8 list-disc">
              <li>Visual Branding</li>
              <li>Brand Strategy</li>
              <li>Identity development</li>
              <li>Digital and print collateral</li>
              <li>Brand Guidelines</li>
              <li>Mockup design</li>
            </ul>
          </div>

          <div className="bg-orange-100 rounded-3xl shadow-sm p-8">
            <div>Icon</div>
            <h4 className="text-2xl pb-2">Visual Design</h4>
            <p>
              Get your custom and exceptional work of UI and UX design for both
              website and mobile app interface, illustratinos, motion graphics
              all toward your needs.
            </p>
            <ul className="flex flex-col gap-2 md:text-lg mt-8 mx-8 list-disc">
              <li>Design systems</li>
              <li>Responsive website</li>
              <li>Digital products</li>
              <li>Motion & interaction</li>
              <li>Illustration</li>
              <li>3D design</li>
              <li>Graphics Design</li>
            </ul>
          </div>

          <div className="bg-red-100 rounded-3xl shadow-sm p-8">
            <div>Icon</div>
            <h4 className="text-2xl pb-2">Development</h4>
            <p>
              Our expert Front-end developers are ready to implement the
              aesthetic of designs into codes adopting the latest framework and
              technology.
            </p>
            <ul className="flex flex-col gap-2 md:text-lg mt-8 mx-8 list-disc">
              <li>Front-end development</li>
              <li>CMS integrations</li>
              <li>SEO friendly</li>
              <li>Custom codes</li>
              <li>Web maintenance</li>
              <li>Quality assurance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Work */}
      <div className="min-h-screen bg-white text-black px-[2rem] md:px-[10rem] flex justify-center pb-12">
        <div className="max-w-3xl">
          <div className="pt-12">
            <span className="pb-4 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">
              Work
            </span>
            <h2 className="text-5xl md:text-6xl pb-20 pt-8">
              We knew to be done is good, but sharing our experiences and it
              &quot;works&quot; is way better.
            </h2>
          </div>
          <p className="text-xl md:text-2xl leading-10">
            Our expert team of designers, developers, illustrators and project
            managers work with streamlined processes to{" "}
            <span className="bg-orange-100">
              break through organizational roadblocks.
            </span>{" "}
            We translate research into solutions, crafting thoughtful and
            unified brands, apps, websites, interfaces and systems.
            <br />
            <br />
            Through challenging core assumptions, we shape the products and
            services that{" "}
            <span className="bg-orange-100">
              improve the lives of thousands every single day.
            </span>
          </p>
        </div>
      </div>

      {/* Work 2 */}
      <div className="min-h-screen bg-white text-black flex flex-col md:flex-row justify-center gap-8">
        <div className="max-w-[500px]">
          <span className="pb-4 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">
            2023
          </span>
          <h5 className="text-3xl">Fatherhood Frenzy</h5>
          <p>
            Fatherhood Frenzy is a big booty judy with amazing honky bonk. Like
            comment and subscribe to my channel.
          </p>
          <div className="grid grid-cols-5">
            <div>
              <span className="text-xs tracking-[0.2em] text-gray-500">
                FROM
              </span>
              <h6>Canada</h6>
            </div>
            <div>
              <span className="text-xs tracking-[0.2em] text-gray-500">
                TIMEFRAME
              </span>
              <h6>Retainer / Ongoing</h6>
            </div>
            <div className="col-start-3 col-span-2">
              <span className="text-xs tracking-[0.2em] text-gray-500">
                SERVICES
              </span>
              <h6>Website, Digital Marketing, Design</h6>
            </div>
          </div>

          <div className="min-h-[250px] w-full rounded-3xl bg-gray-100 mt-8 p-8">
            image here
          </div>
        </div>
        <div className="max-w-[500px]">
          <span className="pb-4 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">
            2023
          </span>
          <h5 className="text-3xl">Fatherhood Frenzy</h5>
          <p>
            Fatherhood Frenzy is a big booty judy with amazing honky bonk. Like
            comment and subscribe to my channel.
          </p>
          <div className="grid grid-cols-5">
            <div>
              <span className="text-xs tracking-[0.2em] text-gray-500">
                FROM
              </span>
              <h6>Canada</h6>
            </div>
            <div>
              <span className="text-xs tracking-[0.2em] text-gray-500">
                TIMEFRAME
              </span>
              <h6>Retainer / Ongoing</h6>
            </div>
            <div className="col-start-3 col-span-2">
              <span className="text-xs tracking-[0.2em] text-gray-500">
                SERVICES
              </span>
              <h6>Website, Digital Marketing, Design</h6>
            </div>
          </div>

          <div className="min-h-[250px] w-full rounded-3xl bg-gray-100 mt-8 p-8">
            image here
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="min-h-screen bg-white text-black px-[2rem] md:px-[10rem]">
        <div className="pt-12">
          <span className="pb-4 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">
            Testimonials
          </span>
          <h2 className="text-5xl md:text-6xl max-w-3xl pb-20 pt-8">
            What they said about us from the people we shared expereiences with.
          </h2>
        </div>

        <p>
          We loved working with Jon! They gave outputs very quickly with a high
          quality of work. Aji is a great communicator and team manager and I
          would highly recommend him and Jon for design work.
        </p>

        <div>
          <h6 className="text-lg">Coby Lim</h6>
          <span>Product Manager of PayMongo</span>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <MarqueeText baseVelocity={-5}>Sup baby boy</MarqueeText>
        <MarqueeText baseVelocity={5}> Scroll velocity</MarqueeText>
      </div>

      {/* CTA Banner */}
      <div className="min-h-screen flex justify-center items-center px-20">
        <div className="bg-blue-800 rounded-2xl h-96 flex flex-col justify-center items-center px-4 py-8 md:p-12">
          <h3 className="text-3xl md:text-4xl lg:text-7xl text-center">
            Don&apos;t be surprised at how stunning your project is once you
            have decided
          </h3>
          <button className="bg-green-500 rounded-2xl hover:text-black px-2 py-1">
            Start a Project?
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Main;
