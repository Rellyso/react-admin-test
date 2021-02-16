import { makeStyles } from '@material-ui/core'
import { SimpleForm, TextInput, TextField, Datagrid, Create, Edit, List } from 'react-admin'

// styles
import './styles.css'
const useStyles = makeStyles({
    headerRow: {
        height: '40px'
    },
    row: {
        height: '50px'
    },
    editForm: {
        color: 'red',
    }
})

export const ListPessoa = props => {
    const classes = useStyles()

    return (
        <List {...props}>
            <Datagrid rowClick="edit" classes={{ headerRow: classes.headerRow, rowCell: classes.row }}>
                <TextField source="id" />
                <TextField source="nome" />
            </Datagrid>
        </List>
    )
}

export const CreatePessoa = props => {
    const classes = useStyles()
    return (
        <Create {...props} classes={{ headerRow: classes.headerRow, rowCell: classes.row }}>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="nome" />
            </SimpleForm>
        </Create>
    )
}

export const EditPessoa = props => {
    const classes = useStyles()
    return (
        <Edit {...props} classes={{ headerRow: classes.headerRow, rowCell: classes.row }}>
            <SimpleForm className={classes.editForm} fullWidth>
                <TextInput source="id" />
                <TextInput source="nome" />
            </SimpleForm>
        </Edit>
    )
}