import React from 'react';
import Footer from '../../Home/Footer';

const Portfolio = () => {
    return (
      <div>
        <div className="grid grid-cols-1  md:grid-cols-2 items-center justify-items-center">
          <div className=" m-5">
            <h6 className="text-2xl font-semibold "> Hi! There,</h6> <br />
            <span className="text-5xl font-bold text-amber-500  pb-3">
              MD. Tanvir
            </span>{" "}
            <br />
            <h3 className="text-3xl text-amber-700">
              I'm a Junior Mern Stack Developer
            </h3>{" "}
            <br />
            <span className="font-bold border-2 p-1 rounded border-current">
              Contact: <a href="mailto:mt140502gmail.com">mt14050@gmail.com</a>
            </span>
          </div>
          <div className="m-5">
            <img
              className="bg-amber-300"
              style={{
                borderRadius: "0% 93% 0% 100% / 74% 97% 100% 100% ",
              }}
              src="https://i.ibb.co/vdVS3hd/IMG-2149-Copy-removebg-preview-1.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center">Skills</h1>
        </div>
        <div>
          <div className="mx-auto w-2/4">
            <p className="font-bold">HTML</p>
            <progress
              class="progress progress-success  w-11/12 h-3"
              value="85"
              max="100"
            ></progress>
          </div>
          <div className="mx-auto w-2/4">
            <p className="font-bold">CSS</p>
            <progress
              class="progress progress-secondary  w-11/12 h-3"
              value="85"
              max="100"
            ></progress>
          </div>
          <div className="mx-auto w-2/4">
            <p className="font-bold">BOOTSTRAP</p>
            <progress
              class="progress progress-success w-11/12 h-3"
              value="75"
              max="100"
            ></progress>
          </div>
          <div className="mx-auto w-2/4">
            <p className="font-bold">TAILWIND</p>
            <progress
              class="progress progress-secondary  w-11/12 h-3"
              value="55"
              max="100"
            ></progress>
          </div>
          <div className="mx-auto w-2/4">
            <p className="font-bold">JAVASCRIPT</p>
            <progress
              class="progress progress-success  w-11/12 h-3"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="mx-auto w-2/4">
            <p className="font-bold">REACT</p>
            <progress
              class="progress progress-secondary  w-11/12 h-3"
              value="60"
              max="100"
            ></progress>
          </div>
          <div className="mx-auto w-2/4">
            <p className="font-bold">FIREBASE</p>
            <progress
              class="progress progress-success  w-11/12 h-3"
              value="55"
              max="100"
            ></progress>
          </div>
          <div className="mx-auto w-2/4">
            <p className="font-bold">NODE</p>
            <progress
              class="progress progress-secondary  w-11/12 h-3"
              value="50"
              max="100"
            ></progress>
          </div>
          <div className="mx-auto w-2/4">
            <p className="font-bold">EXPRESS</p>
            <progress
              class="progress progress-success  w-11/12 h-3"
              value="60"
              max="100"
            ></progress>
          </div>
          <div className="mx-auto w-2/4">
            <p className="font-bold">MONGODB</p>
            <progress
              class="progress progress-secondary  w-11/12 h-3"
              value="55"
              max="100"
            ></progress>
          </div>
        </div>

        <div className="my-12">
          <h1 className="text-center font-bold pb-9 text-3xl">My Projects</h1>
          <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/6ngCvXp/Doccure.png"
                  alt="Doctors site"
                />
              </figure>
              <div class="card-body">
                <div class="card-actions justify-center">
                  <a target="_blank" href="https://doccure-244.netlify.app/">
                    <button class="btn btn-primary">Live Site</button>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://i.ibb.co/YyLMLh9/CAR-DELIVER-1.png"
                    alt="Car site"
                  />
                </figure>
                <div class="card-body">
                  <div class="card-actions justify-center">
                    <a href="https://assignment-11-71417.web.app/" target="_blank">
                      <button class="btn btn-primary">Live Site</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/zQ8hKdg/Gadget-Hub.png"
                  alt="Gadget-hub"
                />
              </figure>
              <div class="card-body">
                <div class="card-actions justify-center">
                  <a
                    href="https://gadget-hub-hero.netlify.app/"
                    target="_blank"
                  >
                    <button class="btn btn-primary">Live Site</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
            </div>
            <Footer></Footer>
      </div>
    );
};

export default Portfolio;