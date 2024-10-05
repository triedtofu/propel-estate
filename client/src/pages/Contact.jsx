import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add functionality to store or send the information
    console.log({ email, subject, message });
    setSubmitted(true);
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-[5%]">
      <div className="flex justify-start">
        <div
          className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg mx-4 sm:mx-0"
          style={{ marginLeft: '25%' }}
        >
          <h2 className="text-2xl font-semibold mb-4">Submit a Ticket</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex flex-col sm:flex-row">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mr-2 sm:w-1/3"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full sm:w-2/3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500 p-2"
                placeholder="Your email"
              />
            </div>

            <div className="mb-6 flex flex-col sm:flex-row">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mr-2 sm:w-1/3"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="block w-full sm:w-2/3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500 p-2"
                placeholder="Subject"
              />
            </div>

            <div className="mb-6 flex flex-col sm:flex-row">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mr-2 sm:w-1/3"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full sm:w-2/3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500 p-2"
                placeholder="Your message"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
          {submitted && (
            <span className="mt-4 text-green-600 block">
              Thank you! Our team will respond shortly.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
