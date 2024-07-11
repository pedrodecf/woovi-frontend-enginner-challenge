import { Box, Typography } from '@mui/material'

const Identifier = (props) => {
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
          fontSize: '12px',
        }}
      >
        Identificador:
      </Typography>
      <Typography
        sx={{
          color: 'primary.text',
          fontWeight: 800,
          fontSize: '12px',
        }}
      >
        {props.sessionId}
      </Typography>
    </Box>
  )
}

export default Identifier
