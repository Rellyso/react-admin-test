import { SimpleForm, TextField, TextInput, Datagrid, Create, Edit, List } from 'react-admin'
import { makeStyles } from '@material-ui/core/styles'

// styles
const useStyles = makeStyles({
    headerRow: {
        height: '40px'
    },
    row: {
        height: '50px'
    }
})

export const ListTipo = props => {
    const classes = useStyles()
    
    return (
        <List {...props}>
        <Datagrid rowClick="edit" classes={{ rowCell: classes.row, headerRow: classes.thead }} >
            <TextField source="id" />
            <TextField source="nome" />
        </Datagrid>
    </List>
)
}

export const CreateTipo = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="nome" />
        </SimpleForm>
    </Create>
)

export const EditTipo = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="nome" />
        </SimpleForm>
    </Edit>
)