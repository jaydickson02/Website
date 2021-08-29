import Layout from '../shared/layout'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

const cryptocurrency = () => {

return(

    <Layout>

    

    <Container>

        <Row>
            <Col>
            <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script> <div class="livecoinwatch-widget-5" lcw-base="AUD" lcw-color-tx="#999999" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="10" ></div>

            </Col>
        </Row>
    
        <Row>
        
            <Col>

            

            <h2> Plodding Pirates</h2>
            <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script>

            <hr />
            
                <nft-card
                contractAddress="0xf407b994f05d2b2ca66534517a9c85a117db54a5"
                tokenId="741">
                </nft-card>

            <hr />

                <nft-card
                contractAddress="0xf407b994f05d2b2ca66534517a9c85a117db54a5"
                tokenId="747">
                </nft-card>

            <hr />

            
    
    
            </Col>
        </Row>
    </Container>
    

    </Layout>
    
)
    
}


export default cryptocurrency