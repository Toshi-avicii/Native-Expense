import { View, StyleSheet } from 'react-native'
import Button from './Button'
import { useState } from 'react'; 

const ChartButtonContainer = ({ date, pickMonth, pickYear, pickWeek }) => {
  const [isActive, setIsActive] = useState(null);
  const btns = ['Week', 'Month', 'Year'];

  const pressHandler = (index, category) => {
    setIsActive(index);

    if(category === 'Week') {
      pickWeek();
    } else if(category === 'Month') {
      pickMonth(new Date(date).getMonth());
    } else if(category === 'Year') {
      pickYear(new Date(date).getFullYear());
    }

  }

  return (
    <View className="flex-row justify-around items-center mt-2 mb-4">
      {
        btns.map((btn, index) => {
          return (
            <Button 
              key={index}
              btnStyles={isActive === index ? styles.activeBtn : styles.inActiveBtn}
              textStyles={isActive === index ? styles.activeText : styles.inActiveText}
              text={btn}
              onPress={pressHandler.bind(this, index, btn)}
            />
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({

  activeBtn: {
    backgroundColor: '#7045f8',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    minWidth: 80,
  },
  btn: {
    textAlign: "center"
  },

  activeText: {
    color: 'white',
    fontSize: 12,
    textAlign: "center"
  },

  inActiveText: {
    color: 'black',
    fontSize: 12,
    textAlign: "center"
  },
  inActiveBtn: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    minWidth: 80,
  },
})

export default ChartButtonContainer;