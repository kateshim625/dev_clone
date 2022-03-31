import styled from 'styled-components';

import mainBannerImg from '../../assets/images/mainBanner.png';
import BaseLayout from '../../layouts/BaseLayout';
import MiniBoard from './MiniBoard';

import postPic from '../../assets/image/2h6crhh836sfyu4dai13.webp';
import SortTaps from './SortTaps';
import Login from './Login';

const MainPage = () => {
  const detailUrl = 'Board';
  const boardUrl = 'http://localhost:8000/boards';
  const boardReply = 'http://localhost:8000/boardsReply';
  const boardName = '자유';

  const studyDetailUrl = 'studyBoard';
  const studyUrl = 'http://localhost:8000/studyBoards';
  const studyReply = 'http://localhost:8000/studyReply';
  const studyName = '스터디';

  const jobDetailUrl = 'jobBoard';
  const jobUrl = 'http://localhost:8000/jobBoards';
  const jobReply = 'http://localhost:8000/jobReply';
  const jobName = '취업';

  const qnaDetailUrl = 'qnaBoard';
  const qnaUrl = 'http://localhost:8000/qnaBoards';
  const qnadReply = 'http://localhost:8000/qnaReply';
  const qnaName = 'QnA';

  return (
    <BaseLayout>
      <InnerBox>
          {/* Sort Tap section */}
          <MainHeader>
              <SortTaps />
          </MainHeader>
          {/* detailUrl */}
          <PostSection>
              <PostImg></PostImg>
              <MiniBoard detailUrl={detailUrl} boardUrl={boardUrl} boardName={boardName} boardReply={boardReply}/>
          </PostSection>
          {/* studyDetailUrl */}
          <PostSection>
              <MiniBoard detailUrl={studyDetailUrl} boardUrl={studyUrl} boardName={studyName} boardReply={studyReply}/>
          </PostSection>
          {/* Login */}
          <LoginSection>
              <Login />
          </LoginSection>
          {/* jobDetailUrl */}
          <PostSection>
              <MiniBoard detailUrl={jobDetailUrl} boardUrl={jobUrl} boardName={jobName} boardReply={jobReply}/>
          </PostSection>
          {/* qnaDetailUrl */}
          <PostSection>
              <MiniBoard detailUrl={qnaDetailUrl} boardUrl={qnaUrl} boardName={qnaName} boardReply={qnadReply}/>
          </PostSection>
      </InnerBox>
  </BaseLayout>
    
    // <BaseLayout>
    //   <S.Banner>
    //     <b>Study</b>
    //     <div>
    //       <span>with</span>
    //       <b>US</b>
    //     </div>
    //   </S.Banner>
    //   <S.Main>
    //     <S.Grid>
    //       <MiniBoard detailUrl={detailUrl} boardUrl={boardUrl} boardName={boardName} boardReply={boardReply} />
    //       <MiniBoard detailUrl={studyDetailUrl} boardUrl={studyUrl} boardName={studyName} boardReply={studyReply} />
    //       <MiniBoard detailUrl={jobDetailUrl} boardUrl={jobUrl} boardName={jobName} boardReply={jobReply} />
    //       <MiniBoard detailUrl={qnaDetailUrl} boardUrl={qnaUrl} boardName={qnaName} boardReply={qnadReply} />
    //     </S.Grid>
    //   </S.Main>
    // </BaseLayout>
  );
};

const InnerBox = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 16px 0;
`;
const MainHeader = styled.header`
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
`;
const PostSection = styled.div`
    background: rgb(255, 255, 255);
    box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.1);
    margin: 0 0 0.5rem;
    position: relative;
    border-radius: 0.375rem;
`;
const LoginSection = styled.div`
    padding: 32px;
    margin-bottom: 12px;
`;
const PostImg = styled.img.attrs({
    src: `${postPic}`
})`
    width: 100%;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
`;

const S = {
  Flex: styled.div`
    display: flex;
    padding-top: 80px;
  `,
  Banner: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 470px;
    background: center / 100% 100% url(${mainBannerImg}) no-repeat;
    color: #fff;
    b {
      font-size: 100px;
      font-weight: 900;
    }
    > b {
      position: relative;
      right: 60px;
      bottom: 40px;
    }
    div {
      position: relative;
      top: 20px;
      span {
        font-size: 36px;
        font-weight: 500;
        margin-right: 20px;
      }
      b {
        position: relative;
        top: 20px;
      }
    }
  `,
  Main: styled.main`
    background-color: #fafafa;
    padding: 50px 100px;
    margin-bottom: 60px;
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 30px;
  `,
};

export default MainPage;
