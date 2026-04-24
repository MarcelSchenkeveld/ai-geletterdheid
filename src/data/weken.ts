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
    kop: 'Startbijeenkomst en commitment',
    oneliner: 'We openen het programma samen, je ziet waar de groep staat, je formuleert voor jezelf waar je zelf heen wilt, en je zet je AI-logboek op.',
    functie: 'start',
    plenair: true,
    periode: 'Week van 11 mei',
  },
  {
    n: 2,
    slug: 'week-2',
    kop: 'Casus 1: je tools kiezen',
    oneliner: 'Je bent vanaf deze week drie weken junior marketeer voor Brouwerij De Vier Vaten en je maakt je eerste bewuste keuzes in welke AI-toepassingen je inzet voor welk deel van het werk.',
    functie: 'casus1',
    periode: 'Week van 18 mei',
  },
  {
    n: 3,
    slug: 'week-3',
    kop: 'Casus 1: kritisch en creatief werken aan je propositie',
    oneliner: 'Je scherpt je propositie en kanaalmix voor het proefdoos-abonnement, met AI als tegen-denker, en je zet je eerste voorbeeldcontent op papier.',
    functie: 'casus1',
    periode: 'Week van 25 mei',
  },
  {
    n: 4,
    slug: 'week-4',
    kop: 'Casus 1 afronden en eerste vertaalslag',
    oneliner: 'Je levert het mini-plan op voor De Vier Vaten en je maakt expliciet wat je van deze werkwijze meeneemt naar je eigen Business Challenge.',
    functie: 'casus1',
    vertaalslag: true,
    vertaalslagLabel: 'Vertaalslag naar je Business Challenge',
    periode: 'Week van 1 juni',
  },
  {
    n: 5,
    slug: 'week-5',
    kop: 'Casus 2: opnieuw kiezen met ervaring',
    oneliner: 'De Vier Vaten komt met een vervolgvraag en je maakt opnieuw bewuste toolkeuzes, maar deze keer vergelijk je wat je doet met wat je in casus 1 deed.',
    functie: 'casus2',
    periode: 'Week van 8 juni',
  },
  {
    n: 6,
    slug: 'week-6',
    kop: 'Casus 2 afronden en vergelijkende vertaalslag',
    oneliner: 'Je scherpt je drie scenarios, levert je adviesnotitie op en maakt expliciet wat er tussen je eerste en tweede vertaalslag is veranderd.',
    functie: 'casus2',
    vertaalslag: true,
    vertaalslagLabel: 'Vergelijkende vertaalslag',
    periode: 'Week van 15 juni',
  },
  {
    n: 7,
    slug: 'week-7',
    kop: 'Terugkijken, vervolgvoornemens, portfolio',
    oneliner: 'We sluiten de zeven weken af: je ziet hoe jij en de groep zijn verschoven, je benoemt één moment waarop jouw werkwijze is veranderd, en je formuleert met wie je de komende weken over je voornemens verantwoording wilt voeren.',
    functie: 'afronding',
    plenair: true,
    periode: 'Week van 22 juni',
  },
];

export function getWeek(n: number): WeekInfo | undefined {
  return weken.find((w) => w.n === n);
}
