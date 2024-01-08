import { useRecordContext } from "react-admin";
import { Chip, Stack } from "@mui/material";
import LabelIcon from "@mui/icons-material/Label";

const ImportsField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  const recordField = record[source];
  if (!recordField) return null;

  const handleDelete = () => {
    // do nothing
    // console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="column" spacing={1}>
      {Object.keys(recordField).map((name: string) => (
        <Stack key={name} direction="row" spacing={1}>
          <Chip
            deleteIcon={<LabelIcon />}
            onDelete={handleDelete}
            label={recordField[name]}
            size="small"
            color="info"
            variant="outlined"
          />
          <Chip label={name} size="small" color="info" />
        </Stack>
      ))}
    </Stack>
  );
};

export default ImportsField;
