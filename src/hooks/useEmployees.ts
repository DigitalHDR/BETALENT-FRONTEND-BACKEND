import axios from 'axios'
import { useEffect, useState } from 'react'
import { Employee } from '../types/employee'

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    axios
      .get('https://node-api-basic-main.onrender.com/employees')
      .then((response) => setEmployees(response.data as Employee[]))
      .then((log) => console.log(log))
      .catch((error) => console.error('Erro ao buscar funcionários:', error))
  }, [])

  return { employees, setEmployees }
}
