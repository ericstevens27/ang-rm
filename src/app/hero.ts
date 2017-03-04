
export class heroWeapons {
  name: string;
  fumble: number;
  table: string;
  base: number;
}

export class Hero {
    id: number;
    name: string;
    character: string;
    weapons: heroWeapons[];
}
