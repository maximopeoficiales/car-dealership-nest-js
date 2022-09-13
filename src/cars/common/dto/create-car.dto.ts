import { Car } from "../interfaces/car.interface";

export interface CreateCarDto extends Omit<Car, 'id'> {

}  

