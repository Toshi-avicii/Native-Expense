import { View } from 'react-native'
import Chart from '../components/Chart'
import MainAmount from '../components/MainAmount'
import { useEffect, useState } from 'react'

const HomeScreen = () => {
  const [date, setDate] = useState(new Date());
  const [nextWeek, setNextWeek] = useState(new Date(date).getTime() + (6 * 24 * 60 * 60 * 1000));
  const [totalAmountOfTimePeriod, setTotalAmountOfTimePeriod] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('week');
  const [data, setData] = useState([]);


  const pickMonth = (monthIndex) => {
    setSelectedCategory('month');
    setSelectedMonth(monthIndex);
  }

  const pickWeek = () => {
    setSelectedCategory('week');
    setSelectedMonth(null);
  }

  const pickYear = (year) => {
    setSelectedCategory('year');
    setSelectedMonth(null);
  }

  // variables for x-axis of chart
  const today = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit'
  });
  const oneDayAfter = new Date(new Date(date).getTime() + (24 * 60 * 60 * 1000)).toLocaleDateString('en-GB', {
    day: "2-digit",
    month: '2-digit'
  });
  const twoDayAfter = new Date(new Date(date).getTime() + (2 * 24 * 60 * 60 * 1000)).toLocaleDateString('en-GB', {
    day: "2-digit",
    month: '2-digit'
  });
  const threeDayAfter = new Date(new Date(date).getTime() + (3 * 24 * 60 * 60 * 1000)).toLocaleDateString('en-GB', {
    day: "2-digit",
    month: '2-digit'
  });
  const fourDayAfter = new Date(new Date(date).getTime() + (4 * 24 * 60 * 60 * 1000)).toLocaleDateString('en-GB', {
    day: "2-digit",
    month: '2-digit'
  });
  const fiveDayAfter = new Date(new Date(date).getTime() + (5 * 24 * 60 * 60 * 1000)).toLocaleDateString('en-GB', {
    day: "2-digit",
    month: '2-digit'
  });
  const sixDayAfter = new Date(new Date(date).getTime() + (6 * 24 * 60 * 60 * 1000)).toLocaleDateString('en-GB', {
    day: "2-digit",
    month: '2-digit'
  });


  // sample data for the chart, for now, later I'll fetch data from the backend
  let chartData = [
    { x: today, y: Math.floor(Math.random() * 1000)},
    { x: oneDayAfter, y: Math.floor(Math.random() * 1000) },
    { x: twoDayAfter, y: Math.floor(Math.random() * 1000) },
    { x: threeDayAfter, y: Math.floor(Math.random() * 1000) },
    { x: fourDayAfter, y: Math.floor(Math.random() * 1000) },
    { x: fiveDayAfter, y: Math.floor(Math.random() * 1000) },
    { x: sixDayAfter, y: Math.floor(Math.random() * 1000) },
  ];

  useEffect(() => {
    setData(chartData);
  }, [])

  useEffect(() => {
    const calculateChartAmountOfPeriod = (chartData) => {
      console.log(chartData);
      const chartAmount = chartData.reduce((accumulator, currentObj) => {
        return accumulator + currentObj.y;
      }, 0);
      setTotalAmountOfTimePeriod(chartAmount);
    }
    // if week button is clicked
    if(selectedCategory === 'week') {
      const weekChartData = [
        { x: today, y: Math.floor(Math.random() * 1000)},
        { x: oneDayAfter, y: Math.floor(Math.random() * 1000) },
        { x: twoDayAfter, y: Math.floor(Math.random() * 1000) },
        { x: threeDayAfter, y: Math.floor(Math.random() * 1000) },
        { x: fourDayAfter, y: Math.floor(Math.random() * 1000) },
        { x: fiveDayAfter, y: Math.floor(Math.random() * 1000) },
        { x: sixDayAfter, y: Math.floor(Math.random() * 1000) },
      ]
      // redraw the chart with the week data
      setData(weekChartData);
      // calculate the total expense in the week by calculating week chart data
      calculateChartAmountOfPeriod(weekChartData);
    }

    // if month button is clicked 
    if(selectedCategory === 'month') {
      const monthIndex = new Date(date).getMonth()

      if(monthIndex === 1) {
        // if monthIndex is 1, then february is selected
        const rangeArray = Array.from({ length: 28 }, (_, index) => index + 1);
        // const expenses = [];
        const returnedExpenseData = rangeArray.map((day, index) => {
          const formattedDay = day < 10 ? `0${day}` : day;
          return {
            x: `${formattedDay}/0${monthIndex + 1}`, y: Math.floor(Math.random() * 1000)
          }
        });

        setData(returnedExpenseData);
        calculateChartAmountOfPeriod(returnedExpenseData);

      } else if(monthIndex === 3 || monthIndex === 5 || monthIndex === 8 || monthIndex === 10) {
        // if the monthIndex is equal to 3 or 5 or 8 or 10, then the month which is selected has 30 days
        const rangeArray = Array.from({ length: 30 }, (_, index) => index + 1);
        // const expenses = [];
        const returnedExpenseData = rangeArray.map((day, index) => {
          const formattedDay = day < 10 ? `0${day}` : day;
          return {
            x: `${formattedDay}/0${monthIndex + 1}`, y: Math.floor(Math.random() * 1000)
          }
        });

        setData(returnedExpenseData);
        calculateChartAmountOfPeriod(returnedExpenseData);
        
      } else {
        // this means that the month which is selected has 31 days
        const rangeArray = Array.from({ length: 31 }, (_, index) => index + 1);
        // const expenses = [];
        const returnedExpenseData = rangeArray.map((day, index) => {
          const formattedDay = day < 10 ? `0${day}` : day;
          return {
            x: `${formattedDay}/0${monthIndex + 1}`, y: Math.floor(Math.random() * 1000)
          }
        });

        setData(returnedExpenseData);
        calculateChartAmountOfPeriod(returnedExpenseData);

        

      }
      
    }
  }, [date, selectedCategory]);

  return (
    <View className="flex-1 bg-gray-100">
      <MainAmount amount={chartData[0].y} />
      <Chart 
        data={data} 
        date={date} 
        setDate={setDate} 
        nextWeek={nextWeek}
        setNextWeek={setNextWeek}
        totalAmountOfTimePeriod={totalAmountOfTimePeriod}
        setTotalAmountOfTimePeriod={setTotalAmountOfTimePeriod}
        selectedMonth={selectedMonth}
        selectedCategory={selectedCategory}
        pickMonth={pickMonth}
        pickWeek={pickWeek}
        pickYear={pickYear}
      />
    </View>
  )
}

export default HomeScreen