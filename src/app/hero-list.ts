import { Hero } from './hero';

export const HEROES: Hero[] = [
  {
    id: 11, name: 'Eric', character: "Marcus Tenues",
    weapons: [
      {name: 'Battle Axe', table: 'BATTLE_AXE', fumble: 5, base: 115},
      {name: 'War Hammer', table: 'WAR_HAMMER', fumble: 5, base: 30}
    ]
  },
  {
    id: 13, name: 'Shawn', character: "Shawn's Guy",
    weapons: [
      {name: 'Composite Bow', table: 'COMPOSITE_BOW', fumble: 5, base: 80},
      {name: 'Hand Axe', table: 'HAND_AXE', fumble: 5, base: 75}
    ]
  },
  {
    id: 12, name: 'Jim', character: "Jim's Guy",
    weapons: [
      {name: 'Quarterstaff', table: 'QUARTERSTAFF', fumble: 5, base: 30},
      {name: 'War Hammer', table: 'WAR_HAMMER', fumble: 5, base: -20}
    ]
  }
];
