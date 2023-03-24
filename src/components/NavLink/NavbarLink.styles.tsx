import {styled} from "@mui/material";


export const Wrapper = styled('span')<{ active?: boolean }>`
  padding: 10px 20px 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  color: ${props => props.theme.palette.text.primary};
  background: ${props => props.active? props.theme.palette.primary.main : 'none'};
  transition: 0.3s;
  &:hover {
    background: ${props => props.theme.palette.primary.main};
    transition: 0.3s;
  }
`;