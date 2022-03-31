import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SortTaps = () => {
  return (
    <>
      <MainUl>
        <MainLi>
          <MainLink href="">
            <Link to="/board">Listing</Link>
          </MainLink>
        </MainLi>
        <MainLi>
          <MainLink href="">
            <Link to="/studyBoard">Podcast</Link>
          </MainLink>
        </MainLi>
        <MainLi>
          <MainLink href="">
            <Link to="/jobBoard">
              <FontW>Job</FontW>
            </Link>
          </MainLink>
        </MainLi>
        <MainLi>
          <MainLink href="">
            <Link to="/qnaBoard">FAQ</Link>
          </MainLink>
        </MainLi>
      </MainUl>
      <DaySortUl>
        <MainLi>
          <MainLink href="">
            <FontW>Week</FontW>
          </MainLink>
        </MainLi>
        <MainLi>
          <MainLink href="">Month</MainLink>
        </MainLi>
        <MainLi>
          <MainLink href="">Year</MainLink>
        </MainLi>
        <MainLi>
          <MainLink href="">Infinity</MainLink>
        </MainLi>
      </DaySortUl>
    </>
  );
};

const MainUl = styled.ul`
  display: flex;
  margin: -4px 0;
  padding: 4px 0;
  font-size: 18px;
`;
const MainLink = styled.a`
  text-decoration: none;
  color: #090909;
`;
const MainLi = styled.li`
  padding: 8px 12px;
  &:hover {
    background-color: rgb(255, 255, 255);
    border-radius: 0.375rem;
    ${MainLink} {
      color: #3b49df;
    }
  }
`;
const DaySortUl = styled.ul`
  font-size: 16px;
  display: flex;
  margin: -4px 0;
  padding: 4px 0;
`;
const FontW = styled.p`
  font-weight: 700;
  color: #404040;
`;
export default SortTaps;
