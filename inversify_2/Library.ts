import { injectable, inject } from "inversify";
import School from './School'

@injectable()
export default class Library {
  private _school: School

  public name: string
  
  constructor(@inject('MySchool') school: School ) {
    this._school = school

    this.name = "Library1"
  }
  
  getSchool() {
    return (`This library belongs to ${this._school.name}`)
  }
}