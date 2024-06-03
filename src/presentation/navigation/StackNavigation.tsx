import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/home/HomeScreen'
import DetailsScreen from '../screens/details/DetailsScreen'

const Stack = createStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation