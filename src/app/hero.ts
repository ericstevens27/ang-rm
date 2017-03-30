
export class heroWeapons {
  name: string;
  fumble: number;
  table: string;
  base: number;
  maximum: number;
  itemBonus: number;
}

export class heroStatistics {
  name: string;
  description: string;
  value: number;
  bonusTotal: number;
  bonusStat: number;
  bonusRacial: number;
}

export class heroSkills {
  name: string;
  value: number;
  stats: string;
  rank: number;
}

export class items {
  id: number;
  name: string;
  special: boolean;
  quantity: number;
  weight: number;
  deadWeight: boolean;
  notes: string;
}

export class Hero {
  id: number;
  name: string;
  character: string;
  race: string;
  profession: string;
  level: number;
  hitpoints: number;
  defenseBase: number;
  stats: heroStatistics[];
  skills: heroSkills[];
  items: items[];
  weapons: heroWeapons[];
}
