import { Component, OnInit } from '@angular/core';
import { TestJsService } from './test-js.service';

@Component({
  selector: 'app-test-js',
  templateUrl: './test-js.component.html',
  styleUrls: ['./test-js.component.css']
})
export class TestJsComponent implements OnInit {

  result: [] = [];
  basicData: any;
  basicOptions: any;
  
  constructor(private testJsService: TestJsService) { }

  ngOnInit(): void {
    this.getData();
    
  }

  getData() {
    
    this.testJsService.getData().subscribe((data: any) => {
      this.result = data.data;
      this.getCharts(this.result);
    });
  }

  getCharts(data: any){
    this.basicData = {
      labels: [],
      datasets: [
          {
              label: 'Population',
              backgroundColor: '#42A5F5',
              data: []
          },
      ]
    };

    data.forEach((value: any) => {
      this.basicData.labels.push(value.Year);
      this.basicData.datasets[0].data.push(value.Population);
    }); 
  }

}
