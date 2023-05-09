import Layout from '../shared/layout'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

const about = () => {

    return(

        <Layout activeLink={'/about'}>

        <Row>

        </Row>
    
        <Row>

        <Col sm={12} md={4} lg={4}>

            <Image class="ProfileImage" src={"/jay-dickson.webp"} alt="Profile" width="1440px" height="1800px" />
            
       </Col>

        <Col sm={12} md={8} lg={8}>

        <Container class="aboutInfo">
            <p>
                Welcome,
            </p>
            <p>
                Thank you for taking the time to visit my About page! My name is Jay Dickson, and I am thrilled to have the opportunity to share a little bit about myself with you.
            </p>
            <p>
                I am currently a student of Aerospace Engineering at RMIT, and I couldn't be more excited about the field I've chosen to study. I have always been fascinated by science and technology, and I feel incredibly lucky to be able to pursue my passion in a field that has the potential to change the world.
            </p>
            <p>
                In addition to my studies, I have a deep interest in a number of other fields, including Machine Learning, Artificial Intelligence, Space, and Economics. I believe that these areas are some of the most dynamic and exciting fields in modern society, and I am always eager to learn more about them.
            </p>
            <p>
                As a programmer, I have experience working with a variety of programming languages, including Python, JS, and C-Sharp. Whether I'm building complex algorithms or designing intuitive user interfaces, I am always looking for new challenges and ways to innovate.
            </p>
            <p>
                Currently, I am also working as a Digital Technology Officer at a Primary School, where I am responsible for overseeing the integration of technology into the classroom. This role has given me invaluable experience in working with both students and teachers, and has reinforced my belief in the importance of technology in modern education.
            </p>
            <p>
                I am excited about the future and the possibilities that it holds. I am always looking for new ways to innovate and explore in the world of technology and engineering, and I am eager to see where my journey takes me.
            </p>
            <p>
                Thank you for taking the time to learn more about me. If you have any questions or would like to connect, please don't hesitate to reach out.
            </p>
            <p>
                Kind regards,
            </p>
            <p class="signiture">
                Jay Dickson
            </p>
        </Container>

        </Col>

        </Row>

        </Layout>
    )
}

export default about
