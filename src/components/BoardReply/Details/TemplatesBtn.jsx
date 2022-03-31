import React from 'react'
import styled from 'styled-components'

const TemplatesBtn = ({ showTempBtn }) => {
  return (
    // Discussion컴포넌트에서 넘겨준 프랍값 showTempBtn을 클릭이될때마다 값을 넘겨준다.
    <CommentBtn onClick={showTempBtn} type="button" className="crayons-btn crayons-btn--s crayons-btn--icon-left crayons-btn--ghost-dimmed response-templates-button" title="Use a response template" data-has-listener="true" data-form-id="new_comment">
        <CommentIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" className="crayons-icon">
        <path d="M3 18.5V5a3 3 0 013-3h14a1 1 0 011 1v18a1 1 0 01-1 1H6.5A3.5 3.5 0 013 18.5zM19 20v-3H6.5a1.5 1.5 0 100 3H19zM10 4H6a1 1 0 00-1 1v10.337A3.485 3.485 0 016.5 15H19V4h-2v8l-3.5-2-3.5 2V4z"></path>
        </CommentIcon>
        <span className="hidden s:inline-block" aria-hidden="false">Templates</span>
    </CommentBtn>
  );
};
const CommentBtn = styled.button`
  border: 0;
  outline: 0;
  vertical-align: middle;
  background-color: transparent;
  padding: 4px 12px 4px 8px;
  &:hover {
    background-color: rgba(0,0,0,0.035);
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
export default TemplatesBtn