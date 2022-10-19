import { Component, Input } from "@angular/core";
import { Command } from "./command";

@Component({
  selector: "app-command",
  templateUrl: './command.component.html',
  styleUrls: ["./command.component.scss"],
})
export class CommandComponent {
  @Input() command?: Command;
}
