import { AbstractEntity } from "./AbstractEntity";

export class Customer extends AbstractEntity {
  protected name: string
  protected email: string

  getName(){
    return this.name
  }

  setName(name: string){
    this.name = name
    return this
  }

  getEmail(){
    return this.email
  }

  setEmail(email: string){
    this.email = email
    return this
  }
}