import { createSlice } from '@reduxjs/toolkit'
import {
  getTotalEmployee as getTotalEmployeeRequest,
  getEmployees as getEmployeesRequest,
  updateEmployeeById as updateEmployeeByIdRequest,
  createEmployee as createEmployeeRequest,
  deleteEmployeeById as deleteEmployeeByIdRequest,
} from '~/api/employeeAPI'

import { loadingFetched, loadingFetchingError } from './globalSlice'

const EmployeesState = {
  employees: [],
  totalEmployee: 0,
  error: null,
  fetchingState: 'none',
  creatingState: 'none',
  updatingState: 'none',
  deletingState: 'none',
  loadingState: 'none',
}

const employees = createSlice({
  name: 'employees',
  initialState: EmployeesState,
  reducers: {
    employeesFetching: (state) => {
      state.fetchingState = 'requesting'
    },
    employeesFetched: (state, { payload }) => {
      state.fetchingState = 'success'
      state.employees = payload
    },
    employeesFetchingError: (state, action) => {
      state.fetchingState = 'failed'
      state.error = action.payload
    },
    employeeUpdating: (state) => {
      state.updatingState = 'requesting'
    },
    employeeUpdated: (state, { payload }) => {
      state.updatingState = 'success'
      state.employees = state.employees.map((employee) => {
        if (employee.id === payload.id) return payload
        return employee
      })
    },
    employeeUpdatingError: (state, action) => {
      state.updatingState = 'failed'
      state.error = action.payload
    },
    employeeCreating: (state) => {
      state.creatingState = 'requesting'
    },
    employeeCreated: (state, { payload }) => {
      state.creatingState = 'success'
      state.employees.push(payload)
    },
    employeeCreatingError: (state, action) => {
      state.creatingState = 'failed'
      state.error = action.payload
    },
    employeeDeleting: (state) => {
      state.deletingState = 'requesting'
    },
    employeeDeleted: (state, { payload }) => {
      state.deletingState = 'success'
      state.employees.splice(
        state.employees.findIndex((employee) => employee.id === payload),
        1,
      )
    },
    employeeDeletingError: (state, action) => {
      state.deletingState = 'failed'
      state.error = action.payload
    },
    employeeCounted: (state, { payload }) => {
      state.totalEmployee = payload.length
    },
  },
})

export const {
  employeesFetching,
  employeesFetched,
  employeesFetchingError,
  employeeUpdating,
  employeeUpdated,
  employeeUpdatingError,
  employeeCreating,
  employeeCreated,
  employeeCreatingError,
  employeeCounted,
  employeeDeleting,
  employeeDeleted,
  employeeDeletingError,
} = employees.actions

export default employees.reducer


export const getTotalEmployee = () => async (dispatch) => {
  try {
    const response = await getTotalEmployeeRequest()
    dispatch(employeeCounted(response))
  } catch (err) {
    dispatch(loadingFetchingError(err.toString()))
  }
}

export const getEmployees = (page, limit) => async (dispatch) => {
  try {
    dispatch(employeesFetching())
    const response = await getEmployeesRequest(page, limit)
    dispatch(employeesFetched(response))
  } catch (err) {
    dispatch(loadingFetchingError(err.toString()))
    dispatch(employeesFetchingError(err.toString()))
  }
}

export const updateEmployeeById = (id, employee) => async (dispatch) => {
  try {
    dispatch(employeeUpdating())
    const response = await updateEmployeeByIdRequest(id, employee)
    dispatch(employeeUpdated(response))
    dispatch(loadingFetched('Employee updated'))
  } catch (err) {
    dispatch(loadingFetchingError(err.toString()))
    dispatch(employeeUpdatingError(err.toString()))
  }
}

export const createEmployee = (employee) => async (dispatch) => {
  try {
    dispatch(employeeCreating())
    const response = await createEmployeeRequest(employee)
    dispatch(employeeCreated(response))
    dispatch(getTotalEmployee()) // server not returning count in paginator
    dispatch(loadingFetched('Employee created'))
  } catch (err) {
    dispatch(loadingFetchingError(err.toString()))
  }
}

export const deleteEmployeeById = (id) => async (dispatch) => {
  try {
    dispatch(employeeDeleting())
    let response = await deleteEmployeeByIdRequest(id)
    response = id // server not returning deleted item index
    dispatch(employeeDeleted(response))
    dispatch(getTotalEmployee()) // server not returning count in paginator
    dispatch(loadingFetched('Employee deleted'))
  } catch (err) {
    dispatch(loadingFetchingError(err.toString()))
  }
}
