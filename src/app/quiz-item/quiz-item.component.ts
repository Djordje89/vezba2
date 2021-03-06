import { Component, OnInit, Input } from '@angular/core';
import { QuizzItem } from '../model/quizz-item.model';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.css']
})
export class QuizItemComponent implements OnInit {

@Input()
  quizItemData: QuizzItem;

  ngOnInit() {
  }

}
