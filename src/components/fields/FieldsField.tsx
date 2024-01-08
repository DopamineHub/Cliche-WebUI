import { useRecordContext } from "react-admin";
import { Chip, Stack } from "@mui/material";

const FieldsField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  const recordField = record[source];
  if (!recordField) return null;

  return (
    <Stack direction="column" spacing={1}>
      {recordField.map((field: any) => (
        <Stack key={field.name} direction="row" spacing={1}>
          <Chip
            label={field.type}
            size="small"
            color="success"
            variant="outlined"
          />
          <Chip label={field.name} size="small" color="primary" />
        </Stack>
      ))}
    </Stack>
  );
};

export default FieldsField;
