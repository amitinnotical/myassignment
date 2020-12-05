import { Component, OnInit } from '@angular/core';
import { GetServiceService } from './get-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'new-project';
  params = {
    limit: 100
  };
  constructor(private readonly getService: GetServiceService) {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.getService.getData(this.params)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
