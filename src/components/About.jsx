import React from "react";

const About = () => {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center">About Us</h1>
            <p className="mt-4 text-center">
                Welcome to{" "}
                <span className="font-semibold">[Your Company Name]</span>. We
                are dedicated to [your mission] and strive to [your objective].
            </p>

            <div className="mt-4 p-4 bg-white rounded shadow">
                <h2 className="text-xl font-semibold">Our Story</h2>
                <p className="mt-2">
                    Founded in [year], we have been committed to providing [what
                    you offer] with a focus on [key values].
                </p>
            </div>

            <div className="mt-4 p-4 bg-white rounded shadow">
                <h2 className="text-xl font-semibold">Our Mission</h2>
                <p className="mt-2">
                    Our team consists of passionate individuals who believe in
                    [core company belief]. We strive to make a difference by
                    [how you impact your industry or community].
                </p>
            </div>

            <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold">Get in Touch</h2>
                <p className="mt-2">
                    Have questions? Reach out to us at{" "}
                    <span className="text-blue-500">
                        [Your Contact Information]
                    </span>
                    .
                </p>
            </div>
        </div>
    );
};

export default About;
