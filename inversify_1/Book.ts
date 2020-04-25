import { injectable, inject } from "inversify";
import Library from './Library'

@injectable()
export default class Book {
  private _library: Library
  
  constructor(hook: Library ) {
    this._library = hook
  }
  
  getLibrary() {
    return (`This book belongs to library ${this._library.name}`)
  }

  getSchool() {
    return (`This book belongs to School ${this._library.getSchool()}`)
  }
}