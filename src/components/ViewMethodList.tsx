import { Datagrid, DateField, List, TextField } from "react-admin";
import RelationField from "@/components/fields/RelationField";

const ViewMethodList = () => (
  <List>
    <Datagrid rowClick="edit">
      <RelationField source="view_name" />
      <TextField source="type" />
      <TextField source="description" />
      <RelationField source="model_name" />
      <RelationField source="filter_schema_name" />
      <RelationField source="input_schema_name" />
      <RelationField source="output_schema_name" />
      <DateField source="created_time" />
      <DateField source="modified_time" />
    </Datagrid>
  </List>
);

export default ViewMethodList;
