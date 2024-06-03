import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/home/HomeScreen'
import DetailsScreen from '../screens/details/DetailsScreen'

export type RootParams = {
  Home: undefined,
  Details: { movieId: number }
}

const Stack = createStackNavigator<RootParams>()

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation