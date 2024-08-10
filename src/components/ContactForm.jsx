import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("haile_1112", "emailTemp", form.current, {
        publicKey: "rKsSAKmUeIFuVFRyc",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast("Wow so easy!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast("Wow so easy!");
        }
      );
  };
  return (
    <div className="bg-background dark:bg-on-background-light rounded-lg">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto py-5 px-10"
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            name="name" // Added name attribute
            id="name"
            placeholder="eg. John Doe"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email" // Added name attribute
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@gmail.com"
            required
          />
        </div>

        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="message" // Added name attribute
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
        <button
          type="submit"
          className="text-white hover:bg-acitive2 bg-acitive focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactForm;
