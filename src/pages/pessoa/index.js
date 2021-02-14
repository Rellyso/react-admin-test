import { SimpleForm, TextInput, TextField, Datagrid, Create, Edit, List } from 'react-admin'

export const ListPessoa = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="nome"/>
        </Datagrid>
    </List>
)

export const CreatePessoa = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="nome"/>
        </SimpleForm>
    </Create>
)

export const EditPessoa = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="nome"/>
        </SimpleForm>
    </Edit>
)
