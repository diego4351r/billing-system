export abstract class AbstractEntity {
  protected id: string;

  getId() {
    return this.id
  }

  setId(id: string){
    this.id = id
    return this
  }

}