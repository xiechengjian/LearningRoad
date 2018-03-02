<template>
    <div>
    <Button type="success" @click="fillData">按钮</Button>
    <button type="button" @mouseup="stop">reset</button>
        <app-chart :width="500" :height="500" :chart-data="chartData" :options="{responsive: false, maintainAspectRatio: false}"></app-chart>
    </div>
</template>

<script>
import chart from "./chart.js";
export default {
    components: {
        "app-chart": chart
    },
    data() {
        return {
            timeOut: -1,
            // chartData:{
            //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            // }
            chartData: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                datasets: [
                    {
                        label: "GitHub Commits",
                        backgroundColor: "#f87979"
                        // data: []
                    }
                ]
            }
        };
    },
    mounted() {
        // this.timeOut=setInterval(() =>{
        //     this.fillData();
        // },1000)
    },
    methods: {
        stop() {
            if (this.timeOut != -1) {
                clearInterval(this.timeOut);
                this.timeOut = -1;
            } else {
                this.timeOut = setInterval(() => {
                    this.fillData();
                }, 1000);
            }
        },
        fillData() {
            //clearInterval(this.timeOut);
            // this.chartData = {
            //   datasets: [
            //     {
            //       label: 'Data One',
            //       backgroundColor: '#f87979',
            //       data: [this.getRandomInt(), this.getRandomInt()]
            //     }, {
            //       label: 'Data One',
            //       backgroundColor: '#f87979',
            //       data: [this.getRandomInt(), this.getRandomInt()]
            //     }
            //   ]
            // }
            let data = [];
            for (let i = 0; i < 12; i++) {
                data.push(this.getRandomInt());
            }
            let data1 = [];
            for (let i = 0; i < 12; i++) {
                data1.push(this.getRandomInt());
            }
            this.chartData = {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                datasets: [
                    {
                        label: "GitHub Commits",
                        backgroundColor: "#f87979",
                        data: data
                    }
                ]
            };
            // this.$set(this.chartData.datasets[0],'data',data);
            // console.log(this.chartData.datasets[0]);
        },
        getRandomInt() {
            return Math.floor(1 + Math.random() * 500) + 5;
        }
    }
};
</script>

<style scoped>

</style>