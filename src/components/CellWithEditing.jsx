import React from 'react'
import styled from 'styled-components'
import { GridCell } from '@progress/kendo-react-grid'
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs'
import { Button } from '@progress/kendo-react-buttons'

const CenteredParagraph = styled.p`
  margin: 25px;
  text-align: center;
`

export default function cellWithEditing(edit, remove, field) {
  return class extends GridCell {
    constructor(props) {
      super(props)
      this.state = {
        visible: false,
      }
    }
    toggleDialog = () => {
      this.setState({
        visible: !this.state.visible,
      })
    }
    render() {
      const { visible } = this.state
      const { dataItem } = this.props
      return (
        <td>
          <Button
            primary
            onClick={() => {
              edit(dataItem)
            }}
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              this.setState({
                visible: !visible,
              })
            }}
          >
            Remove
          </Button>
          {visible && (
            <Dialog title={'Please confirm'} onClose={this.toggleDialog}>
              <CenteredParagraph>
                Confirm deleting: {dataItem[field]}
              </CenteredParagraph>
              <DialogActionsBar>
                <Button onClick={this.toggleDialog}>No</Button>
                <Button
                  onClick={() => {
                    remove(dataItem)
                  }}
                >
                  Yes
                </Button>
              </DialogActionsBar>
            </Dialog>
          )}
        </td>
      )
    }
  }
}
