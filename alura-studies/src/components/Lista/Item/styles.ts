
import styled from "styled-components";

export const ItemContainer = styled.li`
  background-color: ${props => props.theme ? "blue": "red"};

  border-radius: 8px;
  box-shadow: 2px 4px 4px #0000009F;
  padding: 12px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;
  h3 {
    margin-bottom: 8px;
    word-break: break-all;
  }

  span {
    color: #D0D0D0;
  }

  @media screen and (min-width:1280px) {
    font-size: 1.8rem;
  }
`;

