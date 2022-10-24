import styled from '@emotion/styled';

import { DEMO_PROFILE_IMAGE_URL } from '../../../__mocks__';
import { TextButton } from '../../../components/atoms';
import MemberList from '../../../components/atoms/MemberList';
import { SegmentTab, TopNavBar } from '../../../components/molecules';
import colors from '../../../styles/colors';
import { regular16, semiBold16 } from '../../../styles/typography';

const GROUP_MEMBERS_MOCK = [
  {
    id: 1,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름'
  },
  {
    id: 2,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름'
  },
  {
    id: 3,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름'
  },
  {
    id: 4,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름'
  },
  {
    id: 5,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름'
  },
  {
    id: 6,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름'
  },
  {
    id: 7,
    src: DEMO_PROFILE_IMAGE_URL,
    name: '구성원 이름'
  }
];

const INVITE_CODE_MOCK = '122 321';

const Background = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: ${colors.grayScale.gray01};
`;

const TabContainer = styled.div`
  padding: 12px 20px;
  background-color: ${colors.grayScale.white};
`;

const InviteCodeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background-color: ${colors.grayScale.white};
`;

const CodeLabel = styled.span`
  ${regular16}
  margin-right: 12px;
  color: ${colors.grayScale.gray04};
`;

const InviteCode = styled.strong`
  ${semiBold16}
  color: ${colors.grayScale.gray05};
`;

const InviteCodePasteButton = styled(TextButton)`
  margin-left: auto;
`;

const WhiteBox = styled.div`
  margin-top: 16px;
  background-color: ${colors.grayScale.white};
`;

const Member = () => {
  return (
    <Background>
      <TopNavBar backURL="/group" setting={false} />
      <TabContainer>
        <SegmentTab
          leftTabLabel="모임 정보"
          rightTabLabel="구성원 관리"
          leftTabHref="./information"
          rightTabHref=""
          selectedTabIndex={1}
        />
      </TabContainer>
      <InviteCodeContainer>
        <CodeLabel>초대 코드</CodeLabel>
        <InviteCode>{INVITE_CODE_MOCK}</InviteCode>
        <InviteCodePasteButton
          color="navy"
          disabled={false}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        >
          초대 코드 복사하기
        </InviteCodePasteButton>
      </InviteCodeContainer>
      <WhiteBox>
        {GROUP_MEMBERS_MOCK.map(({ id, src, name }) => (
          <MemberList key={id} {...{ src, name }} />
        ))}
      </WhiteBox>
    </Background>
  );
};

export default Member;
