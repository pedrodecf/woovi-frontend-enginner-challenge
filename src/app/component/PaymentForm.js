import React from 'react'
import { TextField, MenuItem, Box, Button, Typography } from '@mui/material'

const PaymentForm = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Nome completo" variant="outlined" fullWidth />
      <TextField label="CPF" variant="outlined" fullWidth />
      <TextField label="Número do cartão" variant="outlined" fullWidth />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField label="Vencimento" variant="outlined" fullWidth />
        <TextField label="CVV" variant="outlined" fullWidth />
      </Box>
      <TextField label="Parcelas" variant="outlined" select fullWidth>
        <MenuItem value="1x de R$ 15.300,00">1x de R$ 15.300,00</MenuItem>
      </TextField>
      <Button
        sx={{
          backgroundColor: 'primary.blue',
          borderRadius: '8px',
          width: '100%',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'primary.darkBlue',
          },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'primary.white',
            fontWeight: 600,
            alignItems: 'center',
          }}
        >
          Pagar
        </Typography>
      </Button>
    </Box>
  )
}

export default PaymentForm
