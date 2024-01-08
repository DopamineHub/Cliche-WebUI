import { useRecordContext } from "react-admin";
import { Avatar, Chip, Stack } from "@mui/material";

const RequirementsField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  const recordField = record[source];
  if (!recordField) return null;

  return (
    <Stack direction="column" spacing={1}>
      {Object.keys(recordField).map((name: string) => (
        <Stack key={name} direction="row" spacing={1}>
          <Chip label={name} size="small" color="primary" />
          <Chip
            avatar={<Avatar>V</Avatar>}
            label={recordField[name]}
            size="small"
            color="primary"
            variant="outlined"
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default RequirementsField;
