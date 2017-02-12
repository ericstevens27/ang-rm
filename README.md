# ang-rm
Rolemaster system using Angular

Here is a list of the key files and what they are used for:
src/app/app.component.ts: main app component creation
src/app/app.module.ts: includes and other early definition stuff
src/app/all.service.ts: contains the functions that fake the data reads. Uses hard coded data and delivers via functions.
src/app/hero.ts: definition of hero object
src/app/combat-table.ts: holds combat result table definition and simple, short list of combat results.
src/app/hero-list.ts: holds list of heroes to present first. Includes defaults for each character.
src/app/weapon-name.ts: exports weapon-name list definition and complete list of just weapon names (used in pull down object).
* This should be refactored to pull from the weapon.json object
src/app/weapon.ts: exports for weapon definition and complete list of weapon.json file
src/main.ts: bootstrap ts
