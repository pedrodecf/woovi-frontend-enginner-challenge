import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Link from 'next/link'

const Header = (props) => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: 4.5, marginBottom: 5, position: 'relative' }}
      >
        {props.previousPageLink && (
          <Link href={props.previousPageLink} passHref>
            <ArrowBackIosIcon
              sx={{
                color: 'primary.lightGray',
                fontSize: 16,
                position: 'absolute',
                left: '15px',
                top: '15px',
              }}
            />
          </Link>
        )}

        {props.nextPageLink && (
          <Link href={props.nextPageLink} passHref>
            <ArrowForwardIosIcon
              sx={{
                color: 'primary.lightGray',
                fontSize: 16,
                position: 'absolute',
                right: '15px',
                top: '15px',
              }}
            />
          </Link>
        )}

        <Image src="/logo.svg" alt="Logo Woovi" width={124} height={37} />
      </Box>
      <Typography
        sx={{
          color: 'primary.text',
          fontWeight: 800,
          textAlign: 'center',
          fontSize: 24,
          marginBottom: '32px',
        }}
      >
        {props.client}
        {', '}
        {props.message}
      </Typography>
    </>
  )
}

export default Header
