import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    SimpleForm,
    ReferenceInput,
    Edit,
    TextInput, Create
} from "react-admin";

export const EventQuestionList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="eventid"/>
            <TextField source="questionid"/>
            <TextField source="status"/>
            <TextField source="createddate"/>
            <TextField source="createdby"/>
            <TextField source="updateddate"/>
            <TextField source="updatedby"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const EventQuestionEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" InputProps={{disabled: true}}/>
            <TextInput source="eventid"/>
            <TextInput source="questionid"/>
            <TextInput source="status"/>
            <TextInput source="createddate"/>
            <TextInput source="createdby"/>
            <TextInput source="updateddate"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Edit>
);

export const EventQuestionCreate = () => (
    <Create>
        <SimpleForm>
            <TextField source="eventid"/>
            <TextInput source="questionid"/>
            <TextInput source="status"/>
            <TextInput source="createddate"/>
            <TextInput source="createdby"/>
            <TextInput source="updateddate"/>
            <TextInput source="updatedby"/>
        </SimpleForm>
    </Create>
);