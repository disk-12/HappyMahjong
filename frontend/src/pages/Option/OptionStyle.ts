import { color } from "assets/color";
import styled from "styled-components";
export const OptionPage = styled.div`
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
`;

export const Panel = styled.div`
  background: ${color.Surface1};
  border-radius: 16px;
  padding: 20px 48px;
  max-height: calc(100vh - 164px);
  overflow: scroll;
`;

export const LinkContainer = styled.div`
  position: absolute;
  right: 24px;
  bottom: 24px;
`;
export const CheckPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const DoraPanel = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;
export const DoraSelector = styled.div`
  display: flex;
  align-items: center;
`;
export const DoraText = styled.div`
  margin-right: 32px;
`;
export const AddDora = styled.div`
  margin-left: 24px;
`;
export const DoraList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px 0;
`;
