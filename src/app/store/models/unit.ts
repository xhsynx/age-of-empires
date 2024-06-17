export const UNIT_REDUCER = "UNIT_REDUCER";
export interface Unit {
  id?: number;
  name?: string;
  description?: string;
  expansion?: string;
  age?: string;
  cost?: {
    Wood?: number;
    Food?: number;
    Gold?: number;
  };
  build_time?: number;
  reload_time?: number;
  attack_delay?: number;
  movement_rate?: number;
  line_of_sight?: number;
  hit_points?: number;
  range?: any;
  attack?: number;
  armor?: string;
  accuracy?: string;
  attack_bonus?: string[];
}
