import "reflect-metadata";
import { injectable, inject } from "inversify";
import { Container } from "inversify";

import School from './School'
import Library from './Library'
import Book from './Book'


const container = new Container();
container.bind(School).toSelf().inSingletonScope();
container.bind(Library).toSelf().inSingletonScope();

const school = container.get(School);
console.log(school.name)
// output: School1

/*
  Automatically Inject the School Dependency to the Library Class Constructor
*/
const library = container.resolve(Library);
console.log(library.getSchool())
// output This library belongs to School1

/*
 Update School Name it will automatically update everywhere in the injected dependencies
*/
school.name = "School 2"

/*
  Automatically Inject the Library Dependency to the Library Class Constructor
*/
const book = container.resolve(Book);
console.log(book.getLibrary())
console.log(book.getSchool())
// output This library belongs to School1
