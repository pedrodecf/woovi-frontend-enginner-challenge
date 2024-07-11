import { Box, Typography } from '@mui/material'
import StepOne from '../assets/StepOne'
import StepTwo from '../assets/StepTwo'

const PaymentSteps = (props) => {
  return (
    <Box sx={{ padding: '20px 0 15px', width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        {props.step === 'one' ? <StepOne /> : <StepTwo />}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '16px',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '0',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                fontSize: '16px',
                color: 'primary.text',
              }}
            >
              1ª entrada no Pix
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                fontSize: '16px',
                color: 'primary.text',
              }}
            >
              R$ 15.300,00
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '0',
              marginTop: '14px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                fontSize: '16px',
                color: 'primary.text',
              }}
            >
              2ª entrada no cartão
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                fontSize: '16px',
                color: 'primary.text',
              }}
            >
              R$ 15.300,00
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PaymentSteps
