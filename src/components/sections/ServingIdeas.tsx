// import { Container } from "@/components/ui/Container";
// import { Heading } from "@/components/ui/Heading";
// import type { BrandDictionary } from "@/types";

// type ServingIdeasProps = { dictionary: BrandDictionary };

// export function ServingIdeas({ dictionary }: ServingIdeasProps) {
//   return (
//     <section className="bg-[#EFE6D5] py-20 sm:py-28">
//       <Container>
//         <div className="mb-12 max-w-2xl">
//           <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.servingIdeas.eyebrow}</p>
//           <Heading as="h2" className="heading-section mt-4 text-[#241B14]">{dictionary.servingIdeas.title}</Heading>
//         </div>
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {dictionary.servingIdeas.items.map((item) => (
//             <article key={item.title} className="rounded-xl border border-[#241B14]/12 bg-[#F6EFE8] p-7 shadow-[0_8px_24px_rgba(36,27,20,0.03)] transition-colors duration-200 hover:border-[#B86F3C]/40">
//               <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#B86F3C] font-serif text-sm font-bold text-[#F6EFE8]">TB</div>
//               <h3 className="font-serif text-xl font-bold text-[#241B14]">{item.title}</h3>
//               <p className="mt-3 text-sm leading-relaxed text-[#57402E]">{item.description}</p>
//             </article>
//           ))}
//         </div>

//       </Container>
//     </section>
//   );
// }

