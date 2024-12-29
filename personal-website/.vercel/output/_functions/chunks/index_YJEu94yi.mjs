/* empty css                         */
import { p as createComponent, q as renderTemplate, s as maybeRenderHead, t as addAttribute, w as renderSlot, v as createAstro, x as renderComponent, z as renderHead } from './astro/server_CME9ji4E.mjs';
import { Mail, Linkedin, Github } from 'lucide-react';

const $$Astro$2 = createAstro();
const $$ButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ButtonLink;
  const { link, fullwidth } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} target="_blank" data-astro-cid-qkxryic3> <button${addAttribute(fullwidth ? "w-full" : "", "class")} data-astro-cid-qkxryic3> <p class="" data-astro-cid-qkxryic3>${renderSlot($$result, $$slots["default"])}</p> </button> </a> `;
}, "/Users/jeffsabarman/Documents/Freelance/personal-website/personal-website/src/components/shared/ButtonLink.astro", void 0);

const linkToEmail = "mailto:jeffsabarman@gmail.com";
const idContactSection = "contact-section";
const idContactMenu = "contact-menu";

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="py-[2rem] max-md:py-[1rem] flex-col space-y-[2.8rem]" data-astro-cid-bbe6dxrz> <!-- <div class="flex-col">
        <p class="text-white font-thin text-sm">Hi, my name is</p>
        <p class="text-white font-medium text-3xl">Jeffrey Triandi Sabarman</p>
        <p class="text-orange font-semibold text-2xl">Front End Engineer</p>
    </div>
</div> --> <p class="text-xl max-sm:text-lg" data-astro-cid-bbe6dxrz>I'm a web developer currently doing a master's in Data Science and AI in Liverpool, UK</p> <!-- <button>Get in touch!</button> --> <div data-astro-cid-bbe6dxrz> ${renderComponent($$result, "ButtonLink", $$ButtonLink, { "link": linkToEmail, "data-astro-cid-bbe6dxrz": true }, { "default": ($$result2) => renderTemplate`Get in touch!` })} </div> </div> `;
}, "/Users/jeffsabarman/Documents/Freelance/personal-website/personal-website/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex-col space-y-2" data-astro-cid-kqp5rlkh> <p class="text-base" data-astro-cid-kqp5rlkh>${text}</p> <hr class="w-[2.4rem]" data-astro-cid-kqp5rlkh> </div> `;
}, "/Users/jeffsabarman/Documents/Freelance/personal-website/personal-website/src/components/shared/SectionTitle.astro", void 0);

const $$TechStack = createComponent(($$result, $$props, $$slots) => {
  const skills = [
    { text: "JavaScript (ES6+)", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { text: "TypeScript", link: "https://www.typescriptlang.org/" },
    { text: "Python", link: "https://www.python.org/" },
    { text: "React", link: "https://react.dev/" },
    { text: "Next.js", link: "https://nextjs.org/" },
    { text: "Node.js", link: "https://nodejs.org/en" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex-col space-y-10" data-astro-cid-lfow52u2> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "text": "Development Stack", "data-astro-cid-lfow52u2": true })} <div class="grid grid-cols-3 max-md:grid-cols-2 gap-[1rem]" data-astro-cid-lfow52u2> ${skills.map((skill) => (
    // <div class="box">
    //     <p class="">{skill}</p>
    // </div>
    renderTemplate`${renderComponent($$result, "ButtonLink", $$ButtonLink, { "link": skill.link, "fullwidth": true, "data-astro-cid-lfow52u2": true }, { "default": ($$result2) => renderTemplate`${skill.text}` })}`
  ))} </div> </div> `;
}, "/Users/jeffsabarman/Documents/Freelance/personal-website/personal-website/src/components/TechStack.astro", void 0);

const SWPCImage = new Proxy({"src":"/_astro/swpc.D4Bloq2y.webp","width":1200,"height":800,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jeffsabarman/Documents/Freelance/personal-website/personal-website/src/assets/swpc.webp";
							}
							
							return target[name];
						}
					});

