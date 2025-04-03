import React from "react";

const Contact = () => {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center">Contact Us</h1>
            <p className="mt-4 text-center">
                Have questions? We'd love to hear from you! Fill out the form
                below, and we'll get back to you as soon as possible.
            </p>

            <form className="mt-6 bg-white p-6 rounded shadow">
                <label className="block mb-2 font-semibold">Name</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Your Name"
                    required
                />

                <label className="block mt-4 mb-2 font-semibold">Email</label>
                <input
                    type="email"
                    className="w-full p-2 border rounded"
                    placeholder="Your Email"
                    required
                />

                <label className="block mt-4 mb-2 font-semibold">Message</label>
                <textarea
                    className="w-full p-2 border rounded"
                    rows="4"
                    placeholder="Your Message"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
