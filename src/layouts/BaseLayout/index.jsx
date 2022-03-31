import styled from 'styled-components';

import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';
import AsideMain from './RightSide';

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Flex>
        <Aside />
        <div>
          {children}
        </div>
        <AsideMain />
      </Flex>
      <Footer />
    </div>
  );
};

const Flex = styled.div`
  display: flex;
  padding-top: 57px;
  > div {
    position: relative;
  }
`;

export default BaseLayout;

// const Flex = styled.div`
//   display: flex;
//   padding-top: 80px;
//   > div {
//     position: relative;
//     left: 260px;
//     width: calc(100% - 260px);
//   }
// `;