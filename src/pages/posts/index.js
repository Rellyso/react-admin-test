import { makeStyles } from '@material-ui/core'
import {
    Create,
    Edit,
    List,
    Datagrid,
    SimpleForm,
    TextField,
    TextInput,
    DateInput,
    EditButton,
    DateField,
    DeleteButton,
} from 'react-admin'

// styles
const useStyles = makeStyles({
    headerRow: {
        height: '40px'
    },
    row: {
        height: '50px'
    }
})


export const ListPosts = props => {
    const classes = useStyles()

    return (
        <List {...props} title="Posts">
            <Datagrid classes={{ rowCell: classes.row, headerRow: classes.headerRow }}>
                <TextField source="id" />
                <TextField label="Título" source="title" />
                <DateField label="Publicado em" source="publishedAt" />
                <EditButton basePath="/posts" />
                <DeleteButton basePath="/posts" />
            </Datagrid>
        </List>
    )
}

export const CreatePost = props => {
    return (
        <Create {...props} title="Novo Post" >
            <SimpleForm>
                <TextInput label="Título" source="title" />
                <TextInput label="Conteúdo" source="body" multiline />
                <DateInput label="Publicado em" source="publishedAt" />
            </SimpleForm>
        </Create>
    )
}

export const EditPost = props => (
    <Edit {...props} title="Editar Post">
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput label="Título" source="title" />
            <TextInput label="Conteúdo" source="body" multiline />
            <DateInput label="Publicado em" source="publishedAt" />
        </SimpleForm>
    </Edit>
)