import { Container } from '@mui/material'
import PaymentCard from '../component/PaymentCard'
import PaymentOptions from '../component/PaymentOptions'
import Footer from '../component/Footer'
import Header from '../component/Header'

export default function Home() {
  return (
    <Container>
      <Header client="João" />
      <PaymentCard />
      <PaymentOptions sx={{ marginTop: '36px' }} />
      <Footer />
    </Container>
  )
}
