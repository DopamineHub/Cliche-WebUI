import { useRecordContext } from "react-admin";
import { Chip, Stack } from "@mui/material";

const MethodsField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  const recordField = record[source];
  if (!recordField) return null;

  return (
    <Stack direction="column" spacing={1}>
      {recordField.map((method: any) => (
        <Stack key={method.type} direction="row" spacing={1}>
          <Chip
            label={method.type}
            size="small"
            color="primary"
            variant="outlined"
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default MethodsField;
