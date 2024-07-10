import { Container, Typography, Box } from '@mui/material'
import Image from 'next/image'
import PaymentCard from './component/PaymentCard'
import PaymentOptions from './component/PaymentOptions'

export default function Home() {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: 4.5, marginBottom: 5 }}
      >
        <Image src="/logo.svg" alt="Logo Woovi" width={124} height={37} />
      </Box>
      <Typography
        sx={{
          color: 'primary.text',
          fontWeight: 800,
          textAlign: 'center',
          fontSize: 24,
          marginBottom: '32px',
        }}
      >
        João, como você quer pagar?
      </Typography>
      <PaymentCard />
      <PaymentOptions />
    </Container>
  )
}
