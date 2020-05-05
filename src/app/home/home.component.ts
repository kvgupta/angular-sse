import { Component, OnInit } from '@angular/core';
import { SseService } from '../sse/sse.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private sseService: SseService) { }

  ngOnInit(): void {
    this.sseService
      .getServerSentEvent("http://localhost:3000/my-endpoint")
      .subscribe(data => console.log(data));
  }

}
