import {Alert, Card, styled} from "@mui/material";


export const PreviewCardContext = styled(Card)`
  width: 320px;
  max-width: 100%;
`;

export const StyledAlert = styled(Alert)`
  color: ${props => props.theme.palette.text.primary};
  background: ${props => props.theme.palette.background.paper};
  box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);

  .MuiAlert-icon {
    color: ${props => props.theme.palette.primary.main};
  }
`;
