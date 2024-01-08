import { Datagrid, List, TextField } from 'react-admin';
import RequirementsField from '@/components/fields/RequirementsField'

const BuildTargetList = () => (
    <List>
        <Datagrid bulkActionButtons={false}>
            <TextField source="name" />
            <TextField source="description" />
            <RequirementsField source="requirements" />
        </Datagrid>
    </List>
);

export default BuildTargetList;