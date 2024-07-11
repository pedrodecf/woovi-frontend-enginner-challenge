import { Box, Typography } from '@mui/material'

const PaymentCet = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px 0',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 600,
          fontSize: '14px',
          color: 'primary.text',
        }}
      >
        CET: {props.cet}%
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 600,
          fontSize: '18px',
          color: 'primary.text',
        }}
      >
        Total: R$ {props.value}
      </Typography>
    </Box>
  )
}

export default PaymentCet
