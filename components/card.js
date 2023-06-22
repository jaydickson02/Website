
export default function card(props){
    // Initialization for ES Users

    return(
    <a href={props.link} class="block rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-bulletGray h-72 mb-6 no-underline hover:no-underline transform hover:scale-105">
  <div
    class="relative overflow-hidden bg-cover bg-no-repeat"
    data-te-ripple-init
    data-te-ripple-color="light">
    <div class="h-32 overflow-hidden">
    <img
      class="rounded-t-lg object-cover"
      src={props.image}
      alt="" />
    </div>
    <a href={props.link}>
      <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 "></div>
    </a>
  </div>

  <div class="p-6">
    <h5
      class="mb-2 text-xl leading-tight font-bold text-gray-600 dark:text-gray-200">
      {props.title}
    </h5>
    <p class="mb-4 text-base text-gray-600 dark:text-gray-200">
      {props.description}
    </p>
  </div>
  </a>
    )
}