const ComicWikiImage = new Proxy({"src":"/_astro/comic-wiki.nOW3CLmV.webp","width":1200,"height":800,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jeffsabarman/Documents/Freelance/personal-website/personal-website/src/assets/comic-wiki.webp";
							}
							
							return target[name];
						}
					});

const WeddingInvitationImage = new Proxy({"src":"/_astro/wedding-invitation.CGbnO_XY.webp","width":1200,"height":800,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jeffsabarman/Documents/Freelance/personal-website/personal-website/src/assets/wedding-invitation.webp";
							}
							
							return target[name];
						}
					});

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "Sing With Piano Collections",
      year: 2022,
      image: SWPCImage,
      desc: "Sing with Piano Collections is a website offering high-quality piano accompaniment sheets, as seen on the YouTube channel. This project provided me with the opportunity to work on various aspects, including design, front-end development, authentication and authorization, database management, and payment integration with PayPal.",
      link: "https://www.singwithpiano-collections.com/",
      techStack: ["Next.js", "TypeScript", "Material UI", "MongoDB", "Apollo Client", "GraphQL"]
    },
    {
      title: "Wedding Invitation",
      year: 2023,
      image: WeddingInvitationImage,
      desc: "This project is a wedding invitation website created for a happy couple in the UK. It allowed me to develop a static site using Gatsby, optimize images for better performance, incorporate animation effects using Framer Motion, and use the Google Sheets API to store and display guest wishes.",
      link: "https://main--stephen-candice-wedding-invitation.netlify.app/",
      techStack: ["Gatsby", "TypeScript", "Material UI", "Framer Motion", "Google Sheets API"]
    },
    {
      title: "Comic Wiki",
      year: 2021,
      image: ComicWikiImage,
      desc: "This project was my first time building a website with React, integrating it with the superhero-api, and implementing Redux for state management. The website allows users to store and look up details about their chosen hero or villain, and even battle them to determine the winner, all styled with pure CSS!",
      link: "https://comic-wiki.web.app/",
      techStack: ["React", "Redux", "CSS"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex-col space-y-10" data-astro-cid-amng4zvp> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "text": "Digital Builds", "data-astro-cid-amng4zvp": true })} <div class="grid grid-cols-1 gap-[6rem]" data-astro-cid-amng4zvp> ${projects.map((project) => renderTemplate`<div class="flex-col gap-4" data-astro-cid-amng4zvp>  <div class="flex-col space-y-6" data-astro-cid-amng4zvp> <div class="flex-col space-y-4" data-astro-cid-amng4zvp> <div class="flex justify-between items-end" data-astro-cid-amng4zvp> <p class="text-sm font-semibold" data-astro-cid-amng4zvp>${project.title}</p> <p class="opacity-60" data-astro-cid-amng4zvp>${project.year}</p> </div> <p class="text-sm" data-astro-cid-amng4zvp>${project.desc}</p> </div> <div class="flex flex-wrap" data-astro-cid-amng4zvp> ${project.techStack.map((tech) => renderTemplate`<div class="mr-4" data-astro-cid-amng4zvp> <p class="text-orange" data-astro-cid-amng4zvp>${tech}</p> </div>`)} </div> <div data-astro-cid-amng4zvp> ${renderComponent($$result, "ButtonLink", $$ButtonLink, { "link": project.link, "data-astro-cid-amng4zvp": true }, { "default": ($$result2) => renderTemplate`View Site` })} </div> </div> </div>`)} </div> </div> `;
}, "/Users/jeffsabarman/Documents/Freelance/personal-website/personal-website/src/components/Projects.astro", void 0);

