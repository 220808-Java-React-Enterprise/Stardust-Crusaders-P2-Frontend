
export default class Pokemon{
    pokemon_id: string;
    pokedex_id: number;
    name: string;
    level: number;
    xp_needed: number; 
    ability: string;
    nature: string;
    // daycare_id: string;
    id: string;

    

    constructor(pokemon_id: string, pokedex_id: number, name: string, level: number, xp_needed: number, ability: string, nature: string, /*daycare_id: string,*/ id: string ){
        this.pokemon_id = pokemon_id;
        this.pokedex_id = pokedex_id;
        this.name = name;
        this.level = level;
        this.xp_needed = xp_needed;
        this.ability = ability;
        this.nature = nature;
        // this.daycare_id = daycare_id;
        this.id = id;
        
    }
}