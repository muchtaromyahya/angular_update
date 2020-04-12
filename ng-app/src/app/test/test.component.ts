import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'Offline';
  constructor() { this.serverStatus = Math.random() > 0.5 ? 'online' : 'Offline';

  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  ngOnInit(): void {
  }

}
