import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { makeStyles } from '@material-ui/core/styles'

// pages
import { CreatePessoa, EditPessoa, ListPessoa } from './pages/pessoa'
import { CreateTipo, EditTipo, ListTipo } from './pages/tipo'
import { CreatePost, ListPosts, EditPost } from './pages/posts'
import Dashboard from './pages/Dashboard'

// components
import Menu from './components/Menu'
import MyLayout from './components/Layout'

// icons
import PersonIcon from '@material-ui/icons/Person';
import BarChartIcon from '@material-ui/icons/BarChart';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';

// styles
const useStyles = makeStyles({
  resource: {
    padding: '8px 16px',
  }
})

const dataProvider = jsonServerProvider("http://localhost:5000")

const App = () => {
  const classes = useStyles()
  
  return (
    <Admin layout={MyLayout} dataProvider={dataProvider} menu={Menu} dashboard={Dashboard}>
      <Resource className="resource" name="pessoa" list={ListPessoa} edit={EditPessoa} create={CreatePessoa} icon={PersonIcon} />

      <Resource className={classes.resource} name="tipo" list={ListTipo} edit={EditTipo} create={CreateTipo} icon={BarChartIcon} />

      <Resource className={classes.resource} name="posts" list={ListPosts} edit={EditPost} create={CreatePost} icon={LocalPostOfficeIcon} />

    </Admin>
)
} 

export default App