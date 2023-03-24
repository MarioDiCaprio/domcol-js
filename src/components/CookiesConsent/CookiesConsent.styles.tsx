import {Dialog, styled} from "@mui/material";


export const Context = styled(Dialog)`
  .MuiDialog-paper {
    border: 1px solid ${props => props.theme.palette.divider};
    background: ${props => props.theme.palette.background.paper};
  }
`;

export const CookieIconWrapper = styled('div')`
  color: ${props => props.theme.palette.primary.main};
  font-size: 1.8rem;
`;