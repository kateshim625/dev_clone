import { useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import Profile from '../../assets/images/profile.png';
import EditReply from './EditReply';
import userPic from '../../assets/image/6.png';

const ReplyShow = ({
  setNewReply,
  newReply,
  setid,
  sameId,
  newid,
  index,
  comment,
  replyUrl,
  setCheckUseEffect,
  checkUseEffect,
  loginUser,
  loginid,
}) => {
  const [showButton, setShowButton] = useState(false);
  const [edit, setEdit] = useState(false);

  const removeReply = (e) => {
    const { value } = e.target;
    if (newReply.length > 0) {
      if (window.confirm('삭제 하시겠습니까?')) {
        axios({
          method: 'DELETE',
          url: `${replyUrl}/${parseInt(newReply[index].id, 10)}`,
        })
          .then(() => {
            setShowButton(!showButton);
            setNewReply(newReply.filter((a) => a.id !== parseInt(value, 10)));
          })
          .catch((err) => {
            return alert(err.message);
          });
      }
    }
  };

  const ShowTwoButton = () => {
    setShowButton(!showButton);
  };

  const showEdit = () => {
    setEdit(!edit);
    setShowButton(!showButton);
  };

  return (

    <>
    {/* folded comment */}
    {/* <FoldedComment>
      <FoldedUseInfo className="m:mx-1 inline-block align-middle">
        <FoldedCommentSvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="al8d30i5cz6ay9ke96mmvjqnkhrv96dq" className="crayons-icon collapsed"><title id="al8d30i5cz6ay9ke96mmvjqnkhrv96dq">Expand</title>
          <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
        </FoldedCommentSvg>
        <span>Liu YongLiang + 1 replies</span>
      </FoldedUseInfo>
    </FoldedComment> */}
    <div>
    {sameId === parseInt(setid, 10) && (
      // /* comments from people */
    <DoneComment>
        <div>
          <div>
            <UserPic></UserPic>
          </div>
          <CommentFoldDiv>
            <CommentFoldSpan>
              <CommentFoldIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ampvvs6v81z33tfotq2qdq5pqmzh4e2s" className="crayons-icon expanded"><title id="ampvvs6v81z33tfotq2qdq5pqmzh4e2s">Collapse</title>
                <path d="M12 10.677L8 6.935 9 6l3 2.807L15 6l1 .935-4 3.742zm0 4.517L9 18l-1-.935 4-3.742 4 3.742-1 .934-3-2.805z"></path>
              </CommentFoldIcon>
            </CommentFoldSpan>
          </CommentFoldDiv>
        </div>
        <CommentDoneBorderSize>
            <div>
            {/* 댓글 표시되는 부분  */}
            
                <CommentDoneSection>
                    <UserInfoDiv>
                        <UserInfo>
                        <UserNameBtn type="button">{loginid}</UserNameBtn>
                        <UserInfoSpan> • </UserInfoSpan>
                        <CommentTime>Feb 23</CommentTime>
                        </UserInfo>
                        <div className="MoreHiddenMenuDiv">
                        {/* 댓글 더보기옵션 버튼 클릭 토글 */}
                        {/* <span onClick={() => setShowMoreBtn(btnControl)}> */}
                        {loginUser === loginid && (
                        <span onClick={ShowTwoButton}>
                            <MoreIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a32utvszhlbfuu9s4mmda4ehwi4to6yk" className="crayons-icon pointer-events-none">
                                <title id="a32utvszhlbfuu9s4mmda4ehwi4to6yk">Dropdown menu</title>
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                            </MoreIcon>
                        </span>
                        )}
                        
                        {/* 댓글 더보기옵션 버튼 클릭시 수정 삭제 보여주고 숨기기 */}
                        {showButton === true && (
                            <MoreHiddenMenuDiv>
                                <ul>
                                    {/* 클릭한곳의 아이디를 가져오고 그 아이디만 삭제할수있도록 할수있다. Discussion.js > deleteComment 참고 */}
                                    <MoreMenus value={newid} onClick={removeReply}>DELETE</MoreMenus>
                                    {/* <Link to="/comms/delete"><MoreMenus comm={comm} onDelete={onDelete}>Delete</MoreMenus></Link> */}
                                    {/* <MoreMenus onClick={() => onUpdate(comm.id)} comm={comm}>Edit</MoreMenus> */}
                                    <MoreMenus onClick={showEdit}>DEIT</MoreMenus>
                                </ul>
                            </MoreHiddenMenuDiv>
                        )}
                        </div>
                    </UserInfoDiv>
                    <CommentContent>
                        <p>{comment}</p>
                    </CommentContent>
                </CommentDoneSection>
                {edit === true && (
                  <EditReply
                    replyUrl={replyUrl}
                    replyId={newid}
                    newReply={newReply}
                    setEdit={setEdit}
                    sameId={sameId}
                    setCheckUseEffect={setCheckUseEffect}
                    checkUseEffect={checkUseEffect}
                    loginid={loginid}
                  />
                )}

            </div>
            <div>
                <LikeReplyDiv>
                    <LikeReplyBtn className="crayons-btn crayons-btn--ghost crayons-btn--icon-left crayons-btn--s mr-1 reaction-like inline-flex reaction-button" id="button-for-comment-846611" data-comment-id="846611" title="heart" aria-pressed="false" type="button">
                        <LikeReplyIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a2k5810zqsl25cmmd7ajhya32do974nw" className="crayons-icon reaction-icon not-reacted"><title id="a2k5810zqsl25cmmd7ajhya32do974nw">Like comment: </title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></LikeReplyIcon>
                        {/* <LikeClickedIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a6pfnpeq0wca5ehpvd5p3fmub6176a99" className="crayons-icon crayons-icon reaction-icon--like reaction-icon reacted"><title id="a6pfnpeq0wca5ehpvd5p3fmub6176a99">Like comment: </title>
                          <path d="M5.116 12.595a4.875 4.875 0 015.56-7.68h-.002L7.493 8.098l1.06 1.061 3.181-3.182a4.875 4.875 0 016.895 6.894L12 19.5l-6.894-6.894.01-.01z"></path>
                        </LikeClickedIcon> */}
                        <span className="reactions-count" id="reactions-count-846611">5</span><span className="reactions-label hidden m:inline-block">&nbsp;likes</span>
                    </LikeReplyBtn>
                    <LikeReplyBtn type="button">
                        <LikeReplyLink className="actions crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left toggle-reply-form mr-1 inline-flex" href="#/arnavkr/using-darklight-mode-specific-images-in-github-markdown-3iln/comments/new/1m49p" data-comment-id="846611" data-path="/arnavkr/using-darklight-mode-specific-images-in-github-markdown-3iln/comments/1m49p" rel="nofollow">
                        <LikeReplyIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anefzw8fogycapisn0kzkjmroyfygsfx" className="crayons-icon reaction-icon not-reacted"><title id="anefzw8fogycapisn0kzkjmroyfygsfx">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></LikeReplyIcon>
                        <span className="hidden m:inline-block">Reply</span>
                        </LikeReplyLink>
                    </LikeReplyBtn>
                </LikeReplyDiv>
            </div>  
        </CommentDoneBorderSize>
    </DoneComment>  
    )}
    </div>
  </>

    // <div>
    //   {sameId === parseInt(setid, 10) && (
    //     <>
    //       {/* comments from people */}
    //       <DoneComment>
    //         <div>
    //           <div>
    //             <UserPic />
    //           </div>
    //         </div>
    //         <CommentDoneBorderSize>
    //           <div>
    //             {/* 댓글 표시되는 부분  */}
    //             <CommentDoneSection>
    //               <UserInfoDiv>
    //                 <UserInfo>
    //                   <UserNameBtn type="button">{loginid}</UserNameBtn>
    //                   <UserInfoSpan> • </UserInfoSpan>
    //                   <CommentTime>Feb 23</CommentTime>
    //                 </UserInfo>
    //                 <div>
    //                   {/* 댓글 더보기옵션 버튼 클릭 토글 */}
    //                   {loginUser === loginid && (
    //                     <span>
    //                       <MoreMenus onClick={ShowTwoButton}>
    //                         <MoreIcon
    //                           xmlns="http://www.w3.org/2000/svg"
    //                           width="24"
    //                           height="24"
    //                           viewBox="0 0 24 24"
    //                           role="img"
    //                           aria-labelledby="a32utvszhlbfuu9s4mmda4ehwi4to6yk"
    //                           className="crayons-icon pointer-events-none"
    //                         >
    //                           <title id="a32utvszhlbfuu9s4mmda4ehwi4to6yk">Dropdown menu</title>
    //                           <path
    //                             fillRule="evenodd"
    //                             clipRule="evenodd"
    //                             d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
    //                           />
    //                         </MoreIcon>
    //                       </MoreMenus>
    //                     </span>
    //                   )}
    //                 </div>

    //                 {/* 댓글 더보기옵션 버튼 클릭시 수정 삭제 보여주고 숨기기 */}
    //                 {showButton === true && (
    //                   <MoreHiddenMenuDiv>
    //                     <MoreCommBtnDiv>
    //                       <div>
    //                         <MoreMenus value={newid} onClick={removeReply}>
    //                           DELETE
    //                         </MoreMenus>
    //                       </div>
    //                       <div>
    //                         <MoreMenus onClick={showEdit}>EDIT</MoreMenus>
    //                       </div>
    //                     </MoreCommBtnDiv>
    //                   </MoreHiddenMenuDiv>
    //                 )}
    //               </UserInfoDiv>
    //               <CommentContent>
    //                 <p>{comment}</p>
    //               </CommentContent>
    //             </CommentDoneSection>
    //             {edit === true && (
    //               <EditReply
    //                 replyUrl={replyUrl}
    //                 replyId={newid}
    //                 newReply={newReply}
    //                 setEdit={setEdit}
    //                 sameId={sameId}
    //                 setCheckUseEffect={setCheckUseEffect}
    //                 checkUseEffect={checkUseEffect}
    //                 loginid={loginid}
    //               />
    //             )}
    //           </div>
    //         </CommentDoneBorderSize>
    //       </DoneComment>
    //     </>
    //   )}
    // </div>
  );
};

const FoldedUseInfo = styled.span``;
const FoldedComment = styled.div`
  display: flex;
  color: #717171;
  font-size: 14px;
  background: #f9f9f9;
  margin: 0 0 16px;
  padding: 4px 8px;
  border-radius: 0.375rem;
  vertical-align: baseline;
  ${FoldedUseInfo} {
    vertical-align: middle;
  }
`;
const FoldedCommentSvg = styled.svg`
  vertical-align: middle;
`;
const CommentFoldIcon = styled.svg`
  fill: #717171;
`;
const DoneComment = styled.div`
  display: flex;
  margin-bottom: 24px;
  &:hover {
    ${CommentFoldIcon} {
      fill: #171717;
    }
  }
`;
const CommentDoneBorderSize = styled.div`
  width: -webkit-fill-available;
`;
const UserPic = styled.img.attrs({
  src: `${userPic}`
})`
  width: 32px;
  height: 32px;
  margin-right: 8px; 
  border-radius: 32px;
  display: inline-block;
  vertical-align: bottom;
`;
const CommentFoldDiv = styled.div`
  color: #717171;
  font-size: 14px;
  margin: 0 0 16px;
  padding: 4px 0;
`;
const CommentFoldSpan = styled.span`
  margin: 0 4px;
`;
const LikeReplyDiv = styled.div`
  vertical-align: baseline;
`;
const LikeReplyBtn = styled.button`
  color: #3d3d3d;
  font-size: 14px;
  margin: 0 4px 0 0;
  padding: 4px 12px 4px 8px;
  vertical-align: middle;
  background-color: transparent;
  &:hover {
    color: #090909;
    font-size: 14px;
    background: #00000009;
    margin: 0 4px 0 0;
    padding: 4px 12px 4px 8px;
  }
`;
const LikeReplyIcon = styled.svg`
  vertical-align: middle;
  fill: #3d3d3d;
`;
const LikeReplyLink = styled.a`
  color: #3d3d3d;
`;

const LikeClickedIcon = styled.svg`
  vertical-align: middle;
  background: #dc26261a; 
  fill: #dc2626;
`;
const CommentDoneSection =styled.div`
  border-radius: 0.375rem;
  border: 1px solid #d4d4d4;
  color: #171717;
  font-size: 16px; 
  background: #ffffff;
  padding: 4px;
`;
const UserInfoDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px 0;
`;
const UserInfo = styled.div`
  color: #171717;
  font-size: 16px;
`;
const UserNameBtn = styled.button`
  background-color: transparent;
  color: #3d3d3d;
  font-size: 16px;
  margin: -4px 0 -4px -4px;
  padding: 4px; 
  &:hover {
    background-color: rgba(0,0,0,0.035);
    border-color: transparent;
    box-shadow: none;
    color: #090909;
    border-radius: 0.375rem;
  }
`;
const UserInfoSpan = styled.span`
  color: #bdbdbd;
  font-size: 16px;
  padding: 0 8px 0 0;
`;
const CommentTime = styled.time`
  color: #717171;
  font-size: 14px;
`;
const MoreIcon = styled.svg`
  fill: #3d3d3d;
  padding: 4px;
  &:hover {
    background-color: rgba(0,0,0,0.035);
    color: #090909;
    border-radius: 0.375rem;
  }
`;
const MoreHiddenMenuDiv = styled.div`
  position: absolute;
  top: 100%;
  right: 0%;
  color: #171717;
  font-size: 16px;
  background: #ffffff;
  margin: 4px 0 0;
  padding: 8px;
  border-radius: 0.375rem;
  max-width: 360px;
  min-width: 250px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  border: 1px solid #d4d4d4; 
`;
  const MoreMenus = styled.div`
  color: #404040;
  font-size: 16px;  
  padding: 8px;
  border-radius: 0.375rem;

  &:hover {
      color: #2f3ab2;
      background: rgba(59, 73, 223, 0.1);
  }
`;
const CommentContent = styled.div`
  font-size: 18px;
  margin: 8px 0 16px;
  padding: 0 12px;
  line-height: 28px;
`;

// const UserPic = styled.img.attrs({
//   src: `${Profile}`,
// })`
//   width: 32px;
//   height: 32px;
//   margin-right: 8px;
//   border-radius: 32px;
//   display: inline-block;
//   vertical-align: bottom;
// `;
// const CommentFoldIcon = styled.svg`
//   fill: #717171;
// `;
// const DoneComment = styled.div`
//   display: flex;
//   margin-bottom: 24px;
//   &:hover {
//     ${CommentFoldIcon} {
//       fill: #171717;
//     }
//   }
// `;
// const CommentDoneBorderSize = styled.div`
//   width: -webkit-fill-available;
// `;
// const CommentDoneSection = styled.div`
//   border-radius: 0.375rem;
//   border: 1px solid #d4d4d4;
//   color: #171717;
//   font-size: 16px;
//   background: #ffffff;
//   padding: 4px;
// `;
// const UserInfoDiv = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 8px 12px 0;
// `;
// const UserInfo = styled.div`
//   color: #171717;
//   font-size: 16px;
// `;
// const UserNameBtn = styled.button`
//   background-color: transparent;
//   color: #3d3d3d;
//   font-size: 16px;
//   margin: -4px 0 -4px -4px;
//   padding: 4px;
//   border: 0;
//   outline: 0;
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.035);
//     border-color: transparent;
//     box-shadow: none;
//     color: #090909;
//     border-radius: 0.375rem;
//   }
// `;
// const UserInfoSpan = styled.span`
//   color: #bdbdbd;
//   font-size: 16px;
//   padding: 0 8px 0 0;
// `;
// const CommentTime = styled.time`
//   color: #717171;
//   font-size: 14px;
// `;
// const MoreCommBtnDiv = styled.ul`
//   margin: 0;
//   padding: 0;
// `;
// const MoreIcon = styled.svg`
//   fill: #3d3d3d;
//   padding: 4px;
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.035);
//     color: #090909;
//     border-radius: 0.375rem;
//   }
// `;
// const MoreHiddenMenuDiv = styled.div`
//   position: absolute;
//   top: 100%;
//   right: 0%;
//   color: #171717;
//   font-size: 16px;
//   background: #ffffff;
//   margin: 4px 0 0;
//   padding: 8px;
//   border-radius: 0.375rem;
//   max-width: 360px;
//   min-width: 250px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
//   border: 1px solid #d4d4d4;
// `;
// const MoreMenus = styled.button`
//   color: #404040;
//   font-size: 16px;
//   padding: 8px;
//   width: 230px;
//   border-radius: 0.375rem;
//   &:hover {
//     color: #2f3ab2;
//     background: rgba(59, 73, 223, 0.1);
//   }
// `;
// const CommentContent = styled.div`
//   font-size: 18px;
//   margin: 8px 0 16px;
//   padding: 0 12px;
//   line-height: 28px;
// `;
export default ReplyShow;
