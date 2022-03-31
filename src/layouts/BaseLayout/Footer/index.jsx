import styled from 'styled-components';

const Footer = () => {
  return (

    <FooterSec>
        <FooterSize>
        <p>
            <FooterLink href="https://dev.to/">DEV Community</FooterLink> — A constructive and inclusive social network for software developers. With you every step of your journey.<br />
        </p>
        </FooterSize>
        <FooterSize>
        <p>
            Built on <FooterLink href="https://www.forem.com/">Forem</FooterLink> — the <FooterLink href="https://dev.to/t/opensource">open source</FooterLink> software that powers <FooterLink href="https://dev.to/">DEV</FooterLink> and other inclusive communities.
        </p>
        <p>
            Made with love and <FooterLink href="https://dev.to/t/rails">Ruby on Rails</FooterLink>. DEV Community © 2016 - 2022.<br />
        </p>
        </FooterSize>
        <FooterSize>
        <FooterLink href="https://www.forem.com" target="_blank" rel="noopener" className="c-link c-link c-link--block c-link--icon-alone self-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-labelledby="a3q8n6mr33dlic1u5juqw7h9lnsrws6b" className="crayons-icon crayons-icon--default c-link__icon"><title id="a3q8n6mr33dlic1u5juqw7h9lnsrws6b">Forem logo</title>
                <g clipPath="" fill="#1AB3A6">
                    <path d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z"></path>
                </g>
                {/* <defs>
                    <clipPath id="clip0">
                        <path fill="#fff" d="M0 0h24v24H0z"></path>
                    </clipPath>
                </defs> */}
            </svg>
        </FooterLink>
        </FooterSize>
    </FooterSec>

    // <S.Footer>
    //   <h2>SWFB STUDY</h2>
    //   <S.Flex>
    //     <ul>
    //       <li>고객센터 010-0000-0000</li>
    //       <li>정보2</li>
    //     </ul>
    //     <span>서울 영등포구</span>
    //   </S.Flex>
    // </S.Footer>
  );
};
const FooterSec = styled.footer`
  color: #404040;
  font-size: 16px;
  background: #e5e5e5;
  padding: 48px;
  text-align: center;
  clear: both;
`;
const FooterSize = styled.div`
  margin-bottom: 20px;
`;
const FooterLink = styled.a`
  color: #3b49df;
`;
// const S = {
//   Footer: styled.footer`
//     padding: 40px 100px;
//     margin-bottom: 6px;
//     border-top: 1px solid #ced7e1;
//     h2 {
//       margin-bottom: 8px;
//       font-size: 16px;
//       font-weight: 700;
//     }
//   `,
//   Flex: styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     ul {
//       display: flex;
//       gap: 30px;
//       font-size: 12px;
//     }
//     span {
//       font-weight: 500;
//     }
//   `,
// };
export default Footer;
