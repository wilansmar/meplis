import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: any[] = [
    { "id" : 1 ,"name" : "Meredith Grey" , "comment" : "Será se vamos conseguir um bom candidato para a vaga?" , "avatar" : "/assets/img/avatar_MG.jpg" },
    { "id" : 2 ,"name" : "Meplis" , "comment" : "Estamos trabalhando para selecionar o melhor." , "avatar" : "/assets/img/meplis.png" },
    { "id" : 3 ,"name" : "Will" , "comment" : "Demorei muito para conseguir participar do processo de seleção"+
    "mas agora estou com muita disposição para participar." , "avatar" : "/assets/img/avatar2.jpg" }];

  constructor() { }

  ngOnInit(): void {
    
  }

}
