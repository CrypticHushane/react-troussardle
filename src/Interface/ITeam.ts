import { Area } from "./IArea";
import { Player } from "./IPlayer";

export interface Team {
    id: string | number;
    area: Area;
    name: string;
    shortName: string;
    crestUrl: string;
    squad: Array<Player>;
    count:number;
}