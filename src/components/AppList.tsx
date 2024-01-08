import { Datagrid, DateField, List, TextField } from 'react-admin';
import RelationsField from '@/components/fields/RelationsField';

const AppList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="path" />
            <RelationsField source="dependencies" />
            <DateField source="created_time" />
            <DateField source="modified_time" />
        </Datagrid>
    </List>
);
export default AppList;
