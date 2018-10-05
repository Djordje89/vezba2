import { Component, OnInit } from '@angular/core';
import { QuizzItem } from '../model/quizz-item.model';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizItems: QuizzItem [];
  constructor() {
    this.quizItems = [
      new QuizzItem("Moc pitanje 1","Moc odgovora 1",true),
      new QuizzItem("Moc pitanje 2","Moc odgovora 2",false),
      new QuizzItem("Moc pitanje 3","Moc odgovora 3",true)
    ];
    }

  ngOnInit() {
  }

  addQuizItem(q:QuizzItem){
    console.log(q);
    this.quizItems.unshift(q);
  }
}
