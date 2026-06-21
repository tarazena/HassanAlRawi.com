// @ts-check
import { defineConfig } from "astro/config";

// Output to `build/` so the existing Firebase architecture stays unchanged:
// firebase.json `hosting.public` is "build", and both GitHub workflows run
// the `build` script then deploy that directory. The `/contact` rewrite to the
// `contact` Cloud Function continues to work untouched.
export default defineConfig({
  site: "https://www.hassanalrawi.com",
  outDir: "./build",
});
