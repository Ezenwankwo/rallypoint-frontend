import React, { useState } from "react";
import Container from "./container";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, company, email, website, message });
    };

    return (
        <Container>
            <div className="space-y-6">
                <h3 className="text-3xl font-bold leading-6 text-gray-900">Get in Touch</h3>
                <p className="text-gray-600 mt-0">We will reach you via email, be sure to use a valid email.</p>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 md:col-span-2">
                            <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="col-span-6 md:col-span-2">
                            <label htmlFor="company" className="block font-medium text-gray-700">Company</label>
                            <input
                                type="text"
                                name="company"
                                id="company"
                                className="w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-6 my-6">
                        <div className="col-span-6 md:col-span-2">
                            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email" 
                                id="email"
                                className="w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="col-span-6 md:col-span-2">
                            <label htmlFor="website" className="block font-medium text-gray-700">Website</label>
                            <input
                                type="text"
                                name="website"
                                id="website"
                                className="w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                        <div class="col-span-6 md:col-span-2">
                            <label htmlFor="about" className="block font-medium text-gray-700">Message</label>
                            <div className="mt-1">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows="3"
                                    className="w-full px-3 py-2 placeholder-gray-400 bg-white border border-gray-300 rounded-md h-28 focus:outline-none focus:ring"
                                    placeholder="write an optional message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="px-6 py-2 mt-3 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">Send</button>
                </form>
            </div>
        </Container>
    );
}