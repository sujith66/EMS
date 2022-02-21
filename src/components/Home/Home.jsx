import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { HomeContainer } from "./style";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Device from "../../pages/Device/Device";
import { useAction } from "../../context/ActionContext";
import { useDevice } from "../../context/DeviceContext";
// import useApi from "../../hooks/useApi";

const theme = createTheme();

export default function Home() {
  const {
    state: { selectedDeviceCards },
  } = useDevice();
  const { actionDispatch } = useAction();

  const navigate = useNavigate();

  //calling custom api hook to return the device data
  // const { data } = useApi(
  //   "https://api.mockaroo.com/api/08100050?count=1000&key=3e2ade60"
  // );
  
//Hard coded the data as the api url was not working
  const endpointDevices = [
    { id: 1, deviceName: "TX123412", os: "windows" },
    { id: 2, deviceName: "FX473412", os: "ios" },
    { id: 3, deviceName: "TR127412", os: "android" },
    { id: 4, deviceName: "FD123478", os: "windows" },
    { id: 5, deviceName: "FD23154", os: "linux" },
    { id: 6, deviceName: "PR423412", os: "unix" },
  ];

  //handler  for action log button to display the log grid
  const handleActionLogs = () => {
    navigate("/logs");
  };

  // handler for scan/terminate button
  const handleAction = (type) => {
    let modifiedSelectedActions = selectedDeviceCards.map((item) => ({
      id: item.id,
      Action: type,
      deviceName: item.deviceName,
      os: item.os,
      time: new Date(),
    }));

    //dispatch method for updating action logs
    actionDispatch({ type, payload: modifiedSelectedActions });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 12,
            pb: 6,
          }}
        >
          <HomeContainer maxWidth="md">
            <Typography
              variant="h5"
              align="left"
              paragraph
            >
              Available endpoints
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="flex-end"
            >
              <Button
                variant="contained"
                disabled={selectedDeviceCards.length === 0}
                onClick={() => handleAction("scan")}
              >
                Scan
              </Button>
              <Button
                variant="outlined"
                disabled={selectedDeviceCards.length === 0}
                onClick={() => handleAction("terminate")}
              >
                Terminate
              </Button>
              <Button variant="outlined" onClick={handleActionLogs}>
                Logs
              </Button>
            </Stack>
          </HomeContainer>
          <Device endPoints={endpointDevices} />
        </Box>
      </main>
    </ThemeProvider>
  );
}
