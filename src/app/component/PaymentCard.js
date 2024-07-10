'use client'

import React, { useState } from 'react'
import { Card, CardContent, Grid, Typography, Chip, Box } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const PaymentCard = () => {
  const [selected, setSelected] = useState(false)

  const handleSelect = () => {
    setSelected(!selected)
  }

  return (
    <Card
      sx={{
        borderRadius: '10px',
        maxWidth: 400,
        margin: '15px',
        border: selected ? '2px solid #03D69D' : '2px solid #E5E5E5',
        padding: '20px',
        position: 'relative',
        overflow: 'visible',
        backgroundColor: selected ? '#F4FBF9' : 'white',
        cursor: 'pointer',
      }}
      onClick={handleSelect}
    >
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container alignItems="center">
          <Grid item>
            <Chip
              label="Pix"
              sx={{
                backgroundColor: 'primary.gray',
                color: 'primary.text',
                borderRadius: '100px',
                fontWeight: 800,
                position: 'absolute',
                top: '-15px',
                fontSize: '18px',
                lineHeight: '24px',
                width: '67px',
                height: '27px',
              }}
            />
          </Grid>
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
                1x
              </Typography>{' '}
              R$ 30.500,00
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'primary.main', fontSize: '1rem', fontWeight: 600 }}
            >
              Ganhe
              <Typography
                variant="body2"
                component="span"
                sx={{
                  color: 'primary.main',
                  fontSize: '1rem',
                  fontWeight: 800,
                }}
              >
                {' '}
                3%{' '}
              </Typography>
              de Cashback
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
              🤑 R$ 300,00{' '}
            </Typography>
            de volta no seu Pix na hora
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PaymentCard
