import React from "react";
import {
  FormControlLabel,
  Container,
  Typography,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { DeviceCard } from "./style";
import CardSelect from "../../components/Checkbox/Checkbox";
import { useDevice } from "../../context/DeviceContext";

const Device = (props) => {
  const {
    state: { selectedDeviceCards },
    deviceDispatch,
  } = useDevice();

  //handler for selecging cards
  const createCardSelectedArray = (card) => {
    let modifiedDeviceCards = selectedDeviceCards;
    let findCardItem = modifiedDeviceCards.findIndex(
      (item) => item.id === card.id
    );
    if (findCardItem > -1) {
      modifiedDeviceCards.splice(findCardItem, 1);
    } else {
      modifiedDeviceCards.push(
        props.endPoints.find((item) => item.id === card.id)
      );
    }
    //dispatch method for updating selected cards
    deviceDispatch({ type: "select", payload: modifiedDeviceCards });
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {props.endPoints.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <DeviceCard
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
              selected
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <FormControlLabel
                  control={
                    <CardSelect
                      name="toggleFavorite"
                      checked={selectedDeviceCards?.selected?.includes(
                        card.selected
                      )}
                      onChange={(e) => createCardSelectedArray(card, e)}
                    />
                  }
                  label=""
                />
                <Typography gutterBottom variant="h5" component="h2">
                  {card.deviceName}
                </Typography>
                <Typography>
                  OS: <span>{card.os}</span>
                </Typography>
              </CardContent>
            </DeviceCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Device;
