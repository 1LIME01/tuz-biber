// import { Container } from "@/components/ui/Container";
// import { Heading } from "@/components/ui/Heading";
// import type { BrandDictionary } from "@/types";

// type IngredientsProps = { dictionary: BrandDictionary };

// export function Ingredients({ dictionary }: IngredientsProps) {
//   return (
//     <section className="bg-[#F6EFE8] py-20 sm:py-28">
//       <Container>
//         <div className="mb-12 max-w-2xl">
//           <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.ingredients.eyebrow}</p>
//           <Heading as="h2" className="heading-section mt-4 text-[#241B14]">{dictionary.ingredients.title}</Heading>
//         </div>
//         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//           {dictionary.ingredients.items.map((item, index) => (
//             <article
//               key={item.name}
//               className="group relative flex flex-col justify-between rounded-2xl border border-[#B86F3C]/25 bg-[#F6EFE8] p-6 shadow-[0_8px_24px_rgba(184,111,60,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B86F3C] hover:bg-white hover:shadow-[0_16px_36px_rgba(184,111,60,0.18)]"
//             >
//               <div>
//                 <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#8C4E22] to-[#B86F3C] font-serif text-sm font-bold text-[#F6EFE8] shadow-md">
//                   0{index + 1}
//                 </div>
//                 <h3 className="font-serif text-xl font-bold text-[#1C130E] group-hover:text-[#8C4E22] transition-colors">
//                   {item.name}
//                 </h3>
//                 <p className="mt-3 text-xs leading-relaxed text-[#241B14] font-medium opacity-90">
//                   {item.note}
//                 </p>
//               </div>
//               <div className="mt-5 h-0.5 w-6 rounded-full bg-[#B86F3C]/40 group-hover:w-full group-hover:bg-[#B86F3C] transition-all duration-300" />
//             </article>
//           ))}
//         </div>

//       </Container>
//     </section>
//   );
// }

