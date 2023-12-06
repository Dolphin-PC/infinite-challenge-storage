import { Box, Fab, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { MouseEventHandler } from "react";

export default function FloatingButton({
  Icon,
  onClickEvent,
}: {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  onClickEvent: MouseEventHandler;
}) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 16,
        right: 16,
        "& > :not(style)": { m: 1 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Fab onClick={onClickEvent}>{Icon && <Icon />}</Fab>
    </Box>
  );
}
