import Dashboard from './views/Dashboard/Dashboard'
import Cards from './views/Base/Cards/Cards'
import CrudPage from './views/Examples/CrudPage'

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/examples', exact: true, name: 'Examples', component: CrudPage },
  { path: '/examples/crud-page', name: 'Crud Page', component: CrudPage },
]

export default routes
