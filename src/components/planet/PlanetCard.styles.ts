import styled from 'styled-components';

export const Container = styled.a`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  height: 120px;
  width: 770px;
  margin: 8px;
  display: flex;
  flex: 1;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  color: black;
  text-decoration: none;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Diameter = styled.p`
  color: #63B387;
  font-weight: 800;
  font-size: 12px;
  background-color: #BBFFDA;
  height: 20px;
  border-radius: 16px;
  align-self: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.p`
  font-size: 12px;
  color: gray;
`;
