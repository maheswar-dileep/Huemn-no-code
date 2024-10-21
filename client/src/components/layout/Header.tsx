const Header = () => {
    return (
        <nav className="container mx-auto lg:flex lg:items-center lg:justify-between bg-white">
            <div className="flex items-center justify-between">
                <div>
                    <a
                        className="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
                        href="#"
                    >
                        Huemn
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
                        aria-label="toggle menu"
                    >
                        <svg
                            x-show="!isOpen"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 8h16M4 16h16"
                            />
                        </svg>

                        <svg
                            x-show="isOpen"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className=" opacity-0 -translate-x-full absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent">
                <a
                    className="mt-4 block h-10 transform rounded-md border px-5 py-2 text-center text-sm capitalize text-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 lg:mt-0 lg:w-auto"
                    href="#"
                >
                    Contact Us
                </a>
            </div>
        </nav>
    );
};

export default Header;
