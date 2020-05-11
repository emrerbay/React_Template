const requiredRegex = new RegExp(/^$/)
const emailRegex = new RegExp(/\S+@\S+\.\S+/)
const onlyNumberRegex = new RegExp('^[0-9]+$')
const onlyTextRegex = new RegExp('^[a-zA-Z]+$')

const validator = {
  email: (value) => {
    return emailRegex.test(value) ? '' : 'Please enter a valid email.'
  },
  required: (value) => {
    return value ? '' : 'This field is required.'
  },
  number: (value) => {
    return onlyNumberRegex.test(value) ? '' : 'Please fill with 0-9.'
  },
  text: (value) => {
    return onlyTextRegex.test(value) ? '' : 'Please fill with a-Z.'
  },
  selectItem: (value) => {
    return value !== undefined ? '' : 'Please select a item.'
  },
}

// const validator = type => {
//   if (type === 'email') {
//     return value =>
//       emailRegex.test(value) ? '' : 'Please enter a valid email.'
//   } else if (type === 'required') {
//     return value => (requiredRegex.test(value) ? '' : 'Please fill the input.')
//   } else if (type === 'number') {
//     return value => (onlyNumberRegex.test(value) ? '' : 'Please fill with 0-9.')
//   } else if (type === 'text') {
//     return value => (onlyTextRegex.test(value) ? '' : 'Please fill with a-Z.')
//   }
// }

export default validator
