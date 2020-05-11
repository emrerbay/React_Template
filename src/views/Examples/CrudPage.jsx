import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid'
import {
  Button,
  ButtonGroup,
  Toolbar,
  ToolbarItem,
} from '@progress/kendo-react-buttons'
import EditDialog from '~/components/EditDialog.jsx'
import cellWithEditing from '~/components/CellWithEditing.jsx'
import {
  getEmployees,
  updateEmployeeById,
  createEmployee,
  deleteEmployeeById,
  getTotalEmployee,
} from '~/redux/actions'
import { clearError, clearSuccess } from '~/redux/slices/globalSlice'

const CrudPage = () => {
  const dispatch = useDispatch()
  const { employees, totalEmployee } = useSelector((state) => state.employees)

  const [state, setState] = useState({
    employeeInEdit: undefined,
    employeeInCreate: undefined,
    isCreateOpen: false,
    skip: 0,
    take: 10,
  })

  useEffect(() => {
    dispatch(getEmployees(state.skip, state.take))
  }, [state.skip])

  // server not returning count in paginator
  useEffect(() => {
    dispatch(getTotalEmployee())
  }, [])

  const edit = (dataItem) => {
    setState({ ...state, employeeInEdit: Object.assign({}, dataItem) })
  }

  const remove = (dataItem) => {
    dispatch(deleteEmployeeById(dataItem.id))
    clearNotifications()
  }

  const saveEdit = (dataItem) => {
    dispatch(updateEmployeeById(dataItem.id, dataItem))
    setState({ ...state, employeeInEdit: undefined })
    clearNotifications()
  }

  const cancelEdit = () => {
    setState({ ...state, employeeInEdit: undefined })
  }
  //passing callback useCallback
  const saveCreate = (dataItem) => {
    dispatch(createEmployee(dataItem))
    setState({ ...state, isCreateOpen: false })
    clearNotifications()
  }

  const cancelCreate = () => {
    setState({ ...state, isCreateOpen: false })
  }

  const clearNotifications = () => {
    setTimeout(() => {
      dispatch(clearSuccess())
      dispatch(clearError())
    }, 3000)
  }

  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>Grid Page</CardHeader>
        <CardBody>
          <Toolbar>
            <ToolbarItem>
              <ButtonGroup>
                <Button
                  icon="plus"
                  look="outline"
                  onClick={() => setState({ ...state, isCreateOpen: true })}
                >
                  Add Employee
                </Button>
              </ButtonGroup>
            </ToolbarItem>
          </Toolbar>

          <Grid
            data={employees}
            skip={state.skip}
            take={state.take}
            total={totalEmployee}
            pageable={true}
            onPageChange={(event) => {
              setState({
                ...state,
                skip: event.page.skip,
                take: event.page.take,
              })
            }}
          >
            <Column
              field="identification_number"
              title="Identification Number"
              filterable={false}
            />
            <Column field="first_name" title="First Name" filterable={false} />
            <Column field="last_name" title="Last Name" filterable={false} />
            <Column field="email" title="Email" filterable={false} />
            <Column field="gender" title="Gender" filterable={false} />
            <Column field="isMember" title="Is Member" filterable={false} />
            <Column field="birthdate" title="Birthdate" filterable={false} />
            <Column
              title="Edit"
              cell={cellWithEditing(edit, remove, 'first_name')}
            />
          </Grid>
          {state.employeeInEdit && (
            <EditDialog
              dataItem={state.employeeInEdit}
              save={saveEdit}
              cancel={cancelEdit}
            />
          )}
          {state.isCreateOpen && (
            <EditDialog
              dataItem={state.employeeInCreate}
              save={saveCreate}
              cancel={cancelCreate}
            />
          )}
        </CardBody>
      </Card>
    </div>
  )
}

export default CrudPage
