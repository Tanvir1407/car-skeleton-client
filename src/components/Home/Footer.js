import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
      <div>
        <div>
          <div
            className="grid grid-cols-1 lg:grid-cols-3 px-12 py-10 gap-10 text-white"
            style={{ backgroundColor: "#233350" }}
          >
            <div>
              <img
                className=" rounded-2xl mb-5"
                src={
                  "https://www.simpleimageresizer.com/_uploads/photos/3eaf59d2/download_68_1_180x68.png"
                }
                alt=""
              />
              <p>
                Find the right parts faster at CarSkeleton.com - now with a
                Lifetime ... Over 50 million car parts delivered from your
                favorite discount auto parts store
              </p>
            </div>
            <div className="lg:mx-auto">
              <h4 className="text-2xl font-semibold mb-6 ">FOLLOW US</h4>
              <div>
                <p>
                  <FontAwesomeIcon className="pr-3 " icon={faFacebook} />{" "}
                  Facebook
                </p>
                <p>
                  <FontAwesomeIcon className="pr-3 " icon={faTwitter} /> Twitter
                </p>
                <p>
                  <FontAwesomeIcon className="pr-3" icon={faGithub} /> Github
                </p>
                <p>
                  <FontAwesomeIcon className="pr-3" icon={faLinkedin} />{" "}
                  Linkedin
                </p>
              </div>
            </div>
            <div>
              <div>
                <h4 className="text-2xl font-semibold mb-6">LOCATION</h4>
                <p>
                  <FontAwesomeIcon className="pr-3" icon={faLocationDot} /> 220E
                  Front St. Burlington NC 27215
                </p>
                <p>
                  <FontAwesomeIcon className="pr-3" icon={faPhone} /> (007) 123
                  456 7890
                </p>
                <p>
                  <FontAwesomeIcon className="pr-3" icon={faEnvelope} />{" "}
                  support@website.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;