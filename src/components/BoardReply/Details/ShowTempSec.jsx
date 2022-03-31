import React from 'react'
import styled from 'styled-components'

const ShowTempSec = () => {
  return (
    <ClickTemp>
        <img className="loading-img hidden" src="https://dev.to/assets/loading-ellipsis-b714cf681fd66c853ff6f03dd161b77aa3c80e03cdc06f478b695f42770421e9.svg" alt="loading" loading="lazy" />
        <div>🤔... It looks like you don't have any templates yet.</div>
        <CreateTempA>Create template</CreateTempA>
        <p>Templates let you quickly answer FAQs or store snippets for re-use.</p>
    </ClickTemp>
  )
}
const ClickTemp = styled.div`
  padding: 16px;
  margin: 0 0 16px;
  background: #FAFAFA;
  color: #404040;
  font-size: 16px;
  border-radius: 0.375rem;
  line-height: 25px;
`;
const CreateTempA = styled.a`
  color: #3b49df;
  font-size: 16px;  
`;

export default ShowTempSec