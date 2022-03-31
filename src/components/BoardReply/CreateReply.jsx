import { useState, useEffect } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import ShowTempSec from './Details/ShowTempSec';
import TemplatesBtn from './Details/TemplatesBtn';
import ReplyShow from './ReplyShow';

const Creply = ({ setid, replyUrl }) => {
  const [newReply, setNewReply] = useState([]);
  const fetchTasks = async () => {
    const res = await axios(replyUrl);
    const newData = await res.data;
    return setNewReply(newData);
  };

  const [checkUseEffect, setCheckUseEffect] = useState(true);
  const [newConmment, setNewConmment] = useState('');
  const [loginUser, setLoginUser] = useState(``);
  const [showTempSec, setShowTempSec] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;
    setNewConmment(value);
  };

  const CreateReply = (event) => {
    event.preventDefault();
    if (newConmment === '') {
      alert('댓글의 내용을 적어주세요.');
    } else {
      axios({
        method: 'POST',
        url: replyUrl,
        data: {
          loginid: loginUser,
          sameId: parseInt(setid, 10),
          comment: newConmment,
          like: 0,
        },
      })
        .then((res) => {
          setNewReply([...newReply, res]);
          setCheckUseEffect(!checkUseEffect);
          setNewConmment('');
          alert('생성이 완료되었습니다.');
        })
        .catch((err) => {
          return alert(err.message);
        });
    }
  };
  const newArray = newReply.filter((a) => a.sameId === parseInt(setid, 10)); // 댓글 갯수

  useEffect(() => {
    setLoginUser(sessionStorage.getItem('user_id'));
    fetchTasks();
  }, [checkUseEffect]);

  return (
    <CommentSection>
      <div>
        <DiscussionHeader>
          <div>
            <SubjectH2>Discussion ({newReply ? newArray.length : 0})</SubjectH2>
          </div>
          <Subscribe>
            <SubscribeDiv>
              <SubscribeBtn type="button">Subscribe</SubscribeBtn>
            </SubscribeDiv>
            {/* When Click Subscribe shows up */}
            <SubscribeBtnDiv>
              <SortBtn
                className="crayons-btn crayons-btn--outlined crayons-btn--icon"
                type="button"
                id="subscription-settings-btn"
                data-testid="subscription-settings"
                aria-expanded="true"
                aria-controls="subscription-settings-dropdown"
                aria-haspopup="true"
              >
                <SortIcon
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  role="img"
                  aria-labelledby="ai2ols8ka2ohfp0z568lj68ic2du21s"
                  className="crayons-icon"
                >
                  <title id="ai2ols8ka2ohfp0z568lj68ic2du21s">Preferences</title>
                  <path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z">
                    Subscribe
                  </path>
                </SortIcon>
              </SortBtn>
            </SubscribeBtnDiv>
          </Subscribe>
        </DiscussionHeader>
        {/* writing comment area */}
        {/* 댓글작성부분 */}

        {/* <WriteComment>
          <div>
            <UserPic></UserPic>
          </div>
          <CommentWriteDiv> */}
        <form>
          <CommentDiv>
            <TextareaDiv>
              <CommentTextarea
                type="text"
                placeholder="Please write a comment."
                value={newConmment}
                onChange={onChange}
              />
            </TextareaDiv>
            {/* When Click this below shows up */}
            <ClickedComment>
              <div>
                <CommentBtn
                  type="button"
                  className="crayons-btn crayons-btn--s crayons-btn--icon-left crayons-btn--ghost-dimmed"
                >
                  <CommentIcon
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="img"
                    className="crayons-icon"
                  />
                  <path d="M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z" />

                  <span className="hidden s:inline-block" aria-hidden="false">
                    Upload image
                  </span>
                </CommentBtn>
                {/* 템플릿 버튼컴포넌트에 showTempBtn 프롭을 넘겨주므로 클릭이 될때마다 참 거짓이 되게 만든다. */}
                <TemplatesBtn showTempBtn={() => setShowTempSec(!showTempSec)} />
              </div>
            </ClickedComment>
          </CommentDiv>
          <div>
            {/* When Click Templates button shows up -> 
                  showTempSec의 값이 참이면 showTempSec컴포넌트 보여주고
                  거짓이면 빈값보이게한다.
                  */}
            {showTempSec && <ShowTempSec />}

            <CommentBtnDiv>
              {loginUser && newConmment === '' ? (
                <>
                  <SubmitBtnDis type="button" disabled>
                    Submit
                  </SubmitBtnDis>
                  <PreViewBtnDis type="button" disabled>
                    Preview
                  </PreViewBtnDis>
                </>
              ) : (
                <>
                  <SubmitBtn type="submit" value="Submit" onClick={CreateReply} onKeyDown={CreateReply} />
                  <PreViewBtn type="button">Preview</PreViewBtn>
                </>
              )}
            </CommentBtnDiv>
          </div>
        </form>

        {/* // <CommentDetail comms={comms} onDelete={deleteComment} setComms={setComms} fetchComms={fetchComms} showMoreBtn={showMoreBtn} setShowMoreBtn={setShowMoreBtn} /> */}

        {newReply &&
          newReply.map((a, i) => {
            return (
              <ReplyShow
                setNewReply={setNewReply}
                newReply={newReply}
                setCheckUseEffect={setCheckUseEffect}
                checkUseEffect={checkUseEffect}
                key={Number(i)}
                index={i}
                sameId={a.sameId}
                comment={a.comment}
                newid={a.id}
                like={a.like}
                replyUrl={replyUrl}
                loginUser={loginUser}
                loginid={a.loginid}
                setid={setid}
              />
            );
          })}

        <FooterDiv>
          <button type="button">Code of Conduct</button>
          <FooterSpan> • </FooterSpan>
          <button type="button">Report abuse</button>
        </FooterDiv>
      </div>
    </CommentSection>
  );
};

