import { View, Text } from 'react-native'

export default function ChartAmount({ amount }) {
  return (
    <View>
      <View className="flex-row justify-center items-center">
        <Text className="font-bold text-sm text-center mr-1">Total Expense:</Text>
        <Text className="font-bold text-sm text-center text-red-500">Rs. {amount}</Text>
      </View>
    </View>
  )
}