import styled from 'styled-components';

export const Main = styled.div`
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  display: flex;
  width: 40%;
  margin-top: 50px;
  padding: 8px 8px 16px 16px;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 800px;
`;

export const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    'sans-serif';
  display: flex;
  flex-wrap: auto;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Wishlist = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const WishlistActive = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const Label = styled.p`
  color: gray;
  font-size: 16px;
`;
