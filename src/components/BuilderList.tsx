import { Datagrid, DateField, List, TextField } from 'react-admin';
import RelationField from '@/components/fields/RelationField';
import RequirementsField from '@/components/fields/RequirementsField'
import SettingsField from '@/components/fields/SettingsField'

const BuilderList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="directory" />
            <RelationField source="target" />
            <SettingsField source="settings" />
            <RequirementsField source="requirements" />
            <DateField source="created_time" />
            <DateField source="modified_time" />
        </Datagrid>
    </List>
);

export default BuilderList
