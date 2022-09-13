import { Car } from "../interfaces/car.interface";

export interface UpdateCarDto extends Omit<Car, 'id'> {

}  

