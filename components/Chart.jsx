import { Dimensions, ScrollView, View } from 'react-native'
import { LinearGradient, Defs, Stop } from 'react-native-svg'
import { 
  VictoryChart, 
  VictoryTheme, 
  VictoryAxis,
  VictoryLabel,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryArea
} from 'victory-native'
import { DateTimePicker } from './ui/DateTimePicker'
import ChartAmount from './ui/ChartAmount'
import ChartButtonContainer from './ui/ChartButtonContainer'


export default function Chart({
  data,
  date,
  setDate,
  nextWeek,
  setNextWeek,
  totalAmountOfTimePeriod,
  setTotalAmountOfTimePeriod,
  selectedCategory,
  selectedMonth,
  pickMonth,
  pickWeek,
  pickYear
}) {
  
  return (
    <View className="bg-white shadow-md m-4 rounded-xl">
      <DateTimePicker 
        date={date} 
        setDate={setDate} 
        nextWeek={nextWeek} 
        setNextWeek={setNextWeek} 
        selectedCategory={selectedCategory}
        selectedMonth={selectedMonth}
      />
      <ChartAmount amount={totalAmountOfTimePeriod} />
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={{ 
          backgroundColor: 'white', 
          maxHeight: 200, 
          borderRadius: 12
        }}
      >
        <VictoryChart 
          domainPadding={{
            x: 0,
            y: 20
          }}
          width={Dimensions.get('window').width + 50}
          theme={VictoryTheme.material}
          padding={{
            left: 70,
            right: 0,
            bottom: 40,
            top: 20
          }}
          style={{
            background: {
              fill: "#fff",
            }
          }}
          height={200}
          containerComponent={
            <VictoryVoronoiContainer 
              labels={({ datum }) => {
                  return `${datum.x}, Rs. ${datum.y}`
                }
              } 
              mouseFollowTooltips
              // voronoiDimension='y'
              labelComponent={
                <VictoryTooltip 
                  pointerLength={50}
                  flyoutStyle={{ fill: '#7045f8' }} 
                  flyoutPadding={{ bottom: 12, left: 12, top: 12, right: 12 }} 
                  style={{
                    fill: 'white',
                    border: '1px solid white'
                  }}
                />}
            />
          }
        >
          
          <Defs>
            <LinearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <Stop offset="0%" stopColor="#7045f8"/>
              <Stop offset="105%" stopColor="white"/>
            </LinearGradient>
          </Defs>
          <VictoryArea
            width={Dimensions.get('window').width + 150}
            style={{
              data: { fill: 'url(#myGradient)' },
              parent: { border: "1px solid #fff", stroke: '#000' },
            }}
            data={data}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}
            interpolation="natural"
          />
          <VictoryAxis
            style={{
              grid: {
                stroke: null
              },
              axis: {
                stroke: 'transparent'
              },
              ticks: {
                stroke: 'transparent'
              }
            }}
            tickLabelComponent={<VictoryLabel style={{ fill: 'black' }} dx={-20} />}
            tickCount={7}
          />

          <VictoryAxis
            style={{
              grid: {
                stroke: null
              },
              axis: {
                stroke: 'transparent'
              },
              ticks: {
                stroke: 'transparent'
              }
            }}
            dependentAxis={true}
            tickLabelComponent={<VictoryLabel style={{ fill: 'black' }} />}
          />
        </VictoryChart>
      </ScrollView>
      <ChartButtonContainer  
        date={date} 
        pickMonth={pickMonth} 
        pickWeek={pickWeek}
        pickYear={pickYear}
      />
    </View>
  )
}