/* empty css                          */
import { c as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, d as addAttribute } from '../astro_oDfeCEIU.mjs';
import { t as turso, $ as $$WikiLayout, a as $$MainLayout } from './_nutrient__Bbf6fiKT.mjs';

const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const query = `
    SELECT * FROM nutrients;
`;
  const { rows } = await turso.execute(query);
  let items = [];
  rows.forEach((e) => {
    items.push({
      id: e["id"],
      name: e["name"],
      description: e["description"]
    });
  });
  return renderTemplate`${renderComponent($$result, "WikiLayout", $$WikiLayout, { "title": "Nutrients" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl">Nutrients...</h1> <div class="grid grid-cols-2 gap-2"> <h1 class="font-bold text-2xl">Nutrient Name</h1> <h1 class="font-bold text-2xl">Nutrient Description</h1> ${items.map((item) => renderTemplate`<a${addAttribute(`/wiki/nutrients/${item.id}`, "href")} class="hover:bg-gray-100 hover:underline"> <div>${item.name}</div> <div>${item.description}</div> </a>`)} </div> ` })}`;
}, "/home/johann/github/malthael134/nutrack/app/src/pages/wiki/nutrients/index.astro", void 0);

const $$file$2 = "/home/johann/github/malthael134/nutrack/app/src/pages/wiki/nutrients/index.astro";
const $$url$2 = "/wiki/nutrients";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "WikiLayout", $$WikiLayout, { "title": "Wiki" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/wiki/nutrients" class="hover:underline">Nutrients Wiki</a> ` })}`;
}, "/home/johann/github/malthael134/nutrack/app/src/pages/wiki/index.astro", void 0);

const $$file$1 = "/home/johann/github/malthael134/nutrack/app/src/pages/wiki/index.astro";
const $$url$1 = "/wiki";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div></div> ` })}`;
}, "/home/johann/github/malthael134/nutrack/app/src/pages/index.astro", void 0);

const $$file = "/home/johann/github/malthael134/nutrack/app/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
