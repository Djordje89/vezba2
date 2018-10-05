import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizItemFormComponent } from './quiz-item-form/quiz-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizItemComponent,
    QuizListComponent,
    QuizItemFormComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
