import { Datagrid, DateField, List, TextField } from "react-admin";
import ImportsField from "@/components/fields/ImportsField";
import ParametersField from "@/components/fields/ParametersField";
import RelationField from "@/components/fields/RelationField";

const ScriptList = () => (
  <List>
    <Datagrid rowClick="edit">
      <RelationField source="target" />
      <RelationField source="app_name" />
      <TextField source="name" />
      <TextField source="description" />
      <ImportsField source="imports" />
      <ParametersField source="parameters" />
      <DateField source="created_time" />
      <DateField source="modified_time" />
    </Datagrid>
  </List>
);

export default ScriptList;
