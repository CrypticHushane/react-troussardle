import { Area } from "./IArea";
import { Player } from "./IPlayer";

export interface League {
    id: string | number;
    area: Area;
    name: string;
    code: string;
    emblemUrl: string;
    
}
