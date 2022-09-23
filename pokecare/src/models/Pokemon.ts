
export default class Pokemon{
    pokemon_id: string;
    name: string;
    level: number;
    xp_needed: number; 
    abilities!: string[];
    ability: string;
    nature: string;
    pokedex_id: string;
    // daycare_id: string;
    id: string;

    

    constructor(pokemon_id: string, name: string, level: number, xp_needed: number, abilities: string[], ability: string, nature: string, pokedex_id: string, /*daycare_id: string,*/ id: string ){
        this.pokemon_id = pokemon_id;
        this.name = name;
        this.level = level;
        this.xp_needed = xp_needed;
        this.ability = ability;
        this.abilities = abilities;
        this.nature = nature;
        this.pokedex_id = pokedex_id;
        // this.daycare_id = daycare_id;
        this.id = id;
        
    }
}