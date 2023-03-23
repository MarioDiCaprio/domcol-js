import {styled} from "@mui/material";
import {motion} from "framer-motion";


export const Context = styled(motion.div)`
  width: 100%;
  min-height: 55px;
  height: fit-content;
  position: relative;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.palette.divider};
  cursor: pointer;
`;

export const EquationIndex = styled('div')`
  width: 50px;
  min-height: inherit;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${props => props.theme.palette.divider};
  border-bottom: 1px solid ${props => props.theme.palette.divider};
  border-bottom: none;
`;

export const DeleteSection = styled('div')`
  width: 60px;
  height: 100%;
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${props => props.theme.palette.divider};
`;