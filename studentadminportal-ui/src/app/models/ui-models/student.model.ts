import { Gender } from "../ui-models/gender.model";
import { Address } from "./address.model";

export interface student{
  id:string,
  firstName:string,
  lastName:string,
  dateOfBirth:string,
  email:string,
  mobile: number,
  profileImageUrl:string,
  genderId:string,
  gender:Gender,
  address:Address
}
