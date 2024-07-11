import { Box, Typography } from '@mui/material'

const PaymentTerm = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      <Typography
        sx={{
          color: 'primary.lightGray',
          fontWeight: 600,
        }}
      >
        Prazo de pagamento:
      </Typography>
      <Typography
        sx={{
          color: 'primary.text',
          fontWeight: 800,
        }}
      >
        {props.date}
      </Typography>
    </Box>
  )
}

export default PaymentTerm
