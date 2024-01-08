import { Datagrid, DateField, List, TextField } from "react-admin";
import AttributesField from "@/components/fields/AttributesField";
import RelationField from "@/components/fields/RelationField";
import FieldsField from "@/components/fields/FieldsField";

const ModelList = () => (
  <List>
    <Datagrid rowClick="edit">
      <RelationField source="app_name" />
      <TextField source="name" />
      <TextField source="description" />
      <FieldsField source="fields" />
      <AttributesField source="attributes" />
      <DateField source="created_time" />
      <DateField source="modified_time" />
    </Datagrid>
  </List>
);

export default ModelList;
