import { injectable } from "inversify";

@injectable()
class School {
  
  public name: string;

  constructor() {
    this.name = "School1"
  }

  getSchoolName() {
    console.log(`School is ${this.name}`)
  }
}

export default School