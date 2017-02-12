# ang-rm
Rolemaster system using Angular

Some notes:
I will remove the .js filers. They get created by the npm process and should not be part of the repository.

Should we included the base node files to allow for a complete initial creation? No - too many files that we will not be changing.

Here is a list of the key files and what they are used for:
app-routing.module.ts: has the routing tables to manage page flow
app.component.ts: main app component creation
app.module.ts: includes and other early definition stuff
dashboard.component.ts: has the obejcts for the dashboard
hero-details.component.ts: shows the hero details
hero-search.component.ts: enables the searching 
hero.service.ts: reads the hero data from HTTP
hero.ts: definition of hero object
heroes.component.ts: manages the list of heroes
in-memory-data.service.ts: feeds the hero.service with JSON as if fropm a DB
main.ts: not sure
mock-heroes.ts: the list of heroes to use
