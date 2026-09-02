import "./global.css"
import { Text, View } from "react-native";


function Card({children}: {children: string}) {
  return (
    <View className="bg-white p-4 rounded-lg shadow-lg">
      <Text className="bg-gray-700">{children}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Card children="Hello, World!"></Card>
    </View>

  );
}
