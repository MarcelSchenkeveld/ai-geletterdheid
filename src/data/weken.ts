export interface WeekInfo {
  n: number;
  slug: string;
  kop: string;
  oneliner: string;
  functie: 'start' | 'casus1' | 'casus2' | 'afronding';
  vertaalslag?: boolean;
  plenair?: boolean;
  periode: string;
  dominantAccent: string;
}

export const weken: WeekInfo[] = [
  {
    n: 1,
    slug: 'week-1',
    kop: 'Startbijeenkomst',
    oneliner: 'Gezamenlijke start, spiegel via de zelftest en je eigen voornemen voor de komende weken.',
    functie: 'start',
    plenair: true,
    periode: 'Week van 11 mei',
    dominantAccent: 'regie',
  },
  {
    n: 2,
    slug: 'week-2',
    kop: 'Casus 1 · verkennen',
    oneliner: 'Je leert het vraagstuk kennen en kiest passende AI-toepassingen voor de eerste stappen.',
    functie: 'casus1',
    periode: 'Week van 18 mei',
    dominantAccent: 'toepassen',
  },
  {
    n: 3,
    slug: 'week-3',
    kop: 'Casus 1 · verdiepen',
    oneliner: 'Creatief en analytisch denken met AI: alternatieven, tegenargumenten, eerste keuzes.',
    functie: 'casus1',
    periode: 'Week van 25 mei',
    dominantAccent: 'denken',
  },
  {
    n: 4,
    slug: 'week-4',
    kop: 'Casus 1 afronden en eerste vertaalslag',
    oneliner: 'Casus 1 leveren we op; je neemt iets van de werkwijze direct mee naar je Business Challenge.',
    functie: 'casus1',
    vertaalslag: true,
    periode: 'Week van 1 juni',
    dominantAccent: 'regie',
  },
  {
    n: 5,
    slug: 'week-5',
    kop: 'Casus 2 · verkennen',
    oneliner: 'Een nieuw vraagstuk in een ander domein, met je ervaring uit casus 1 op zak.',
    functie: 'casus2',
    periode: 'Week van 8 juni',
    dominantAccent: 'toepassen',
  },
  {
    n: 6,
    slug: 'week-6',
    kop: 'Casus 2 verdiepen en tweede vertaalslag',
    oneliner: 'Scherpere keuzes onder tijdsdruk, en opnieuw een stap in je Business Challenge.',
    functie: 'casus2',
    vertaalslag: true,
    periode: 'Week van 15 juni',
    dominantAccent: 'denken',
  },
  {
    n: 7,
    slug: 'week-7',
    kop: 'Terugblik en vervolgstappen',
    oneliner: 'Tweede zelftest, wat is er veranderd in hoe je AI inzet, en wat neem je mee in je studie.',
    functie: 'afronding',
    plenair: true,
    periode: 'Week van 22 juni',
    dominantAccent: 'regie',
  },
];

export function getWeek(n: number): WeekInfo | undefined {
  return weken.find((w) => w.n === n);
}
