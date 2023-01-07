import { FC } from "react";

import {
  About,
  Contact,
  Hero,
  WhatIDo,
  WhatIUse,
  Footer,
} from "components";

export const Home: FC = () => (
  <>
    <Hero />
    <About />
    <WhatIDo />
    <WhatIUse />
    <Contact />
    <Footer />
  </>
);
