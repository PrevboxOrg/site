import MainLayout from './../layout/main';
import contents from './../contents/pages/index.json';

import MainSection from './../sections/main';
import SocialSecuritySection from './../sections/social-security';
import PetitionDatabaseSection from './../sections/petition-database';
import AboutUsSection from './../sections/about-us';
import FAQSection from './../sections/faq';
import PlansSection from './../sections/plans';

import CTA from './../components/cta';

export default function IndexPage () {
  return (
    <MainLayout contents={contents}>
      <MainSection />
      <SocialSecuritySection />
      <PetitionDatabaseSection />
      <AboutUsSection />
      <FAQSection />
      <PlansSection />
      <CTA />
    </MainLayout>
  );
}
