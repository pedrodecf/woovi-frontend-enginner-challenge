'use client'

import React, { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const HowItWorks = (props) => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = () => {
    setExpanded(!expanded)
  }

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{
        boxShadow: 'none',
        border: 'none',
        '&:before': {
          display: 'none',
        },
        backgroundColor: 'white',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          backgroundColor: 'white',
          borderBottom: expanded ? '1px solid rgba(0, 0, 0, .125)' : 'none',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 800,
            fontSize: '16px',
            color: 'primary.text',
          }}
        >
          {props.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: '14px',
            color: 'primary.lightGray',
          }}
        >
          {props.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default HowItWorks
