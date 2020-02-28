import * as React from 'react';
import { Text, View , SafeAreaView,Image,TouchableOpacity,ScrollView} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';

function CustomHeader(props) {
  let { title,isHome,navigation} = props
  return (
    <View style={{flexDirection:"row",height:50,marginTop:10}}>
      {
        isHome ? 
        <TouchableOpacity onPress={()=> navigation.openDrawer()}>
          <View style={{flex:1,justifyContent:'center'}}>
            <View style={{marginLeft:5}}>
              <Icon name="bars" size={30} color="black" />
            </View>  
          </View>
        </TouchableOpacity>
       : 
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={()=> navigation.goBack()}>
         <Image style={{width:30,height:30,marginLeft:5}}
         source={require('./assets/back.png')}
         resizeMode="contain"
         />
         <Text>Back</Text>
        </TouchableOpacity>
      }
     
      <View style={{flex:1.5,justifyContent:"center"}}>
        <Text style={{textAlign:'center'}}>{title}</Text>
      </View>
      <View style={{flex:1}}>
     
      </View>
      
    </View>
  )
} 

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home" isHome={true} navigation={navigation}/>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Home!</Text>
        <TouchableOpacity
        style={{margintop:20}}
        onPress={() => navigation.navigate('HomeDetail')}
        >
          <Text>
            Go Home Detail
          </Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}

function HomeScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}> <TouchableOpacity
    style={{margintop:20}}
    onPress={() => navigation.navigate('SettingDetail')}
    >
      <Text>
       Login
      </Text>
    </TouchableOpacity>
      <CustomHeader title="Home Detail" navigation={navigation}/>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Home Detail!</Text>
      </View>
      
    </SafeAreaView>
  );
}
function SettingScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
    <CustomHeader title="Setting" isHome={true} navigation={navigation}/>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Settings!</Text>
      <TouchableOpacity
        style={{margintop:20}}
        onPress={() => navigation.navigate('SettingDetail')}
        >
          <Text>
            Go setting Detail
          </Text>
        </TouchableOpacity>
    </View>
    
  </SafeAreaView>
  );
}

function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
    <CustomHeader title="Login" isHome={true} navigation={navigation}/>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Login Screen!</Text>
      <TouchableOpacity
        style={{margintop:20}}
        onPress={() => navigation.navigate('HomeApp')}
        >
          <Text>
           Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{margintop:20}}
        onPress={() => navigation.navigate('Register')}
        >
          <Text>
           Register
          </Text>
        </TouchableOpacity>
    </View>
    
  </SafeAreaView>
  );
}

function SettingScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
    <CustomHeader title="Setting Detail" navigation={navigation}/>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Settings Detail!</Text>
    </View>
    
  </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1}}>
    <CustomHeader title="Setting Detail" navigation={navigation}/>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Notification</Text>
    </View>
    
  </SafeAreaView>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1}}>
    <CustomHeader title="Register" navigation={navigation}/>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Register screen</Text>
    </View>
    
  </SafeAreaView>
  );
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{height:150,alignItems:"center",justifyContent:'center'}}>
        <Image source={require('./assets/man.png')}
        style={{height:120, width:120,borderRadius:60}}
        />
      </View>
      <ScrollView style={{marginLeft:5}}>
      <TouchableOpacity
        style={{margintop:20}}
        onPress={() => props.navigation.navigate('MenuTab')}
        >
          <Text>
          Menu Tab
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{margintop:20}}
        onPress={() => props.navigation.navigate('Notifications')}
        >
          <Text>
            Notifications
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}
const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown :false
})

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler} />
    </StackHome.Navigator>
  )
}

const StackSetting = createStackNavigator();
function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Setting" component={SettingScreen} options={navOptionHandler}/>
      <StackSetting.Screen name="SettingDetail" component={SettingScreenDetail} options={navOptionHandler}/>
    </StackSetting.Navigator>
  )
}

function TabNavigator() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            }
            else if (route.name === 'Settings') {
              iconName = focused ? 'table' : 'table';
            }
            

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;       
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
     
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingStack} />
      </Tab.Navigator>
  )
}
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return(
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props=> CustomDrawerContent(props)}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
          <StackSetting.Navigator initialRouteName="HomeApp">
            <StackSetting.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
            <StackSetting.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
            <StackSetting.Screen name="Register" component={RegisterScreen} options={navOptionHandler}/>
          </StackSetting.Navigator>
    </NavigationContainer>
  );
}