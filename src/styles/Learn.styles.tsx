import {styled, Table} from "@mui/material";


export const Section = styled('div')`
  * {
    code {
      font-family: "Source Code Pro", monospace;
      color: ${props => props.theme.palette.secondary.main};
    }
  }
`;

export const Headline = styled('h1')`
    
`;

export const SubHeadline = styled('h2')`

`;

export const Paragraph = styled('p')`
  color: ${props => props.theme.palette.text.secondary};
`;

export const DocTable = styled(Table)`
  * {
    border-color: ${props => props.theme.palette.divider};
  }
`;

export const Link = styled('a')`
  color: ${props => props.theme.palette.primary.main};
`;