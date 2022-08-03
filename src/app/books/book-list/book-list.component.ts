import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookDataList = [
    {
      "id": "1159142",
      "title": "Agile Web Development with Rails",
      "author": "Sam Ruby, Dave Thomas, David Heinemeier Hansson",
      "categories": "Web development",
      "year": "2010",
      "edition": "Fourth Edition",
      "language": "en",
      "extension": "pdf",
      "pages": "472",
      "url": "http://bookzz.org/dl/1159142/643c75",
      "description": ""
    },
    {
      "id": "592321",
      "title": "Agile web development with rails: a Pragmatic guide",
      "author": "Dave Thomas, David Heinemeier Hansson, Leon Breedt, Mike Clark, Thomas Fuchs, Andrea Schwarz",
      "categories": "'Web site development -- Handbooks, manuals, etc.','Ruby (Computer program language) -- Handbooks, manuals, etc.','Sites Web -- DeРњРѓveloppement -- Guides, manuels, etc.','Ruby (Langage de programmation) -- Guides, manuels, etc.'",
      "year": "2005",
      "edition": "1",
      "language": "en",
      "extension": "pdf",
      "pages": "554",
      "url": "http://bookzz.org/dl/592321/c1094c",
      "description": "Rails is a full-stack, open source web framework that enables you to create full-featured, sophisticated web-based applications, but with a twist... A full Rails application probably has less total code than the XML you'd need to configure the same application in other frameworks. With this book you'll learn how to use \"ActiveRecord\" to connect business objects and database tables. No more painful object-relational mapping. Just create your business objects and let Rails do the rest. You'll learn how to use the \"Action Pack\" framework to route incoming requests and render pages using easy-to-write templates and components. See how to exploit the Rails service frameworks to send emails, implement web services, and create dynamic, user-centric web-pages using built-in Javascript and Ajax support. There are extensive chapters on testing, deployment, and scaling. You'll see how easy it is to install Rails using your web server of choice (such as Apache or lighttpd) or using its own included web server. You'll be writing applications that work with your favorite database (MySQL, Oracle, Postgres, and more) in no time at all. You'll create a complete online store application in the extended tutorial section, so you'll see how a full Rails application is developed---iteratively and rapidly. Rails strives to honor the Pragmatic Programmer's \"DRY Principle\" by avoiding the extra work of configuration files and code annotations. You can develop in real-time: make a change, and watch it work immediately. Forget XML. Everything in Rails, from templates to control flow to business logic, is written in Ruby, the language of choice for programmers who like to get the job done well (and leave work ontime for a change). Rails is the framework of choice for the new generation of Web 2.0 developers. Agile Web Development with Rails is the book for that generation, written by Dave Thomas (Pragmatic Programmer and author of Programming Ruby) and David Heinemeier Hansson, who created Rails.",
      "cover": "http://libgen.org/covers/164000/af5f2f07c3bf2fd005fc4189b6945feb-d.jpg"
    },
    {
      "id": "2375753",
      "title": "Flask Web Development",
      "author": "Miguel Grinberg",
      "categories": "python,pyhton web development,flask",
      "year": "0",
      "edition": null,
      "language": "",
      "extension": "pdf",
      "pages": "0",
      "url": "http://bookzz.org/dl/2375753/c8da9e",
      "description": "",
      "cover": null
    },
    {
      "id": "643503",
      "title": "CakePHP Application Development: Step-by-step introduction to rapid web development using the open-source MVC CakePHP framework",
      "author": "Ahsanul Bari, Anupom Syam",
      "categories": "Computer Science/Web/Server Side Scripting/PHP",
      "year": "2008",
      "edition": "",
      "language": "en",
      "extension": "pdf",
      "pages": "328",
      "url": "http://bookzz.org/dl/643503/4ed37c",
      "description": "I bought this book based on the reviews here. It was the highest rated CakePHP book on Amazon at the time so I figured I couldn't go wrong. I was a little wrong about that...\r\rThe book is pretty easy to follow, and it does a good job introducing you to how CakePHP works and talking you through using the MVC pattern. The reason I gave it such a low rating is because of the code typos that litter the pages and all of the terrible, terrible grammar throughout. It's as though the author didn't speak English natively and the editors didn't bother to fix anything! What's worse, some of the concepts in the book are stated exactly backwards; a read headache for the beginner.\r\rIf you already know PHP to some degree and are at least familiar with CakePHP, the book is pretty helpful for solidifying ideas. It's probably one of the better books I've read on the topic in terms of the order in which they teach you and how it's described. But, if you're new to PHP or CakePHP, don't start with this book; you'll be pulling your hair out trying to figure out where the typos in the code are and interpreting the text.\r\rOverall, I'm happy I picked the book up. It's the second one I've been reading and it's helped me make more sense of how some of the components work, but if you're new and you just want to learn how to use CakePHP, you should consider looking elsewhere, or at least reading The Manual on their website first.",
      "cover": "http://libgen.org/covers/215000/0130dd963cca48d57bfe2252c2a521f7-d.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {

    console.log("book list component......")
  }

}
