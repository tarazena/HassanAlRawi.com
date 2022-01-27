import { FC } from "react";

import {
  About,
  Contact,
  Hero,
  SlidesContainer,
  WhatIDo,
  WhatIUse,
} from "components";
import { Footer } from "components/shared/Footer";

export const Home: FC = () => (
  <SlidesContainer>
    <Hero />
    <About />
    <WhatIDo />
    <WhatIUse />
    <Contact />
    <Footer />
  </SlidesContainer>
);
