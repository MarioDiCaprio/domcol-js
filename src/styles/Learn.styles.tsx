import {styled, Table} from "@mui/material";


export const Section = styled('div')`
  margin: 40px 0 40px 0;
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

export const Paragraph = styled('div')`
  color: ${props => props.theme.palette.text.secondary};
  padding: 10px 0 10px 0;
`;

export const DocTable = styled(Table)`
  * {
    border-color: ${props => props.theme.palette.divider};
  }
`;

export const Link = styled('a')`
  color: ${props => props.theme.palette.primary.main};
`;

export const IllustrationWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 10px 0 10px 0;
  color: ${props => props.theme.palette.text.disabled};
  img {
    border-radius: 5px;
  }
`;