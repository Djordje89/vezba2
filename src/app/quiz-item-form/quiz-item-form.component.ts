import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuizzItem } from '../model/quizz-item.model';

@Component({
  selector: 'app-quiz-item-form',
  templateUrl: './quiz-item-form.component.html',
  styleUrls: ['./quiz-item-form.component.css']
})
export class QuizItemFormComponent implements OnInit {

  @Output() quizItemCreated = new EventEmitter<QuizzItem>();

  constructor() { 
  }

  ngOnInit() {
  }

 createQuizItem(p: string, o: string){
   console.log("createQuizItem");
  this.quizItemCreated.emit(new QuizzItem(p,o, false));
  }
}
