import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created !';
  serverName= 'test Server';
  serverCreated = false;
  server = ['Test server', 'test server 2']

  constructor() {
    
   }

  ngOnInit(): void {
  }
  onCreatedServer(){
    this.serverCreationStatus = 'Server was created ! ' + this.serverName;
    this.serverCreated = true;
    this.server.push(this.serverName);
  }
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
