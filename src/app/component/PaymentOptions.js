'use client'

import React, { useState } from 'react'
import { Card, CardContent, Grid, Typography, Chip, Box } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const PaymentCard = ({
  installment,
  amount,
  total,
  selected,
  onSelect,
  bestOption,
  fees,
  isFirst,
  isLast,
}) => {
  return (
    <Card
      sx={{
        borderRadius: isFirst
          ? '10px 10px 0 0'
          : isLast
            ? '0 0 10px 10px'
            : '0',
        borderTop: isFirst || selected ? '2px solid #E5E5E5' : 'none',
        borderBottom: '2px solid #E5E5E5',
        borderLeft: '2px solid #E5E5E5',
        borderRight: '2px solid #E5E5E5',
        maxWidth: 400,
        borderColor: selected ? '#03D69D' : '#E5E5E5',
        padding: '20px',
        position: 'relative',
        overflow: 'visible',
        backgroundColor: selected ? '#F4FBF9' : 'white',
        cursor: 'pointer',
      }}
      onClick={onSelect}
    >
      {isFirst && (
        <Chip
          label="Pix Parcelado"
          sx={{
            backgroundColor: 'primary.gray',
            color: 'primary.text',
            borderRadius: '100px',
            fontWeight: 800,
            position: 'absolute',
            top: '-15px',
            fontSize: '18px',
            lineHeight: '24px',
            width: '157px',
            height: '27px',
          }}
        />
      )}
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                fontSize: '1.5rem',
                color: 'primary.text',
              }}
            >
              <Typography
                variant="body1"
                component="span"
                sx={{
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  color: 'primary.text',
                }}
              >
                {installment}x
              </Typography>{' '}
              R$ {amount}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'primary.lightGray',
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              Total: R$ {total}
            </Typography>
          </Grid>
          <Grid item>
            {selected ? (
              <CheckCircleIcon sx={{ color: 'primary.main' }} />
            ) : (
              <RadioButtonUncheckedIcon sx={{ color: 'primary.gray' }} />
            )}
          </Grid>
        </Grid>
        {bestOption && (
          <Box
            mt={1}
            sx={{
              backgroundColor: 'primary.blue',
              borderRadius: 1,
              padding: '6px 10px',
              display: 'flex',
              alignItems: 'center',
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
              <Typography
                variant="body2"
                component="span"
                sx={{
                  color: 'primary.white',
                  fontWeight: 800,
                  alignItems: 'center',
                }}
              >
                -{fees}% de juros:{' '}
              </Typography>
              Melhor opção de parcelamento
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

const PaymentOptions = (props) => {
  const [selectedOption, setSelectedOption] = useState(0)

  const options = [
    {
      id: 1,
      installment: 2,
      amount: '15.300,00',
      total: '30.600,00',
      bestOption: false,
    },
    {
      id: 2,
      installment: 3,
      amount: '10.196,66',
      total: '30.620,00',
      bestOption: false,
    },
    {
      id: 3,
      installment: 4,
      amount: '7.725,00',
      total: '30.900,00',
      bestOption: true,
    },
    {
      id: 4,
      installment: 5,
      amount: '6.300,00',
      total: '31.500,00',
      bestOption: false,
    },
    {
      id: 5,
      installment: 6,
      amount: '5.283,33',
      total: '31.699,98',
      bestOption: false,
    },
    {
      id: 6,
      installment: 7,
      amount: '4.542,85',
      total: '31.800,00',
      bestOption: false,
    },
  ]

  return (
    <Box {...props}>
      {options.map((option, index) => (
        <PaymentCard
          key={option.id}
          installment={option.installment}
          amount={option.amount}
          total={option.total}
          selected={selectedOption === option.id}
          onSelect={() => setSelectedOption(option.id)}
          bestOption={option.bestOption}
          fees={3}
          isFirst={index === 0}
          isLast={index === options.length - 1}
        />
      ))}
    </Box>
  )
}

export default PaymentOptions
