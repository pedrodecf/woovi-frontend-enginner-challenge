import { Container, Divider } from '@mui/material'
import Header from '../component/Header'
import Footer from '../component/Footer'
import PaymentSteps from '../component/PaymentSteps'
import PaymentCet from '../component/PaymentCet'
import PaymentTerm from '../component/PaymentTerm'
import QrCode from '../component/QrCode'
import HowItWorks from '../component/HowItWorks'
import Identifier from '../component/Identifier'

export default function Home() {
  return (
    <Container>
      <Header client="João" message="pague a entrada de R$15.300,00 pelo Pix" />
      <QrCode />
      <PaymentTerm date="15/12/2021 - 08:17" />
      <PaymentSteps step="one" />
      <Divider sx={{ my: 0 }} />
      <PaymentCet cet="0,5" value="30.600,00" />
      <Divider sx={{ my: 0 }} />
      <HowItWorks
        title="Como funciona?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <Divider sx={{ my: 0 }} />
      <Identifier sessionId="2c1b951f356c4680b13ba1c9fc889c47" />
      <Footer />
    </Container>
  )
}
