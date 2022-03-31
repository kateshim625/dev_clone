import styled from 'styled-components';

import postPic from '../../assets/image/2h6crhh836sfyu4dai13.webp';
import mainBannerImg from '../../assets/images/mainBanner.png';
import BaseLayout from '../../layouts/BaseLayout';
import Login from './Login';
import MiniBoard from './MiniBoard';
import SortTaps from './SortTaps';

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
          <PostImg />
          <MiniBoard detailUrl={detailUrl} boardUrl={boardUrl} boardName={boardName} boardReply={boardReply} />
        </PostSection>
        {/* studyDetailUrl */}
        <PostSection>
          <MiniBoard detailUrl={studyDetailUrl} boardUrl={studyUrl} boardName={studyName} boardReply={studyReply} />
        </PostSection>
        {/* Login */}
        <LoginSection>
          <Login />
        </LoginSection>
        {/* jobDetailUrl */}
        <PostSection>
          <MiniBoard detailUrl={jobDetailUrl} boardUrl={jobUrl} boardName={jobName} boardReply={jobReply} />
        </PostSection>
        {/* qnaDetailUrl */}
        <PostSection>
          <MiniBoard detailUrl={qnaDetailUrl} boardUrl={qnaUrl} boardName={qnaName} boardReply={qnadReply} />
        </PostSection>
      </InnerBox>
    </BaseLayout>
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
  src: `${postPic}`,
})`
  width: 100%;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

export default MainPage;
