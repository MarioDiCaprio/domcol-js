import {styled, alpha} from "@mui/material";
import {motion} from "framer-motion";


export const Context = styled(motion.div)<{ elevated: boolean, hidden: boolean }>`
  width: 100vw;
  height: 75px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 5px 30px 5px 30px;
  border-bottom: 1px solid ${props => props.theme.palette.divider};
  align-items: center;
  letter-spacing: 1px;
  background: ${props => alpha(props.theme.palette.background.paper, 0.6)};
  backdrop-filter: blur(5px);
  box-shadow: ${props => props.elevated? '0 10px 10px rgba(0, 0, 0, 0.2)' : 'none'};
  transform: ${props => props.hidden? 'translateY(-80px)' : 'none'};
  transition: 0.3s;
  @media (max-width: ${props => props.theme.breakpoints.values.sm}px) {
    padding: 5px 10px 5px 10px;
  }
`;

export const Logo = styled('div')`
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 20px;
  pointer-events: none;
  user-select: none;
  img {
    height: 80%;
  }
  span {
    font-size: 1.5rem;
  }
`;

export const LinksSection = styled('div')`
  display: flex;
  gap: 15px;
`;