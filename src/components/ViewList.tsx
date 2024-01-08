import { Datagrid, DateField, List, TextField } from "react-admin";
import RelationField from "@/components/fields/RelationField";
import MethodsField from "@/components/fields/MethodsField";

const ViewList = () => (
  <List>
    <Datagrid rowClick="edit">
      <RelationField source="app_name" />
      <TextField source="name" />
      <TextField source="path" />
      <MethodsField source="methods" />
      <DateField source="created_time" />
      <DateField source="modified_time" />
    </Datagrid>
  </List>
);

export default ViewList;
