import { Order } from "./Order";

export class Invoice {
  protected order: Order;
  protected invoiceDate: Date;
  protected total: number;

  getOrder(){
    return this.order
  }

  setOrder(order: Order){
    this.order = order
    return this
  }

  getInvoiceDate(){
    return this.invoiceDate
  }

  setInvoiceDate(invoiceDate: Date){
    this.invoiceDate = invoiceDate
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