'use client'
import { useState } from 'react'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import { Box, Button, Typography, Snackbar, Alert } from '@mui/material'
import QRCodeGenerator from '../utils/QrCodeGenerator'
import generateAndCopyRandomString from '../utils/GenerateRandomString'

const QrCode = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        margin="0 auto"
        sx={{
          maxWidth: '350px',
          maxHeight: '350px',
          borderRadius: '10px',
          border: '2px solid #03D69D',
        }}
      >
        <QRCodeGenerator />
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
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'primary.darkBlue',
          },
        }}
        onClick={() => {
          generateAndCopyRandomString(setOpen, setMessage)
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
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default QrCode
