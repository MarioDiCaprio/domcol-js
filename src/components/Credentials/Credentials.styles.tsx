import {styled} from "@mui/material";


export const Context = styled('div')`
  width: 100%;
  padding: 150px 10px 50px 10px;
  text-align: center;
  color: ${props => props.theme.palette.text.secondary};
  a {
    text-decoration: none;
    color: ${props => props.theme.palette.primary.main};
  }
`;