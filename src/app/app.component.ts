import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  photos = [
    {
      url: "https://as1.ftcdn.net/v2/jpg/05/70/74/20/1000_F_570742039_wJQeL1oHHr6VJ9wJcdtqAUlHPDWAYONi.jpg",
      description: "Leão",
    },
    {
      url: "https://www.publicdomainpictures.net/pictures/100000/velka/lioness-1408871063tec.jpg",
      description: "Leoa",
    },
    {
      url: "https://thumbs.dreamstime.com/b/close-up-de-um-le%C3%A3o-e-de-uma-leoa-que-rujem-39254651.jpg",
      description: "Leão e Leoa",
    },
  ];
}
