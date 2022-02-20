import styled from 'styled-components';
import Card from "@mui/material/Card";

export const DeviceCard = styled(Card)((props)=>({
    '.text-color': {
        backgroundColor: props.selected ? 'red' : 'white'
    }
}));