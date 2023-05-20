import { Text, Pressable, View } from 'react-native'

export default function Button({ text, btnStyles, textStyles, onPress }) {
  
  return (
    <View>
        <Pressable 
            style={({ pressed }) => [btnStyles]} 
            android_ripple={{ color: 'grey' }} 
            onPress={onPress}
        >
            <Text style={textStyles}>{text}</Text>
        </Pressable>
    </View>
  )
}