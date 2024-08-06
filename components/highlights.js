import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Highlights() {
    return (
        <div className="container mx-auto">
            <div>
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                    <div className="text-center ltr:lg:text-left rtl:lg:text-right">
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl">
                            Jay Dickson
                        </h1>
                        <h2 className="text-2xl font-semibold text-indigo-600 mt-2">
                            Student. Engineer. Developer.
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-200">
                            I'm a student at RMIT studying aerospace engineering. I'm passionate about technology, space, and software. I hope to someday make my mark in this crazy universe.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-1 lg:items-center lg:gap-x-4">
                        <div>
                            <a
                                className="block rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-4 no-underline transform transition duration-500 hover:scale-105 hover:shadow-[0_4px_30px_-3px_rgba(0,0,0,0.2),0_15px_35px_-5px_rgba(0,0,0,0.1)] hover:no-underline focus:outline-none focus:ring" style={{ backgroundColor: 'var(--header-color)', color: 'var(--header-text-color)' }}
                                href="https://github.com/jaydickson02"
                                aria-label="GitHub"
                            >
                                <div className="grid grid-cols-3 gap-4 w-full h-42 lg:h-28 items-center justify-center">
                                    <div className="flex items-center justify-center">
                                        <span className="flex rounded-xl bg-gray-50 p-1 text-gray-900 h-16 w-16 justify-center items-center">
                                            <FaGithub className="w-full h-full" />
                                        </span>
                                    </div>
                                    <div className="col-span-2">
                                        <h5 className="mt-2 font-bold text-gray-600 dark:text-gray-200">GitHub</h5>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-200">
                                            Check out my GitHub to see the code behind my projects.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Uncomment and use this block if you want to add more links
                        <div>
                            <a
                                className="block rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-4 dark:bg-bulletGray no-underline transform transition duration-500 hover:scale-105 hover:shadow-[0_4px_30px_-3px_rgba(0,0,0,0.2),0_15px_35px_-5px_rgba(0,0,0,0.1)] hover:no-underline focus:outline-none focus:ring"
                                href="https://www.accentedapparel.shop"
                                aria-label="Shop"
                            >
                                <div className="grid grid-cols-3 gap-4 w-full h-42 lg:h-28 flex items-center justify-center">
                                    <div className="flex items-center justify-center">
                                        <span className="inline-block rounded-xl bg-gray-50 h-16 w-16 p-1 flex justify-center items-center">
                                            <Image src="/StoreLogo.png" alt="Accented Apparel" width={1024} height={1024} priority />
                                        </span>
                                    </div>
                                    <div className="col-span-2">
                                        <h5 className="mt-2 font-bold text-gray-600 dark:text-gray-200">Shop</h5>
                                        <p className="text-sm text-gray-600 dark:text-gray-200">
                                            Check out my shop where I sell fun embroidered apparel.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        */}
                    </div>
                </div>
            </div>
        </div>
    );
}
