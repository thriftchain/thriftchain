import styled from 'styled-components';
import { devices } from '../../utils/device';

export const OverviewParent = styled.div`
  padding: 40px 32px 56px 32px;
  background: #070624;

  @media ${devices.md} {
    padding: 40px 40px 96px 32px;
  }
`;

export const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #070624;
`;

export const SummaryContainer = styled.section`
width: 100%;
height: 45%;
display: flex;
gap: 1.5rem;
margin-left:2rem;
align-items: center;

  
`;



export const SummaryCard = styled.div`
  width:30%;
  display: flex;
  flex-direction: column;
  background: #060E37;
  border-radius:10px;
  border: 1px solid white;

  & h3{
    color: #fff;
    font-size: 1.3rem;
    font-weight:500;
    margin-left:1rem;
  }

  & p{
    font-size:1rem;
    color: #fff;
    margin-left:1rem;
  }

  & img{
    border-radius:10px;
  }
`;



export const Header = styled.div`
  margin-bottom: 24px;
  & h2 {
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
  }
  @media ${devices.md} {
    & h2 {
      font-size: 2rem;
    }
  }
`;
