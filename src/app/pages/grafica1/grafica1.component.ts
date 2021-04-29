import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component implements OnInit {

  public labelsToSend: Label[] = ['Label1', 'Label2', 'Label3'];
  public dataToSend = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
