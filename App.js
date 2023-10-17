import { View } from 'react-native';
import { colors } from "./constans";
import Header from "./src/components/Header"
import Cards from "./src/components/Cards";
import Balance from "./src/components/Balance";
import Footer from "./src/components/Footer";
export default function App() {
  return (
    <View
        style={{
          padding: 24,
          paddingTop: 55,
          paddingBottom: 75,
          backgroundImage: `linear-gradient(120deg, 
          ${colors.GRAY_FROM}, ${colors.GRAY_TO} )`
        }}>
        <Header/>
        <Cards/>
        <Balance/>
        <Footer/>
    </View>
  );
}
