import { Slide, Bounce } from 'react-awesome-reveal';

const WhatWeOffer = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 pt-28">
                <Slide triggerOnce>
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                        What we offer
                    </h1>
                </Slide>
                <div className="mt-8 lg:-mx-12 lg:flex xl:mt-16">
                    <div className="lg:mx-12">
                        <div className="mt-4 space-y-4 lg:mt-8">
                            <a
                                href="#"
                                className="block text-blue-500 hover:underline dark:text-blue-400"
                            >
                                Web design
                            </a>
                            <a
                                href="#"
                                className="block text-gray-500 hover:underline dark:text-gray-300"
                            >
                                App design
                            </a>
                            <a
                                href="#"
                                className="block text-gray-500 hover:underline dark:text-gray-300"
                            >
                                Branding
                            </a>
                            <a
                                href="#"
                                className="block text-gray-500 hover:underline dark:text-gray-300"
                            >
                                Animation
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 flex-1 lg:mx-12 lg:mt-0">
                        <Bounce cascade triggerOnce>
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                                <div>
                                    <img
                                        className="h-96 w-full rounded-lg object-cover"
                                        src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                                        alt=""
                                    />
                                    <h2 className="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">
                                        Best website collections
                                    </h2>
                                    <p className="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">
                                        Website
                                    </p>
                                </div>
                                <div>
                                    <img
                                        className="h-96 w-full rounded-lg object-cover"
                                        src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                        alt=""
                                    />
                                    <h2 className="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">
                                        Block of Ui kit collections
                                    </h2>
                                    <p className="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">
                                        Ui kit
                                    </p>
                                </div>
                                <div>
                                    <img
                                        className="h-96 w-full rounded-lg object-cover"
                                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                        alt=""
                                    />
                                    <h2 className="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">
                                        Ton’s of mobile mockup
                                    </h2>
                                    <p className="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">
                                        Mockups
                                    </p>
                                </div>
                            </div>
                        </Bounce>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
