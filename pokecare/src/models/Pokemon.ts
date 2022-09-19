
export default class Pokemon{
    pokemon_id: string;
    name: string;
    level: number;
    xp_needed: number; 
    ability: string;
    nature: string;
    //hpiv: number;
    //hpev: number;
    //attack: number;
    //special_attack: number;
    //defense: number;
    //special_defense: number;
    //speed: number;
    daycare_id: string;
    id: string;

    

    constructor(pokemon_id: string, name: string, level: number, xp_needed: number, ability: string, nature: string, daycare_id: string, id: string ){
        this.pokemon_id = pokemon_id;
        this.name = name;
        this.level = level;
        this.xp_needed = xp_needed;
        this.ability = ability;
        this.nature = nature;
        this.daycare_id = daycare_id;
        this.id = id;
        
    }
}