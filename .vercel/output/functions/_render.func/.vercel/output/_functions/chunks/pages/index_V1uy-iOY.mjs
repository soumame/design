/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, j as renderComponent, k as renderSlot, m as maybeRenderHead, h as addAttribute } from '../astro_26O6AZIh.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$3 = createAstro();
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Head;
  return renderTemplate`<head>${renderHead()}</head>`;
}, "/Users/soumame/Documents/GitHub/design/src/components/Head.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<head>${renderComponent($$result, "Head", $$Head, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Topmenu", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/soumame/Documents/GitHub/design/src/components/Topmenu", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} </body>`;
}, "/Users/soumame/Documents/GitHub/design/src/components/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const title = "Example";
const description = "This is an template page.";
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-col justify-center items-center bg-gray-300 h-screen w-screen"> <h1 class="text-3xl font-bold bg-gradient-to-r from-sky-800 to-indigo-800 inline-block text-transparent bg-clip-text">
Hello world!
</h1> </div> ` })}`;
}, "/Users/soumame/Documents/GitHub/design/src/pages/example/index.astro", void 0);

const $$file$1 = "/Users/soumame/Documents/GitHub/design/src/pages/example/index.astro";
const $$url$1 = "/example";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  description,
  file: $$file$1,
  title,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pages = await Astro2.glob(/* #__PURE__ */ Object.assign({"./example/index.astro": () => Promise.resolve().then(() => index$1)}), () => "../pages/*/index.astro");
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body class="from-black to-zinc-700 bg-gradient-to-tr w-screen h-screen flex justify-center items-center"> <div class="flex justyfy-center items-center"> <div class="w-[50%] md:w-full h-full justify-center items-center p-4 gap-2"> <img src="mame.svg" class="h-12 w-12 rounded-full overflow-hidden"> <h1 class="text-6xl text-white font-thin font-mono">
So Tokumaru's Web Design Note
</h1> <button class="text-gray-200 text-sm p-2 rounded-lg font-mono font-bold relative bg-transparent hover:bg-gray-500/50 border border-gray-100/30 hover:border-green-400 hover:shadow shadow-sky-200">
My portfolio
<a href="https://so-bean.work" class="text-sm absolute top-0 left-0 w-full h-full"></a> </button> </div> <div class="w-[50%] md:w-full h-full p-4"> <div class="max-h-[90vh] overflow-y-scroll"> ${pages.map((page) => renderTemplate`<div class="mt-4 p-3 relative transition-all bg-transparent hover:bg-gray-500/50 border border-gray-100/30 hover:border-sky-400 hover:shadow shadow-sky-200 rounded-lg"> <h2 class="text-gray-200 text-lg font-bold">${page.title}</h2> <p class="text-gray-400 text-sm">${page.description}</p> <a${addAttribute(page.url, "href")} class="absolute top-0 left-0 w-full h-full"></a> <img${addAttribute(page.image, "src")} class="w-full"> </div>`)} </div> </div> </div> </body></html>`;
}, "/Users/soumame/Documents/GitHub/design/src/pages/index.astro", void 0);

const $$file = "/Users/soumame/Documents/GitHub/design/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
