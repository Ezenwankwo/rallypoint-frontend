import React, { useState } from "react";
import Container from "./container";
import { toast } from "react-toastify"

export default function ContactForm() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, company, email, website, message });
        const data = { name, company, email, website, message };
        fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text/plain, */*",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log('Response received');
            if (res.status === 200) {
                console.log('Response succeeded!');
                setName("");
                setCompany("");
                setEmail("");
                setWebsite("");
                setMessage("");
                toast.success("Message sent successfully! We will get in touch");
            } else {
                toast.error("Message failed to send, try again or email us at consultrallypoint@gmail.com.");
            }
        });
    };

    return (
        <Container>
            <div className="space-y-6">
                <h3 className="text-3xl font-bold leading-6 text-gray-900">Get in Touch</h3>
                <p className="text-gray-600 mt-0">We will reach you via email, be sure to use a valid email address.</p>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 md:col-span-2">
                            <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
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
                                required
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
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="col-span-6 md:col-span-2">
                            <label htmlFor="website" className="block font-medium text-gray-700">Website</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">https://</span>
                                <input
                                    type="text"
                                    name="website"
                                    id="website"
                                    className="w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded rounded-r-md focus:outline-none focus:ring"
                                    placeholder="www.yourcompany.com"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 md:col-span-2">
                            <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
                            <div className="mt-1">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    className="w-full px-3 py-2 placeholder-gray-400 bg-white border border-gray-300 rounded-md h-28 focus:outline-none focus:ring"
                                    required
                                    placeholder="write your message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="px-6 py-2 mt-3 text-lg font-medium text-center text-white bg-purple-900 rounded-md ">Send</button>
                </form>
            </div>
        </Container>
    );
}