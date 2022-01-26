import { FC } from "react";

import { About, Contact, Hero, SlidesContainer, WhatIDo, WhatIUse } from "components";

export const Home: FC = () => (
  <SlidesContainer>
    <Hero />
    <About />
    <WhatIDo />
    <WhatIUse />
    <Contact />
  </SlidesContainer>
);
