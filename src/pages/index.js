import MainLayout from './../layout/main';
import contents from './../contents/pages/index.json';

import MainSection from './../sections/main';
import SocialSecuritySection from './../sections/social-security';

export default function IndexPage () {
  return (
    <MainLayout contents={contents}>
      <MainSection />
      <SocialSecuritySection />
    </MainLayout>
  );
}
