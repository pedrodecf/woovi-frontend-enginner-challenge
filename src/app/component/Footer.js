import { Box, Typography } from '@mui/material'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import LogoFooter from '../assets/LogoFooter'

const Footer = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={1}
      sx={{
        margin: '40px auto 27px',
      }}
    >
      <VerifiedUserOutlinedIcon
        sx={{ color: 'primary.lightGray', fontWeight: 600 }}
      />
      <Typography alignContent="center" color="primary.lightGray">
        Pagamento 100% seguro via:
      </Typography>
      <LogoFooter style={{ marginTop: '-3px' }} />
    </Box>
  )
}

export default Footer
