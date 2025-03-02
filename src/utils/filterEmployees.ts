import { Employee } from '../types/employee'

const filterEmployees = (employees: Employee[], search: string): Employee[] => {
  return employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.job.toLowerCase().includes(search.toLowerCase()) ||
      emp.phone.includes(search)
  )
}

export default filterEmployees
