import axios from 'axios'
// const apiURL = 'http://localhost:3002'
const apiURL = 'http://10.51.24.223:3001'

export async function getEmployees(page, limit) {
  const url = `${apiURL}/employees?_start=${page}&_limit=${limit}`
  try {
    const employees = await axios.get(url)
    return employees.data
  } catch (err) {
    throw err
  }
}

export async function getTotalEmployee() {
  const url = `${apiURL}/employees`
  try {
    const employees = await axios.get(url)
    return employees.data
  } catch (err) {
    throw err
  }
}

export async function deleteEmployeeById(id) {
  const url = `${apiURL}/employees/${id}`
  const { data } = await axios.delete(url)
  return data
}

export async function createEmployee(employee) {
  const url = `${apiURL}/employees`
  const { data } = await axios.post(url, employee)
  return data
}

export async function updateEmployeeById(id, employee) {
  const url = `${apiURL}/employees/${id}`
  const { data } = await axios.put(url, employee)
  return data
}