const CommentSection = styled.section`
  background: rgb(255, 255, 255);
  box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.1);
  margin: 0 0 16px;
  padding: 32px 48px;
  position: relative;
  border-radius: 0.375rem;
`;
const DiscussionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
const SubjectH2 = styled.h2`
  font-size: 24px;
  color: #242424;
  font-weight: 700;
`;
const Subscribe = styled.div`
  border-radius: 0.375rem;
  border: 1px solid #d6d6d7;
  display: flex;
  vertical-align: baseline;
`;
const SubscribeDiv = styled.div`
  border-right: 1px solid #d6d6d7;
  vertical-align: middle;
  &:hover {
    background-color: rgba(0, 0, 0, 0.035);
    border-color: #a3a3a3;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    color: #090909;
  }
`;
const SubscribeBtnDiv = styled.div`
  vertical-align: middle;
`;
const SubscribeBtn = styled.button`
  border: 0;
  outline: 0;
  padding: 6px 14px;
  font-size: 16px;
  color: #3d3d3d;
  webkit-appearance: none;
  vertical-align: middle;
  background-color: transparent;
`;
const SortBtn = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.035);
    border-color: #a3a3a3;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    color: #090909;
  }
`;
const SortIcon = styled.svg`
  margin: 0 0 0 -2px;
  padding: 6px;
  fill: #717171;
  vertical-align: middle;
`;
const FooterSpan = styled.span``;
const FooterDiv = styled.div`
  text-align: center;
  color: #717171;
  font-size: 14px;
  ${FooterSpan} {
    padding: 0 8px;
  }
`;

const CommentDiv = styled.div`
  border-radius: 0.375rem;
  border: 1px solid #d4d4d4;
  margin-bottom: 12px;
  &:focus-within {
    border-color: #3b49df;
    0 0 0 1px #3b49df;
  }
`;
const TextareaDiv = styled.div`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;
const CommentTextarea = styled.textarea`
  padding: 8px;
  margin: 0;
  outline: none;
  width: -webkit-fill-available;
  box-shadow: none;
  border: none;
  transition: none 0s ease 0s;
  height: 129px;
  background: transparent;
  &:hover {
    resize: none;
  }
`;
const ClickedComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #d6d6d7;
  padding: 4px;
`;
const CommentBtn = styled.button`
  border: 0;
  outline: 0;
  vertical-align: middle;
  background-color: transparent;
  padding: 4px 12px 4px 8px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.035);
    border-color: transparent;
    box-shadow: none;
    color: #090909;
    border-radius: 0.375rem;
  }
`;
const CommentIcon = styled.svg`
  vertical-align: middle;
  padding: 4px 12px 4px 8px;
  font-size: 14px;
  fill: #717171;
`;

const CommentBtnDiv = styled.div`
  margin-bottom: 16px;
`;
const SubmitBtnDis = styled.button`
  color: #f9f9f9;
  font-size: 16px;
  background: #3b49df;
  margin: 0 8px 0 0;
  padding: 8px 16px;
  opacity: 0.6;
  cursor: not-allowed;
  border-radius: 0.375rem;
`;
const PreViewBtnDis = styled.button`
  color: #3d3d3d;
  font-size: 16px;
  background: #d6d6d7;
  margin: 0 8px 0 0;
  padding: 8px 16px;
  opacity: 0.6;
  cursor: not-allowed;
  border-radius: 0.375rem;
`;

const SubmitBtn = styled.input`
  color: #f9f9f9;
  font-size: 16px;
  background: #3b49df;
  margin: 0 8px 0 0;
  padding: 8px 16px;
  border-radius: 0.375rem;
  border: 0;
  outline: 0;
  &:hover {
    background-color: #2f3ab2;
    border-color: transparent;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    color: #f9f9f9;
  }
`;
const PreViewBtn = styled.button`
  color: #3d3d3d;
  font-size: 16px;
  background: #d6d6d7;
  margin: 0 8px 0 0;
  padding: 8px 16px;
  border-radius: 0.375rem;

  &:hover {
    background-color: #bdbdbd;
    border-color: transparent;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    color: #090909;
  }
`;
export default Creply;
