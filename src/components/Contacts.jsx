import React from 'react';
import { useState } from 'react';

const Contacts = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState('');
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
    })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill in all required fields.');
            return;
        }

        console.log('Form Submitted:', formData);
        ;
        setStatus('Submitted');
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    }

    return (
        <section id="contact" className="bg-gray-50 py-16 px-6">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h1 className="text-4xl font-bold text-amber-500 mb-4 text-center">
                    Contact Me
                </h1>
                <p className="text-gray-600 mb-8 text-center">
                    Have a question or want to work together? Feel free to reach out.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none transition"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none transition"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none transition resize-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl shadow-md transition duration-300"
                    >
                        Send Message
                    </button>

                    {status && (
                        <p
                            className={`mt-3 text-center font-medium ${
                                status === "Submitted!" ? "text-green-600" : "text-red-500"
                            }`}
                        >
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}
export default Contacts
