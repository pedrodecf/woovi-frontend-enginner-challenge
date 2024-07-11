import FileCopyIcon from '@mui/icons-material/FileCopy'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'

const QrCode = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        margin="0 auto"
        sx={{
          width: '350px',
          height: '350px',
          borderRadius: '10px',
          border: '2px solid #03D69D',
        }}
      >
        <Image src="/qrcode.png" alt="QR Code" height="332" width="332" />
      </Box>
      <Button
        sx={{
          backgroundColor: 'primary.blue',
          borderRadius: 1,
          padding: '6px 10px',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          width: 'fit-content',
          margin: '27px auto 0',
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
          Clique para copiar QR CODE
        </Typography>
        <FileCopyIcon sx={{ color: 'primary.white' }} />
      </Button>
    </>
  )
}

export default QrCode
