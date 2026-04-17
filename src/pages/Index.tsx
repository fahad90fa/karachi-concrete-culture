import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import cover from "@/assets/cover.png";
import timeline from "@/assets/timeline.png";
import unite from "@/assets/unite.png";
import trellick from "@/assets/trellick.png";
import nationalTheatre from "@/assets/national-theatre.png";
import karachi from "@/assets/karachi.png";
import burmahShell from "@/assets/burmah-shell.png";
import tajMahal from "@/assets/taj-mahal.png";
import habibBank from "@/assets/habib-bank.png";
import habibBankStructure from "@/assets/habib-bank-structure.png";

const SectionLabel = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
    <span className="font-display text-accent">{n}</span>
    <span className="h-px flex-1 bg-foreground/30" />
    <span>{label}</span>
  </div>
);

const Figure = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <figure className="reveal relative">
    <div className="relative border-2 border-foreground shadow-brutal bg-card overflow-hidden">
      <img src={src} alt={alt} className="w-full h-auto block transition-transform duration-700 hover:scale-[1.02]" loading="lazy" />
    </div>
    <figcaption className="mt-3 text-xs uppercase tracking-widest text-muted-foreground border-l-2 border-accent pl-3">
      {caption}
    </figcaption>
  </figure>
);

const Index = () => {
  useReveal();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setScroll((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-background text-foreground concrete-texture min-h-screen">
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-foreground/10 z-50">
        <div className="h-full bg-accent transition-[width] duration-150" style={{ width: `${scroll}%` }} />
      </div>

      {/* Top bar */}
      <header className="sticky top-1 z-40 bg-background/80 backdrop-blur border-b border-foreground/20">
        <div className="container flex items-center justify-between py-3 text-xs uppercase tracking-[0.25em]">
          <span className="font-display">F.K — 2025</span>
          <span className="hidden md:block">The Concrete Vernacular</span>
          <span className="text-accent">Essay / 01</span>
        </div>
      </header>

      {/* COVER */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 reveal">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">A Critical Essay</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] uppercase">
              The Concrete<br />Vernacular<span className="cursor-block" />
            </h1>
            <p className="mt-8 text-lg md:text-xl max-w-xl text-muted-foreground">
              Negotiating Modernism and Cultural Identity in Karachi's Brutalist Landscape.
            </p>
            <div className="mt-10 flex items-center gap-6 text-sm uppercase tracking-widest">
              <span className="font-display">By Fatima Khan</span>
              <span className="h-px w-12 bg-foreground" />
              <span className="text-muted-foreground">Design Cultures</span>
            </div>
          </div>
          <div className="md:col-span-5 reveal">
            <div className="relative border-2 border-foreground shadow-brutal-lg bg-paper">
              <img src={cover} alt="Cover — The Concrete Vernacular" className="w-full block" />
            </div>
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="container pb-16 md:pb-20">
        <div className="border-2 border-foreground bg-card shadow-brutal-lg p-8 md:p-12 reveal">
          <SectionLabel n="—" label="Table of Contents" />
          <h2 className="font-display text-3xl md:text-5xl uppercase mb-8">Contents</h2>
          <ol className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-base md:text-lg">
            {[
              { id: "introduction", t: "Introduction" },
              { id: "modernism", t: "An Overview of Modernism" },
              { id: "timeline", t: "Timeline of Modernist Design Movements" },
              { id: "tradition", t: "The Influence of Tradition on Brutalism" },
              { id: "culture", t: "Brutalism's Influence on Culture" },
              { id: "habib", t: "Case Study — Habib Bank Plaza, Karachi" },
              { id: "conclusion", t: "Conclusion" },
              { id: "bibliography", t: "Bibliography" },
              { id: "figures", t: "Figure Citations" },
            ].map((it, i) => (
              <li key={it.id}>
                <a href={`#${it.id}`} className="group flex items-baseline gap-4 border-b border-foreground/30 pb-2 hover:text-accent transition-colors">
                  <span className="font-display text-accent text-sm tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{it.t}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y-2 border-foreground bg-foreground text-background overflow-hidden py-4">
        <div className="marquee-track flex whitespace-nowrap font-display text-2xl md:text-4xl uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 pr-8">
              {["Béton Brut", "★", "Modernism", "★", "Karachi", "★", "Brutalism", "★", "Design Culture", "★", "Post-Colonial", "★"].map((t, j) => (
                <span key={j} className="px-4">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABSTRACT */}
      <section id="introduction" className="container py-20 md:py-28 scroll-mt-20">
        <SectionLabel n="00" label="Abstract" />
        <div className="grid md:grid-cols-12 gap-10">
          <h2 className="md:col-span-4 font-display text-4xl md:text-5xl uppercase leading-tight reveal">
            Design is never neutral.
          </h2>
          <p className="md:col-span-8 text-lg md:text-xl leading-relaxed reveal">
            This essay examines the intersection of <em>Brutalism</em> and the local culture of Karachi, arguing that design is never neutral but is a reflection of the socio-political and environmental landscape it inhabits. Drawing on Guy Julier's concept of <strong>"Design Culture,"</strong> the paper explores how the global Modernist movement — specifically the raw, honest materiality of Brutalism — was adapted to suit the post-colonial aspirations of a growing Pakistani megacity.
          </p>
        </div>
      </section>

      {/* MODERNISM */}
      <section id="modernism" className="bg-foreground text-background py-20 md:py-28 relative overflow-hidden scroll-mt-20">
        <div className="container">
          <SectionLabel n="01" label="Foundations" />
          <h2 className="font-display text-6xl md:text-8xl uppercase reveal">Modernism</h2>
          <div className="mt-12 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-2 reveal">
              <span className="font-display text-7xl text-accent">M</span>
            </div>
            <div className="md:col-span-10 space-y-6 text-base md:text-lg leading-relaxed reveal">
              <p>
                Modernism, as critically examined through Mark Jarzombek's <em>Architecture of First Societies: A Global Perspective</em> (2013), emerges not as the unique apex of architectural progress but rather as the latest in a series of historical ruptures that forcibly displaced established ways of building and living.
              </p>
              <p>
                Jarzombek's radical reframing challenges the teleological narrative that positions industrial modernity as the inevitable culmination of architectural history, instead revealing how colonialism, modernization, and globalization systematically erased vast, sophisticated architectural traditions that had flourished outside the empire and state framework.
              </p>
              <p>
                By 1400 CE, empires and urban cultures covered merely a fraction of the globe, while the majority of humanity inhabited thriving First Societies and village communities whose architectural achievements — ranging from ancient megalithic structures to complex ritual landscapes — represented their own <em>"types of modernity,"</em> moments of innovation that broke from established norms without destroying the ecological and cultural continuities that sustained them.
              </p>
              <p className="border-l-2 border-accent pl-6 italic text-background/80">
                In this light, modernism appears less as universal progress and more as a violent historical interruption — one that imposed Western industrial forms across the globe while actively suppressing the multiple alternative modernities embodied in pre-urban, pre-state architectures, narrowing humanity's built environment to a singular, homogenized expression of technological rationality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="container py-20 md:py-28 scroll-mt-20">
        <SectionLabel n="02" label="Lineage" />
        <h2 className="font-display text-4xl md:text-6xl uppercase mb-4 reveal">
          Timeline of Modernist<br />Design Movements
        </h2>
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-10 reveal">
          Figure 1 — Graphical Timeline of Modernist Design Movements
        </p>
        <Figure src={timeline} alt="Timeline of modernist design movements" caption="Fig. 1 / Impressionism → Brutalism · 1870s–1970s" />
      </section>

      {/* BRUTALISM */}
      <section id="tradition" className="bg-paper py-20 md:py-28 relative scroll-mt-20">
        <div className="container">
          <SectionLabel n="03" label="The Rupture" />
          <h2 className="font-display text-6xl md:text-8xl uppercase reveal">Brutalism</h2>
          <div className="mt-12 grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 space-y-6 text-base md:text-lg leading-relaxed reveal">
              <p>
                Seyyed Hossein Nasr (<em>Knowledge and the Sacred</em>, 1989) provides a metaphysical framework for understanding Brutalism as the logical endpoint of modernism's <strong>"desacralization of knowledge."</strong> If modernism represents the divorce of knowledge from spiritual truth, Brutalism manifests this rupture in built form through its emphatic materialism — exposed <em>béton brut</em> (raw concrete) that refuses transcendence through ornament, symbolism, or sacred geometry.
              </p>
              <p>
                Brutalist buildings, with their "brutally honest" expression of structure and materials, embody what Nasr would identify as the modern world's reduction of reality to pure materiality, stripped of <em>scientia sacra</em> or sacred knowledge.
              </p>
              <p>
                The style's rejection of decorative elements and its celebration of raw, unfinished surfaces represent architecture's complete submission to empirical, profane rationality — concrete without spiritual resonance, form without symbolic content.
              </p>
              <p className="text-sm uppercase tracking-widest text-muted-foreground pt-4 border-t border-foreground/30">
                Reference — Fazio, Moffett &amp; Wodehouse · Jarzombek et al. · Cruickshank, <em>Sir Banister Fletcher's History of Architecture</em>
              </p>
            </div>
            <div className="md:col-span-5">
              <Figure src={unite} alt="Unité d'Habitation, Marseille, Le Corbusier 1952" caption="Fig. 2 / Unité d'Habitation · Marseille · 1952" />
            </div>
          </div>
        </div>
      </section>

      {/* ETHIC NOT AESTHETIC */}
      <section className="container py-20 md:py-28">
        <SectionLabel n="04" label="Ethic, Not Aesthetic" />
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 order-2 md:order-1">
            <Figure src={trellick} alt="Trellick Tower, London, Ernő Goldfinger 1972" caption="Fig. 3 / Trellick Tower · London · Ernő Goldfinger · 1972" />
          </div>
          <div className="md:col-span-7 order-1 md:order-2 space-y-6 text-base md:text-lg leading-relaxed reveal">
            <p>
              The term <strong>"Brutalism"</strong> derives from Le Corbusier's use of <em>béton brut</em> (raw concrete) at the Unité d'Habitation in Marseille (1952). However, the Smithsons (Alison and Peter) defined it as <em>"an ethic, not an aesthetic."</em>
            </p>
            <p>
              This ethical dimension — emphasizing honesty of materials, clear exhibition of structure, and the valuation of materials <em>"as found"</em> — represents a philosophical deepening of modernist functionalism.
            </p>

            <div className="border-2 border-foreground bg-card p-6 shadow-brutal">
              <p className="font-display uppercase text-xs tracking-widest mb-4 text-accent">Reyner Banham — Three Tenets</p>
              <ul className="space-y-3">
                {["Formal legibility of plan", "Clear exhibition of structure", "Valuation of materials for their inherent qualities — as found"].map((t, i) => (
                  <li key={i} className="flex gap-4 items-baseline">
                    <span className="font-display text-accent">0{i + 1}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              Both modernism and Brutalism shared socialist/utopian aspirations. Brutalist buildings were often <em>"affordable housing projects that sought to reimagine architecture to address modern needs."</em> However, as Kostof's <em>A History of Architecture: Settings and Rituals</em> would remind us, the ritual and social dimensions of these spaces often failed to match their ideological ambitions — a disconnect between "settings and rituals" that led to Brutalism's eventual decline.
            </p>
          </div>
        </div>
      </section>

      {/* NATIONAL THEATRE */}
      <section id="culture" className="bg-foreground text-background py-20 md:py-28 scroll-mt-20">
        <div className="container">
          <SectionLabel n="05" label="Civic Monumentality" />
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 reveal">
              <div className="relative border-2 border-background shadow-[14px_14px_0_0_hsl(var(--accent))] overflow-hidden">
                <img src={nationalTheatre} alt="Royal National Theatre, London, Denys Lasdun 1976" className="w-full block" />
              </div>
              <p className="mt-3 text-xs uppercase tracking-widest text-background/60 border-l-2 border-accent pl-3">
                Fig. 4 / Royal National Theatre · London · Denys Lasdun · 1976
              </p>
            </div>
            <div className="md:col-span-5 space-y-5 text-base md:text-lg leading-relaxed reveal">
              <h3 className="font-display text-3xl md:text-4xl uppercase">A Stratified Civic Cliff</h3>
              <p>
                Lasdun's Royal National Theatre is perhaps the most articulate civic statement of British Brutalism. Its terraces stack like geological strata along the Thames, refusing the river's romanticism and instead asserting concrete as <em>public</em> material — a democratic monumentality.
              </p>
              <p>
                Where the Unité d'Habitation declared housing as a <em>machine for living</em>, the National Theatre argues that culture, too, must wear the same honest skin: cast in shutter-board concrete, indifferent to ornament, available to everyone.
              </p>
              <p className="text-sm uppercase tracking-widest text-background/60 pt-4 border-t border-background/30">
                Ingersoll &amp; Kostof, <em>World Architecture</em> · Jarzombek's global histories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KARACHI INTRO */}
      <section className="container py-20 md:py-28">
        <SectionLabel n="06" label="Locality" />
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7 reveal">
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">Karachi</h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/90">
              Karachi reveals culture's role in design as simultaneously resistant, adaptive, and transformative. Modernism and Brutalism entered Karachi as instruments of colonial and post-colonial state power — tools for "desacralization," "irruption," and the erasure of alternative architectural traditions — yet Karachi's culture persistently reinscribed these forms with local meaning, hybridizing modernist concrete with Sindhi limestone, Brutalist monumentality with Sufi pilgrimage practices, and rational planning with the organic vitality of informal settlement.
            </p>
          </div>
          <div className="md:col-span-5 reveal">
            <Figure src={karachi} alt="Karachi street life illustration" caption="Local fabric — informal settlement & street life" />
          </div>
        </div>
      </section>

      {/* BRUTALISM IN KARACHI */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container">
          <SectionLabel n="07" label="Application" />
          <h2 className="font-display text-5xl md:text-7xl uppercase reveal">Brutalism<br />in Karachi</h2>
          <p className="mt-8 max-w-3xl text-base md:text-lg leading-relaxed reveal">
            Brutalism — characterized by <em>béton brut</em>, massive forms, and a rejection of decorative facades — found a strange but fitting home in post-independence Karachi. As a young nation, Pakistan sought a language that represented progress, strength, and a clean break from British Colonial Neoclassicism.
          </p>

          {/* Timeline */}
          <div className="mt-16 reveal">
            <h3 className="font-display text-2xl uppercase mb-8">Timeline of the Movement</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { year: "1950s — 1960s", title: "The Golden Age", body: "Karachi's expansion makes the city a laboratory for Modernist experiments, influenced by the Greek planner Constantinos Doxiadis." },
                { year: "1970s", title: "Peak Brutalism", body: "Architects like Yasmeen Lari and Pyarali Merali deploy concrete to address the massive housing and institutional needs of a rapidly growing population." },
              ].map((it, i) => (
                <div key={i} className="border-2 border-foreground bg-card p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-transform">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">{it.year}</p>
                  <h4 className="font-display text-2xl uppercase mt-2">{it.title}</h4>
                  <p className="mt-3 text-foreground/80">{it.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Karachi figures */}
          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <Figure src={burmahShell} alt="Burmah Shell Oil Office, Karachi 1978" caption="Fig. 5 / Burmah Shell Oil Office · Karachi · 1978" />
            <Figure src={tajMahal} alt="Taj Mahal Hotel, Karachi 1982" caption="Fig. 6 / Taj Mahal Hotel · Karachi · 1982" />
          </div>
        </div>
      </section>

      {/* HABIB BANK PLAZA — CASE STUDY */}
      <section id="habib" className="container py-20 md:py-28 scroll-mt-20">
        <SectionLabel n="08" label="Case Study" />
        <h2 className="font-display text-5xl md:text-7xl uppercase reveal leading-none">
          Habib Bank<br />Plaza · 1963
        </h2>
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-muted-foreground reveal">
          Architect — Leo A. Daly · I.I. Chundrigar Road, Karachi
        </p>

        <div className="mt-12 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-6 reveal">
            <Figure src={habibBank} alt="Habib Bank Plaza, Karachi" caption="Habib Bank Plaza · Karachi · Leo A. Daly" />
          </div>
          <div className="md:col-span-6 space-y-6 text-base md:text-lg leading-relaxed reveal">
            <div>
              <p className="font-display uppercase text-xs tracking-widest text-accent mb-2">Overview</p>
              <p>
                Completed in 1968 and officially inaugurated in 1971, the Habib Bank Plaza was a groundbreaking feat of engineering for South Asia. Standing at <strong>101 metres (331 ft)</strong> with 22 stories, it held the title of the tallest building in Asia until 1970 and remained the tallest in Pakistan for nearly four decades.
              </p>
            </div>
            <div>
              <p className="font-display uppercase text-xs tracking-widest text-accent mb-2">Architectural Style — South Asian Brutalism</p>
              <p>
                The building is a premier example of the <em>"International Style"</em> adapted into a Brutalist framework. It rejects the ornate, decorative styles of the past in favour of <strong>structural honesty</strong> — its form clearly expresses its function and internal skeletal structure — and <strong>monumentalism</strong>, its massive blocky presence on Karachi's "Wall Street" symbolising the city's financial strength and the "Machine Age" of the 1960s.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-16 reveal">
          <h3 className="font-display text-2xl md:text-3xl uppercase mb-8">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: "Exposed Concrete & Local Aggregates", b: "The facade is defined by its raw, unpainted concrete finish (béton brut). By using local sand and stone in the concrete mix, the building subtly reflects the earthy tones of the Sindh region while maintaining an industrial edge." },
              { t: "Geometric Facade — The 'Coin Stack'", b: "The building is often described as resembling a stack of coins, created by its rhythmic, repetitive horizontal and vertical concrete grids — a high-contrast play of light and shadow characteristic of Brutalist photography." },
              { t: "Climatic Response — Deep-set Windows", b: "Unlike Western glass towers, the architect designed deep concrete recesses for the windows. These act as natural sun-breakers (brise-soleil), shielding the interior from Karachi's intense heat and reducing the solar load on the building." },
              { t: "Cultural Symbolism", b: "Beyond architecture, the plaza is a symbol of Post-Colonial Identity — Pakistan's transition from a colonial economy to a modern, independent financial power. It has even integrated into local culture as a traditional site for the Ruet-e-Hilal Committee to gather for moon-sighting." },
            ].map((f, i) => (
              <div key={i} className="border-2 border-foreground bg-card p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-transform">
                <p className="font-display text-accent text-sm tracking-widest">0{i + 1}</p>
                <h4 className="font-display text-xl uppercase mt-2">{f.t}</h4>
                <p className="mt-3 text-foreground/80">{f.b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Summary */}
        <div className="mt-12 border-l-4 border-accent pl-6 max-w-3xl reveal">
          <p className="font-display uppercase text-xs tracking-widest text-accent mb-2">Critical Summary</p>
          <p className="text-base md:text-lg leading-relaxed italic text-foreground/90">
            The Habib Bank Plaza is more than just an office — it is a monument to progress. It successfully blends the harsh, uncompromising lines of Brutalism with functional adaptations for a tropical climate, making it an essential case study for understanding the intersection of modern architecture and South Asian urban identity.
          </p>
        </div>

        <div className="mt-16 reveal">
          <Figure src={habibBankStructure} alt="Structure of Habib Bank Plaza Karachi" caption="Fig. 7 / Structure of Habib Bank Plaza · Karachi" />
        </div>
      </section>

      {/* CONCLUSION */}
      <section id="conclusion" className="bg-foreground text-background py-20 md:py-28 scroll-mt-20">
        <div className="container">
          <SectionLabel n="09" label="Conclusion" />
          <div className="grid md:grid-cols-12 gap-10">
            <h2 className="md:col-span-4 font-display text-4xl md:text-5xl uppercase reveal">
              The vernacular of concrete.
            </h2>
            <p className="md:col-span-8 text-lg md:text-xl leading-relaxed reveal">
              Karachi's Brutalism is not a borrowed dialect but a translation — a global language poured into local moulds. From the Habib Bank Plaza's coin-stack facade to the brise-soleil shielding its interiors from the Sindh sun, the city demonstrates that design is never neutral: it negotiates climate, faith, and post-colonial identity in every cubic metre of concrete it casts.
            </p>
          </div>
        </div>
      </section>

      {/* BIBLIOGRAPHY */}
      <section id="bibliography" className="container py-20 md:py-28 scroll-mt-20">
        <SectionLabel n="10" label="References" />
        <h2 className="font-display text-4xl md:text-6xl uppercase mb-12 reveal">Bibliography</h2>
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Books & Scholarly Works</p>
        <ol className="space-y-5 max-w-4xl reveal">
          {[
            'Banham, Reyner. "The New Brutalism." In A History of Architecture, edited by Dan Cruickshank. London: Architectural Press, 1996.',
            'Burckhardt, Titus. Art of Islam: Language and Meaning. London: World of Islam Festival Publishing, 1976.',
            'Fazio, Michael, Marian Moffett, and Lawrence Wodehouse. Buildings across Time: An Introduction to World Architecture. 4th ed. Boston: McGraw-Hill, 2013.',
            'Jarzombek, Mark. Architecture of First Societies: A Global Perspective. Hoboken, NJ: Wiley, 2013.',
            'Julier, Guy. The Culture of Design. 3rd ed. London: SAGE Publications, 2014.',
            'Kostof, Spiro. A History of Architecture: Settings and Rituals. 2nd ed. New York: Oxford University Press, 1995.',
            'Lasdun, Denys. "Architecture as Urban Landscape." RIBA Journal 84, no. 3 (1977): 95–102.',
            'Nasr, Seyyed Hossein. Knowledge and the Sacred. Albany: State University of New York Press, 1989.',
          ].map((c, i) => (
            <li key={i} className="flex gap-5 border-b border-foreground/20 pb-5">
              <span className="font-display text-accent text-sm tracking-widest pt-1">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-base md:text-lg leading-relaxed text-foreground/90">{c}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FIGURE CITATIONS */}
      <section id="figures" className="bg-paper py-20 md:py-28 scroll-mt-20">
        <div className="container">
          <SectionLabel n="11" label="Image Credits" />
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-12 reveal">Figure Citations</h2>
          <div className="overflow-x-auto reveal">
            <table className="w-full border-2 border-foreground bg-card shadow-brutal">
              <thead className="bg-foreground text-background font-display uppercase text-sm tracking-widest">
                <tr>
                  <th className="text-left p-4 border-r border-background/30">Fig.</th>
                  <th className="text-left p-4 border-r border-background/30">Subject</th>
                  <th className="text-left p-4 border-r border-background/30">Reference</th>
                  <th className="text-left p-4">Source</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {[
                  ["1", "Timeline of Modernist Design Movements", "Compiled from Cruickshank; Jarzombek; Fazio et al.", "Author's diagram"],
                  ["2", "Unité d'Habitation, Marseille (Le Corbusier, 1952)", "Fazio, Moffett & Wodehouse; Jarzombek et al.; Cruickshank", "Fondation Le Corbusier"],
                  ["3", "Trellick Tower, London (Ernő Goldfinger, 1972)", "Cruickshank and Jarzombek", "ArcEyes"],
                  ["4", "Royal National Theatre, London (Denys Lasdun, 1976)", "Ingersoll & Kostof, World Architecture; Jarzombek's global histories", "Architecture Lab"],
                  ["5", "Burmah Shell Oil Office, Karachi (1978)", "Photograph courtesy of Karachi architectural archives", "—"],
                  ["6", "Taj Mahal Hotel, Karachi (1982)", "Photograph courtesy of Karachi architectural archives", "—"],
                  ["7", "Structure of Habib Bank Plaza, Karachi", "Compiled drawings & photographs of Habib Bank Plaza", "Karachi architectural archives"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-foreground/30 align-top">
                    <td className="p-4 border-r border-foreground/30 font-display text-accent">{row[0]}</td>
                    <td className="p-4 border-r border-foreground/30">{row[1]}</td>
                    <td className="p-4 border-r border-foreground/30 text-foreground/80">{row[2]}</td>
                    <td className="p-4 text-foreground/80 italic">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      <footer className="bg-foreground text-background py-16">
        <div className="container grid md:grid-cols-3 gap-10 text-sm">
          <div>
            <p className="font-display text-2xl uppercase">Colophon</p>
            <p className="mt-3 text-background/70">Set in Archivo Black & Space Grotesk. Cast in raw concrete tones — paper, ochre, rust.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Author</p>
            <p className="mt-2 font-display text-xl">Fatima Khan</p>
            <p className="text-background/70">The Concrete Vernacular · 2025</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">References</p>
            <p className="mt-2 text-background/70">Jarzombek · Nasr · Banham · Kostof · Cruickshank · Ingersoll · Julier</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
