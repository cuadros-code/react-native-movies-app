import { Text, View } from 'react-native'
import useMovies from '../../hooks/useMovies'

const HomeScreen = () => {

  useMovies()

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

export default HomeScreen