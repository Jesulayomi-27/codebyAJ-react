import React, { useState } from "react";
import { toast } from "react-toastify";
import avatar from "../assets/your-image.png";

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const loadingToast = toast.loading("Sending message...");

    try {
      const response = await fetch("https://formspree.io/f/xblyjvnq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.update(loadingToast, {
          render: "Message sent successfully ✅",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });

        e.target.reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.update(loadingToast, {
        render: "Something went wrong ❌",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <section id="contact" className="pt-16 px-4 md:px-12 relative">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E2F] mb-8">
            Contact Information
          </h2>

          {/* Info Items */}
          <div className="space-y-6">
            {[
              { title: "Contact Us", value: "08165153280" },
              { title: "Email", value: "lizabeth2712@gmail.com" },
              { title: "Location", value: "Lagos, Nigeria" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
                  ⚡
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                  <p className="text-[#1E1E2F] font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Text */}
          <p className="mt-10 text-indigo-600 max-w-sm">
            Available for freelance and <br /> full-time opportunities
          </p>

        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-[0px_6px_12px_0px_#0000000D]">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-6">
            Contact With Us
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm">Name*</label>
          <input
            type="text"
            name="name"
            required
            className="w-full mt-1 border rounded-md p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="text-sm">Email*</label>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-1 border rounded-md p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div>
        <label className="text-sm">Subject</label>
        <input
          type="text"
          name="subject"
          className="w-full mt-1 border rounded-md p-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="text-sm">Your Message*</label>
        <textarea
          name="message"
          rows="4"
          required
          className="w-full mt-1 border rounded-md p-3 outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>

      <input type="hidden" name="_subject" value="New Portfolio Message" />
      <input type="text" name="_honey" className="hidden" />

      <button
        type="submit"
        className="w-full bg-[#463ACB] text-white py-3 rounded-full hover:opacity-90 transition"
      >
        Send Message
      </button>
    </form>
        </div>
      </div>

      {/* Avatar */}
          <div className="hidden md:block items-center absolute left-[240px] top-[268px]">
            <img
              src={avatar} 
              alt="avatar"
              className="w-[380px] h-[350px]"
            />
          </div>
    </section>
  );
}