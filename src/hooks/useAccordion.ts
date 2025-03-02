import { useState } from 'react'

const useAccordion = () => {
  const [accordionState, setAccordionState] = useState<number | null>(null)

  const handleAccordionClick = (empId: number) => {
    if (accordionState === empId) {
      setAccordionState(null) // Se o item já estiver expandido, esconde
    } else {
      setAccordionState(empId) // Expande o item
    }
  }

  return { accordionState, handleAccordionClick }
}

export default useAccordion
