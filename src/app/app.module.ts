import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CommandComponent } from './shared/ui/command/command.component';
import { GreeterComponent } from './pages/greeter/greeter.component';
import { GreeterFormComponent } from './pages/greeter/greeter-form/greeter-form.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskListComponent } from './pages/tasks/task-list/task-list.component';
import { TaskFormComponent } from './pages/tasks/task-form/task-form.component';
import { TaskListItemComponent } from './pages/tasks/task-list/task-list-item/task-list-item.component';
import { TasksService } from './pages/tasks/services/tasks.service';
import { PersistentTasksService } from './pages/tasks/services/persistent-tasks.service';
import { ButtonDirective } from './directives/button.directive';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RoutingModule } from './routing/routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandComponent,
    GreeterComponent,
    GreeterFormComponent,
    TasksComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskListItemComponent,
    ButtonDirective,
    HomepageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    {
      provide: TasksService,
      useExisting: PersistentTasksService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
