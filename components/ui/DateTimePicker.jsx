import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export const DateTimePicker = ({ date, setDate, nextWeek, setNextWeek, selectedCategory, selectedMonth }) => {
    console.log('month: ', selectedMonth, 'category: ', selectedCategory);
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      // console.log(new Date(selectedDate).getTime(), new Date(date).getTime());
      // console.log(date, selectedDate);
      if(new Date(selectedDate).getTime() > new Date()) {
        Alert.alert('Please select an old date', 
          'Cannot select a future date for selection', 
          [
            {
              text: 'Ok',
              style: 'default',
              onPress: () => console.log('alert btn pressed')
            }
          ]
        );
        return;
      } else {
        setDate(currentDate);
        const nextWeek = new Date(selectedDate).getTime() + (6 * 24 * 60 * 60 * 1000);
        setNextWeek(new Date(nextWeek));
      }
    };
  
    const showMode = (currentMode) => {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    return (
      <View className="flex-row justify-between items-center p-4 pb-2">
        <View className="flex-row justify-center items-center">
          {
            (selectedCategory === 'week' && selectedMonth === null) && 
            <View className="min-w-[90%] flex-row justify-center items-center justify-self-center">  
              <Text className="mr-2 font-bold">
                {date.toLocaleDateString('en-GB', {
                  day: '2-digit',
                })} - 
              </Text>
              <Text className="font-bold">
                {new Date(nextWeek).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}
              </Text>
            </View>
          }
          {
            selectedCategory === 'month' && 
            <View className="min-w-[90%] flex-row justify-center items-center justify-self-center">
              <Text className="mr-2 font-bold">
                {date.toLocaleDateString('en-GB', {
                  month: 'long',
                  year: 'numeric'
                })}
              </Text>
            </View>
          }
          { 
            (selectedCategory === 'year' && selectedMonth === null) && 
            <View className="min-w-[90%] flex-row justify-center items-center justify-self-center">
              <Text className="mr-2 font-bold">
                {date.toLocaleDateString('en-GB', {
                  year: 'numeric'
                })}
              </Text>
            </View>
          }
        </View>
        <TouchableOpacity onPress={showDatepicker}>
          <AntDesign name="calendar" size={24} color="#7045f8" />
        </TouchableOpacity>
      </View>
    );
  };