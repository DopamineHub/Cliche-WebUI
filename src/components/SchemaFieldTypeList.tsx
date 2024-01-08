import { Datagrid, List, TextField } from 'react-admin';
import AttributesField from '@/components/fields/AttributesField';

const SchemaFieldTypeList = () => (
    <List>
        <Datagrid bulkActionButtons={false}>
            <TextField source="name" />
            <TextField source="description" />
            <AttributesField source="attributes" />
        </Datagrid>
    </List>
);

export default SchemaFieldTypeList;