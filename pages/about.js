import Layout from '../components/layout'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

const about = () => {

    return(

        <Layout activeLink={'/about'}>

            <div class=" p-10 rounded-2xl">

            <h1>Hi, I'm Jay Dickson.</h1>
            <div class="flex justify-center p-4">

            </div>
                <p>
                    I am currently a student of <strong>Aerospace Engineering at RMIT</strong>, and I couldn't be more excited about the field I've chosen to study.
                </p>
                <p>
                    In addition to my studies, I have a deep interest in a number of other fields, including Artificial Intelligence, Space, and Economics. I believe that these areas are some of the most dynamic and exciting fields in modern society, and I am always eager to learn more about them.
                </p>
                <p>
                    As a programmer, I have experience working with a variety of programming languages, including Python, JS, and C-Sharp as well as frameworks like react.
                </p>
                <p>
                    Currently, I am also working as a <strong>Digital Technology Officer</strong> at a Primary School, where I am responsible for overseeing the integration of technology into the classroom.
                </p>
            </div>
            <div class="flex justify-center">
            <div class="w-11/12">
                <div class="grid grid-cols-5 gap-2">
                <Image class="rounded-3xl transform -rotate-3 scale-75" src={"/aboutImages/jay-dickson.webp"} alt="Profile" width="360px" height="450px" />
                <Image class="rounded-3xl transform rotate-3 scale-75" src={"/aboutImages/cook-jay.webp"} alt="Profile" width="360px" height="450px" />
                <Image class="rounded-3xl transform -rotate-3 scale-75" src={"/aboutImages/run-jay.webp"} alt="Profile" width="360px" height="450px" />
                <Image class="rounded-3xl transform rotate-3 scale-75" src={"/aboutImages/lm-jay.webp"} alt="Profile" width="360px" height="450px" />
                <Image class="rounded-3xl transform -rotate-3 scale-75" src={"/aboutImages/wine-jay.webp"} alt="Profile" width="360px" height="450px" />
                </div>
            </div>
            </div>
            

        </Layout>
    )
}

export default about
