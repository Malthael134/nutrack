/* empty css                          */
import 'react/jsx-runtime';
import 'react';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as createAstro, f as renderHead, g as renderComponent, h as renderSlot } from '../astro_oDfeCEIU.mjs';
import { createClient } from '@libsql/client/web';

const turso = createClient({
  url: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined, "ACTIONS_PATH": "/home/johann/github/malthael134/nutrack/app/src/actions"}.TURSO_DATABASE_URL,
  authToken: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined, "ACTIONS_PATH": "/home/johann/github/malthael134/nutrack/app/src/actions"}.TURSO_AUTH_TOKEN
});

const $$Astro$3 = createAstro();
const $$Topnav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Topnav;
  const currentURL = new URL(Astro2.request.url);
  const isWikiOrSub = currentURL.pathname === "/wiki" || currentURL.pathname.startsWith("/wiki/");
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-24 flex flex-row bg-transparent px-8 py-6 items-center gap-4"> <a href="/"> <span class="text-2xl">NuTrack</span> </a> <a href="/wiki"> <span${addAttribute(`hover:underline ${isWikiOrSub ? "" : ""}`, "class")}>Wiki</span> </a> </div>`;
}, "/home/johann/github/malthael134/nutrack/app/src/components/Topnav.astro", void 0);

const $$Astro$2 = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const helpers = {
    title: (title2) => {
      return `${title2} - NuTrack`;
    }
  };
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${helpers.title(title)}</title>${renderHead()}</head> <div class="w-full h-full flex-col pl-10 pr-10"> ${renderComponent($$result, "Topnav", $$Topnav, {})} ${renderSlot($$result, $$slots["default"])} </div> </html>`;
}, "/home/johann/github/malthael134/nutrack/app/src/layouts/MainLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$WikiLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WikiLayout;
  const helpers = {
    title: (title2) => {
      return `Wiki: ${title2} - NuTrack`;
    }
  };
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${helpers.title(title)}</title>${renderHead()}</head> <div class="w-full h-full flex-col pl-10 pr-10"> ${renderComponent($$result, "Topnav", $$Topnav, {})} ${renderSlot($$result, $$slots["default"])} </div> </html>`;
}, "/home/johann/github/malthael134/nutrack/app/src/layouts/WikiLayout.astro", void 0);

const $$Astro = createAstro();
const $$nutrient = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$nutrient;
  const { nutrient } = Astro2.params;
  const { rows } = await turso.execute({
    sql: `SELECT * FROM nutrients WHERE id = ?`,
    args: [nutrient]
  });
  const item = rows.length > 0 ? {
    name: rows[0]["name"],
    description: rows[0]["description"],
    image_url: rows[0]["image_url"]
  } : void 0;
  return renderTemplate`${renderComponent($$result, "WikiLayout", $$WikiLayout, { "title": nutrient }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/wiki/nutrients" class="hover:underline">Back to nutrients</a> ${item ? renderTemplate`<article class="grid grid-cols-12 grid-rows-6 gap-5"> <h1 class="col-span-3 row-span-1 font-bold">${item.name}</h1> <div class="col-span-9 row-span-6 w-full h-full"> <img${addAttribute(item.image_url, "src")}${addAttribute(`${item.name} image is missing or invalid`, "alt")} class="w-20 h-20 text-red-400"> </div> <div class="col-span-3 row-span-5">${item.description}</div> </article>` : renderTemplate`<p>Element not found</p>`}` })}`;
}, "/home/johann/github/malthael134/nutrack/app/src/pages/wiki/nutrients/[nutrient].astro", void 0);

const $$file = "/home/johann/github/malthael134/nutrack/app/src/pages/wiki/nutrients/[nutrient].astro";
const $$url = "/wiki/nutrients/[nutrient]";

const _nutrient_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$nutrient,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$WikiLayout as $, _nutrient_ as _, $$MainLayout as a, turso as t };
