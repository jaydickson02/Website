import PropTypes from 'prop-types';
import Image from 'next/image'

export default function Card({ link, image, title, description }) {
    return (
        <a
            href={link}
            className="overflow-hidden block rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] xs:h-96 md:h-80 mb-6 no-underline transform transition duration-500 hover:scale-105 hover:shadow-[0_4px_30px_-3px_rgba(0,0,0,0.2),0_15px_35px_-5px_rgba(0,0,0,0.1)] group hover:no-underline" style={{ backgroundColor: 'var(--header-color)', color: 'var(--header-text-color)' }}
        >
            <div
                className="relative overflow-hidden bg-cover bg-no-repeat h-32"
                data-te-ripple-init
                data-te-ripple-color="light"
            >
                <Image
                    className="rounded-t-lg object-cover w-full h-full"
                    src={image}
                    alt={title}
                    layout="fill"
                />
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                ></div>
            </div>
            <div className="p-6">
                <h5 className="mb-2 text-xl leading-tight font-bold text-gray-600 dark:text-gray-200 hover:no-underline">
                    {title}
                </h5>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-200 hover:no-underline">
                    {description}
                </p>
            </div>
        </a>
    );
}

Card.propTypes = {
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};