import styled from 'styled-components';

export const Nav = styled.div`
  background-color: #34495e;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    'sans-serif';
  display: flex;
  flex-wrap: auto;
  justify-content: center;
`;

export const MenuItem = styled.a`
  display: block;
  text-align: center;
  padding: 14px 14px;
  font-size: 18px;
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

export const SearchInput = styled.input`
  border-radius: 8px;
  height: 23px;
  width: 20%;
  align-self: center;
  font-size: 12px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: auto;
  flex: 1/2;
  margin-top: 40px;
  padding: 8px 8px 16px 16px;
`;

export const SearchResult = styled.p`
  font-style: italic;
  font-size: 12px;
`;

export const Loading = styled.p`
  text-align: center;
  align-self: center;
  color: gray;
  font-size: 18px;
`;
