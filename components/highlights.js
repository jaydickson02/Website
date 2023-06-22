import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';


export default function Highlights() {
    return(
<section>
  <div class="max-w-screen-2xl p-4 py-8 sm:py-12 lg:py-16">
    <div
      class="grid xs: grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
    >
      <div
        class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
      >
        <h2 class="text-3xl font-bold sm:text-4xl">Jay Dickson | Student. Engineer. Developer.</h2>

        <p class="mt-4 text-gray-600 dark:text-gray-200">
          I'm a student at RMIT studying aerospace engineering. I'm passionate about technology, space and software. I hope to someday make my mark in this crazy universe.
        </p>

        {/* <a
          href="#"
          class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a> */}
      </div>

      <div class="grid lg:grid-cols-1 md:grid-cols-2 xs:grid-cols-1 gap-4">
        <div>
        <a
          class="block rounded-xl border-gray-100 p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:border-gray-400 hover:ring-1 hover:ring-gray-400 dark:hover:border-gray-200 dark:hover:ring-1 dark:hover:ring-gray-200 focus:outline-none focus:ring h-42 dark:bg-bulletGray no-underline hover:no-underline lg:h-28 h-40 flex items-center justify-center"
          href="https://github.com/jaydickson02"
        >

            <div class="grid grid-cols-3 lg:gap-4 sm:gap-2 w-full">
            <div class="flex items-center justify-center">
                <span class="inline-block rounded-xl bg-gray-50 p-1 text-gray-900 h-16 w-16 flex justify-center items-center">
                <FaGithub class="w-full h-full"/>
                </span>
            </div>
          
            <div class="col-span-2">
          <h5 class="mt-2 font-bold text-gray-600 dark:text-gray-200">Github</h5>

          <p class="mt-1 text-sm text-gray-600 dark:text-gray-200">
            Check out my github to see the code behind my projects.
          </p>
          </div>
          </div>
        </a>
        
        </div>

        <div>

        <a
          class="block rounded-xl border-gray-100 p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:border-gray-400 hover:ring-1 hover:ring-gray-400 dark:hover:border-gray-200 dark:hover:ring-1 dark:hover:ring-gray-200 focus:outline-none focus:ring h-42 dark:bg-bulletGray no-underline hover:no-underline lg:h-28 h-40 flex items-center justify-center"
          href="https://www.accentedapparel.shop"
        >
        <div class="grid grid-cols-3 lg:gap-4 sm:gap-2 w-full">
            <div class="flex items-center justify-center">
            <span class="inline-block rounded-xl bg-gray-50 h-16 w-16 p-1 flex justify-center items-center">
                <Image src="/storelogo.png" alt="Accented Apparel" width={1024} height={1024} priority/>
            </span>
            </div>
            <div class="col-span-2">
                <h5 class="mt-2 font-bold text-gray-600 dark:text-gray-200">Shop</h5>

                <p class="text-sm text-gray-600 dark:text-gray-200">
                    Check out my shop where I sell fun embridered apparel.
                </p>
            </div>
          </div>
        </a>

        </div>

      </div>
    </div>
  </div>
</section>
    )
}