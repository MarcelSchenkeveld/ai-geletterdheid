export interface WeekInfo {
  n: number;
  slug: string;
  kop: string;
  oneliner: string;
  functie: 'start' | 'casus1' | 'casus2' | 'afronding';
  vertaalslag?: boolean;
  vertaalslagLabel?: string;
  plenair?: boolean;
  periode: string;
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
  },
  {
    n: 2,
    slug: 'week-2',
    kop: 'Passende AI-toepassingen kiezen voor De Vier Vaten',
    oneliner: 'Je presenteert welke twee tot drie AI-toepassingen je deze week wilt inzetten en waarom, en krijgt er een kritische vraag op terug.',
    functie: 'casus1',
    periode: 'Week van 18 mei',
  },
  {
    n: 3,
    slug: 'week-3',
    kop: 'Scherper en breder denken met AI',
    oneliner: 'Idee, tegenargument, keuze: in tweetallen werk je volgens een vast patroon om je propositie aan te scherpen.',
    functie: 'casus1',
    periode: 'Week van 25 mei',
  },
  {
    n: 4,
    slug: 'week-4',
    kop: 'Oplevering aan De Vier Vaten en eerste vertaalslag',
    oneliner: 'Je levert het mini-plan op, leest in drietallen elkaars werk tegen en zet de eerste vertaalslag naar je eigen Business Challenge.',
    functie: 'casus1',
    vertaalslag: true,
    vertaalslagLabel: 'Vertaalslag naar je Business Challenge',
    periode: 'Week van 1 juni',
  },
  {
    n: 5,
    slug: 'week-5',
    kop: 'Vervolgvraag van De Vier Vaten, opnieuw kiezen',
    oneliner: 'Nieuwe toolkeuze met je logboek uit casus 1 ernaast: wat houd je aan, wat doe je nu anders en waarom?',
    functie: 'casus2',
    periode: 'Week van 8 juni',
  },
  {
    n: 6,
    slug: 'week-6',
    kop: 'Scenarios wegen en vergelijkende vertaalslag',
    oneliner: 'Drie wervingsscenarios kritisch toetsen, je advies scherpen en in je tweede vertaalslag vergelijken met vertaalslag 1.',
    functie: 'casus2',
    vertaalslag: true,
    vertaalslagLabel: 'Vergelijkende vertaalslag',
    periode: 'Week van 15 juni',
  },
  {
    n: 7,
    slug: 'week-7',
    kop: 'Terugblik en vervolgstappen',
    oneliner: 'Tweede zelftest, wat is er veranderd in hoe je AI inzet, en met wie hou jij jezelf verantwoordelijk na dit programma.',
    functie: 'afronding',
    plenair: true,
    periode: 'Week van 22 juni',
  },
];

export function getWeek(n: number): WeekInfo | undefined {
  return weken.find((w) => w.n === n);
}
