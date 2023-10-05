"use client";
import React, { useState } from "react";
import Image from "next/image";
import images from "@/app/constants/images";
import { client } from "@/sanity/client";
import { ContainerWrap } from "@/app/wrapper";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="bg-slate-200 text-black w-full min-h-screen flex flex-col justify-center items-center">
        <h2 className="font-bold capitalize text-4xl text-center overflow-y-hidden">
          Take a coffee & chat with me
        </h2>

        <div className="w-3/5 flex justify-evenly items-center flex-wrap mt-12 mx-8 mb-8">
          <div className="bg-mellow w-72 flex flex-row justify-start items-center rounded-lg p-4 mx-8 mb-8 mt-12 cursor-pointer">
            <Image className="w-10 h-10 mx-4" src={images.email} alt="email" />
            <a
              href="mailto:geluajm@gmail.com"
              className="text-left text-sm font-medium no-underline"
            >
              geluajm@gmail.com
            </a>
          </div>
          <div className="bg-bluey w-72 flex flex-row justify-start items-center rounded-lg p-4 mx-8 mb-8 mt-12">
            <Image className="w-10 h-10 mx-4" src={images.mobile} alt="phone" />
            <a
              href="tel:+1 (647) 834-1667"
              className="text-left text-sm font-medium no-underline"
            >
              +1 (647) 834-1667
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className="w-3/5 flex flex-col my-4 mx-8 justify-center items-center ">
            <div className="w-full my-3 flex justify-center items-center">
              <input
                className="text-left text-sm w-full p-4 rounded-lg outline-none text-bluey-dark"
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="w-full my-3 flex justify-center items-center">
              <input
                className="text-left text-sm w-full p-4 rounded-lg outline-none text-bluey-dark"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div className="w-full my-3">
              <textarea
                className="text-left text-sm w-full p-4 rounded-lg outline-none text-bluey-dark"
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={handleChangeInput}
              />
            </div>
            <button
              type="button"
              className="bg-coral px-8 py-4 text-left text-sm rounded-lg border-0 font-medium cursor-pointer"
              onClick={handleSubmit}
            >
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="font-extrabold capitalize text-4xl text-center overflow-y-clip">
              Thank you for getting in touch!
            </h3>
          </div>
        )}
      </section>
    </>
  );
};
export default Contact;
