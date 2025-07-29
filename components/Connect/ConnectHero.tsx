import React from 'react'

const ConnectHero = () => {
    return (
        <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
                <div className="text-center md:text-left">
                    <h1 className="text-7xl font-bold text-blue-900">Contact Us</h1>
                    <p className="mt-4 mb-[50px] text-lg">
                        Get in touch with our amazing support team. Simply complete the
                        form with your inquiry or reach out to us through the contact
                        options provided below.
                    </p>
                    <div className="mt-8 space-y-4">
                        <button className="flex px-5 py-2 items-center bg-white rounded-2xl space-x-4">
                            <div className="flex items-center justify-center w-9 h-9 bg-blue-100 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-blue-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 7.5l8.954 4.477c.289.144.63.144.918 0L21.75 7.5m-19.5 0a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25m-19.5 0v9a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-9m-9 6.75h.008v.008H12v-.008z"
                                    />
                                </svg>
                            </div>
                            <p className="text-[#282781] font-medium">Support: +220 7762666</p>
                        </button>
                        <button className="flex items-center px-3 py-2 bg-white rounded-2xl space-x-4">
                            <div className="flex items-center justify-center w-9 h-9 bg-blue-100 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-blue-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.75 4.75A2.25 2.25 0 007 7v10a2.25 2.25 0 01-2.25 2.25h-.5a2.25 2.25 0 01-2.25-2.25V7a2.25 2.25 0 012.25-2.25h.5zm0 0L20.25 12M4.75 19.25L20.25 12M20.25 12v4.75a2.25 2.25 0 01-2.25 2.25h-.5a2.25 2.25 0 01-2.25-2.25v-.5"
                                    />
                                </svg>
                            </div>
                            <p className="text-[#282781] font-medium">WhatsApp: +220 7762666</p>
                        </button>
                        <button className="flex px-7 py-2 items-center bg-white rounded-2xl space-x-4">
                            <div className="flex items-center justify-center w-9 h-9 bg-blue-100 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-blue-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                            </div>
                            <p className="text-[#282781] font-medium">Email: cc@gmail.com</p>
                        </button>
                    </div>
                </div>

                <div className="p-8">
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="placeholder-gray-400 w-full px-4 py-4 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="placeholder-gray-400 w-full px-4 py-4 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <input
                            type="text"
                            placeholder="Country"
                            className="placeholder-gray-400 w-full px-4 py-4 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <textarea
                            placeholder="Message"

                            className="placeholder-gray-400 w-full px-4 py-5 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-blue-900 font-semibold text-white py-4 rounded-xl hover:bg-blue-800"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConnectHero