import React, { Fragment } from "react";
import Loader from "../../helpers/Loader";
import useFetch from "../../hooks/useFetch";
import Chart from "react-apexcharts";

const CoinChart = ({id}) => {
    const { data, errorData } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`);
    let chartData;
    let options;
    let series;
    /* Generating a random color for the chart. */
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

    
    if(data) {
        /* Mapping the data from the API and returning an object with the x and y values. */
        chartData = data.prices.map(val => ({ x: val[0], y: val[1] }))


        options = {
            colors: [randomColor],
            chart: {
                id
            },
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                opposite: true
            },
            labels: chartData.map(axis => new Date(axis.x).getTime()),
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            subtitle: {
                text: 'Price Movements',
                align: 'left'
            },
            noData: {
                text: 'Loading...'
            }
        }
        series = [{
              name: `Price`,
              data: chartData.map(axis => axis.y.toFixed(5))
            }
        ]
    
    } else {
        return <Fragment>
            <div className="text-center">
                <p className="text-lg text-red-400 mt-4"><b>Sorry! We couldn't load the chart!</b></p>
                <p>Please refresh the page and try again</p>
            </div>
        </Fragment>
    }


    return <div className="block mt-10">
        <div className="mx-auto">
            <h2 className="font-bold text-lg text-center uppercase">24h price chart of <span style={{color: randomColor}}>{id}</span></h2>
            {data && !errorData ? <Chart options={options} series={series} type="area" width="100%" /> : <Loader />}
        </div>
    </div>
}

export default CoinChart;