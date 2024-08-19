import { Button } from "@mui/material";

const CustomButton = (
  { sx = { float: "right" }, text = "Click", handleClick }: any,
) => {
  return (
    <Button
      onClick={handleClick}
      sx={{ margin: "10px", ...sx }}
      variant="contained"
    >
      {text}
    </Button>
  );
};
export default CustomButton;
