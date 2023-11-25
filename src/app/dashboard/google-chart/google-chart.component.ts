import { Component } from '@angular/core';

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.scss']
})
export class GoogleChartComponent {
  pieChartData = [
    ['Category A', 30],
    ['Category B', 40],
    ['Category C', 20],
    ['Category D', 10]
  ];

  ngOnInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChar.bind(this));
  }

  drawChar() {
    const chartDiv = document.getElementById('pieChart')!;
    const barChartDiv = document.getElementById('barChart')!;
    const lineChartDiv = document.getElementById('lineChart')!;

    const data = google.visualization.arrayToDataTable([
      ['Category', 'Percentage'],
      ...this.pieChartData
    ]);

    const options = {
      title: 'My Pie Chart',
      width: 400,
      height: 300,
      backgroundColor: '#f2f2f2'
    };

    const chart = new google.visualization.PieChart(chartDiv);
    chart.draw(data, options);

    const barChart = new google.visualization.BarChart(barChartDiv);
    barChart.draw(data, options);

    const lineChart = new google.visualization.LineChart(lineChartDiv);
    lineChart.draw(data, options);
  }
}
