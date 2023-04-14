import {styled, TableContainer} from "@mui/material";


export const Context = styled(TableContainer)`
  position: fixed;
  left: 0;
  bottom: 0;
  margin: 20px;
  max-width: 300px;
  &:hover {
    cursor: auto;
  }
  td {
    background: ${props => props.theme.palette.background.default};
    width: 33%;
    &:last-child {
      border: none;
    }
  }
  tr:last-child > td {
    border: none;
  }
  @media (max-width: ${props => props.theme.breakpoints.values.sm}px) {
    display: none;
  }
`;