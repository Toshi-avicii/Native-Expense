import { View, Text } from 'react-native'

export default function MainAmount({ amount }) {
  return (
    <View className="bg-[#7045f8] flex-row justify-center items-end">
      <Text className="text-2xl my-2 text-center text-white flex justify-center items-center">
        Today: Rs. {amount}
      </Text>
      <Text className="text-xl my-2 text-white">.56</Text>
    </View>
  )
}