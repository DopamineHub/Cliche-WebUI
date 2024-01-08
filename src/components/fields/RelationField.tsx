import { useRecordContext } from "react-admin";
import { Chip, Stack } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

const RelationField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  const recordField = record[source];
  if (!recordField) return null;

  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={1}>
        <Chip
          icon={<LinkIcon />}
          label={recordField}
          size="small"
          color="primary"
          variant="outlined"
        />
      </Stack>
    </Stack>
  );
};

export default RelationField;