const $$HeaderIndex = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- <div class="sticky top-0">
    <div class=" flex justify-between items-center py-4 px-60"> 
        <div>
            <h1 class="logo">JTS</h1>
        </div>
        <div class="flex gap-12 items-center">
            <a class="menu-text text-sm font-normal">About</a>
            <a class="menu-text text-sm font-normal">Experience</a>
            <a class="menu-text text-sm font-normal">Work</a>
            <a class="menu-text text-sm font-normal">Contract</a>
            <Icon name="ion:contrast" class="text-base text-white cursor-pointer" />
        </div>
    </div>
</div> -->${maybeRenderHead()}<div class="flex justify-between items-center" data-astro-cid-wr2g5n4i> <!-- <div class="hover:cursor-pointer"> --> <div class="" data-astro-cid-wr2g5n4i> <p class="text-sm name-text text-dark-blue font-semibold" data-astro-cid-wr2g5n4i>Jeffrey</p> <p class="text-sm name-text text-orange font-semibold ml-8" data-astro-cid-wr2g5n4i>Sabarman</p> </div> <div class="flex space-x-6" data-astro-cid-wr2g5n4i> <div class="flex space-x-20" data-astro-cid-wr2g5n4i> <!-- <p class="text-sm">About</p> --> <!-- <p class="text-sm">Projects</p> --> <p class="text-sm hover:cursor-pointer"${addAttribute(idContactMenu, "id")} data-astro-cid-wr2g5n4i>Contact</p> </div> <!-- <ToggleMode /> --> </div> </div>  `;
}, "/Users/jeffsabarman/Documents/Freelance/personal-website/personal-website/src/components/Header/HeaderIndex.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle } = Astro2.props;
  const layoutResponsive = "max-[1450px]:px-[20vw] max-[1050px]:px-[14vw] max-[800px]:px-[10vw]";
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> <div${addAttribute(`px-[26vw] py-[2.4rem] flex flex-col space-y-[6rem] ${layoutResponsive}`, "class")}> ${renderComponent($$result, "Header", $$HeaderIndex, {})} <!-- <Hero /> --> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/jeffsabarman/Documents/Freelance/personal-website/personal-website/src/layouts/Layout.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between"> <p class="opacity-60">Made by Jeffrey Sabarman &copy; ${(/* @__PURE__ */ new Date()).getFullYear()}</p> </div> `;
}, "/Users/jeffsabarman/Documents/Freelance/personal-website/personal-website/src/components/Footer.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const socials = [
    {
      icon: Mail,
      link: linkToEmail,
      // text: "jeffsabarman@gmail.com"
      text: "E-mail"
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/jeffrey-sabarman/",
      // text: "jeffrey-sabarman"
      text: "LinkedIn"
    },
    // {
    //     icon: Instagram,
    //     link: "https://www.instagram.com/jeffsabarman/",
    //     // text: "jeffsabarman"
    //     text: "Instagram"
    // },
    {
      icon: Github,
      link: "https://github.com/jeffsabarman",
      text: "Github"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex-col space-y-12"${addAttribute(idContactSection, "id")}> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "text": "Connect with me" })} <div class="grid grid-cols-3 max-md:grid-cols-1 gap-[1rem]"> <!-- {
            socials.map(social => (
                <a href={social.link} target="_blank" class="hover:cursor-pointer">
                    <div class="flex space-x-4 items-center">
                        <social.icon className="text-dark-blue" size="2rem" />
                        <p class="text-dark-blue">{social.text}</p>
                    </div>
                </a>
            ))
        } --> ${socials.map((social) => renderTemplate`${renderComponent($$result, "ButtonLink", $$ButtonLink, { "link": social.link, "fullwidth": true }, { "default": ($$result2) => renderTemplate`${social.text}` })}`)} </div> </div> `;
}, "/Users/jeffsabarman/Documents/Freelance/personal-website/personal-website/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Jeffrey Triandi Sabarman", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "TechStack", $$TechStack, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/jeffsabarman/Documents/Freelance/personal-website/personal-website/src/pages/index.astro", void 0);

const $$file = "/Users/jeffsabarman/Documents/Freelance/personal-website/personal-website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
