
export class heroWeapons {
  name: string;
  fumble: number;
  table: string;
  base: number;
  maximum: number;
  itemBonus: number;
}

export class Hero {
    id: number;
    name: string;
    character: string;
    weapons: heroWeapons[];
}
