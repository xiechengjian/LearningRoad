// import VueCharts from 'vue-chartjs'
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
// console.log(mixins);
export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  created () {
    // console.log('Chart!created',this.chartData);
    // console.log(mixins,this.options);
  },
  mounted () {
    // Overwriting base render method with actual data.
    // this.renderChart({
    //   labels:this.chartData.labels,
    //   datasets: this.chartData.datasets
    // })
    // console.log(mixins,this.options);
    this.renderChart(this.chartData, this.options)
  }
}
