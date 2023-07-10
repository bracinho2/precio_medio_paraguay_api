import { Decimal } from "@prisma/client/runtime";

export class CreateCarDto {
    manufacturer: String;
    model: String;
    year: String
    fuel: String
    gear: String
    latitude: String
    longitude: String
    informedby: Decimal
    published: Boolean
}
