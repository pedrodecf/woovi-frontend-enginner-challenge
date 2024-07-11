'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField, MenuItem, Box, Button, Typography } from '@mui/material'
import { z } from 'zod'

const paymentFormSchema = z.object({
  fullName: z.string().min(1, 'Nome completo é obrigatório'),
  cpf: z.string().length(11, 'CPF deve ter 11 dígitos'),
  cardNumber: z.string().length(16, 'Número do cartão deve ter 16 dígitos'),
  expirationDate: z.string().min(1, 'Data de vencimento é obrigatória'),
  cvv: z.string().length(3, 'CVV deve ter 3 dígitos'),
  installments: z.string().min(1, 'Selecione uma opção de parcelas'),
})

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(paymentFormSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        label="Nome completo"
        variant="outlined"
        fullWidth
        {...register('fullName')}
        error={!!errors.fullName}
        helperText={errors.fullName?.message}
      />
      <TextField
        label="CPF"
        variant="outlined"
        fullWidth
        {...register('cpf')}
        error={!!errors.cpf}
        helperText={errors.cpf?.message}
      />
      <TextField
        label="Número do cartão"
        variant="outlined"
        fullWidth
        {...register('cardNumber')}
        error={!!errors.cardNumber}
        helperText={errors.cardNumber?.message}
      />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="Vencimento"
          variant="outlined"
          fullWidth
          {...register('expirationDate')}
          error={!!errors.expirationDate}
          helperText={errors.expirationDate?.message}
        />
        <TextField
          label="CVV"
          variant="outlined"
          fullWidth
          {...register('cvv')}
          error={!!errors.cvv}
          helperText={errors.cvv?.message}
        />
      </Box>
      <TextField
        label="Parcelas"
        variant="outlined"
        select
        fullWidth
        {...register('installments')}
        error={!!errors.installments}
        helperText={errors.installments?.message}
      >
        <MenuItem
          value="1x de R$ 15.300,00"
          sx={{
            maxWidth: '90%',
          }}
        >
          1x de R$ 15.300,00
        </MenuItem>
      </TextField>
      <Button
        type="submit"
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
