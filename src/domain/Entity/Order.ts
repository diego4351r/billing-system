import { Customer } from "./Customer";

export class Order{
  protected customer: Customer;
  protected orderNumber: number;
  protected description: string;
  protected total: number;

  getCustomer(){
    return this.customer
  }

  setCustomer(customer: Customer){
    this.customer = customer
    return this
  }

  getOrderNumber(){
    return this.orderNumber
  }

  setOrderNumber(orderNumber: number){
    this.orderNumber = orderNumber
    return this
  }

  getDescription(){
    return this.description
  }

  setDescription(description: string){
    this.description = description
    return this
  }

  getTotal(){
    return this.total
  }

  setTotal(total: number){
    this.total = total
    return this
  }


}