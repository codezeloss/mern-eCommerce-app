import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState } from "react"
import Box from "@mui/material/Box"

interface Props {
  icon: any
  title: string
  text: string
}

function InfosAccordion({ icon, title, text }: Props) {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Accordion
      expanded={expanded === true}
      onChange={handleChange(true)}
      sx={{ fontSize: 12, fontFamily: "Rubik" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panelbh-content"
        id="panelbh-header"
        sx={{ fontSize: 8 }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box sx={{ fontSize: 8, mr: 1, pl: 4, color: "#475569" }}>{icon}</Box>
          <Typography
            sx={{ width: "100%", flexShrink: 0, fontSize: 12, fontBold: 700 }}
          >
            {title}
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Typography sx={{ fontSize: 12 }}>{text}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default InfosAccordion
