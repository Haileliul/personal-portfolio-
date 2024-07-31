import React from "react";
// import Images from "../assets/images";
import Com from "../components/index";

const contactPage = () => {
  return (
    <div className=" container flex justify-center items-center ">
      <div className="w-full h-fit grid lg:grid-cols-2 my-40 shadow-lg ">
        <div className=" hidden  lg:grid lg:grid-rows-4   col-span-1 ml-20 ">
          <div className=" lg:row-span-3 w-4/5   bg-blue-800 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d125067.45045996022!2d37.3933957!3d11.597818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644d23307d78069%3A0xab0b134f632dff8!2sBahir%20Dar!5e0!3m2!1sen!2set!4v1716360337501!5m2!1sen!2set"
              style={{ border: 0 }}
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bahir Dar Map"
            />
          </div>
          <div className="row-span-1 ">
            <p>This is contact</p>
          </div>
        </div>
        <div className=" lg:col-span-1 ">
          <div className="">
            <Com.ContactForm />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default contactPage;
