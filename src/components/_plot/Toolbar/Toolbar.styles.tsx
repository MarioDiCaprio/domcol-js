import {styled} from "@mui/material";


export const Context = styled('div')`
  width: 100%;
  height: 50px;
  padding: 5px 30px 5px 30px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid ${props => props.theme.palette.divider};
  border-top: 1px solid ${props => props.theme.palette.divider};
  div {
    height: 30px;
    min-width: 30px;
    background: white;
    border: 1px solid #bebebe;
    color: #656565;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;