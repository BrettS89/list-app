import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

import colors from '../shared/colors';
import Todos from '../modules/main/to-dos/list';
import CreateTodos from '../modules/main/to-dos/create';
import Feed from '../modules/main/feed';
import Discover from '../modules/main/discover';
import Notifications from '../modules/main/notifications';
import Users from '../modules/main/users';

import Welcome from '../modules/auth/welcome';
import Init from '../modules/auth/init';
import Login from '../modules/auth/login';
import Signup from '../modules/auth/signup';

import PageTitle from '../components/page-title';
import AddTodoButton from '../modules/main/to-dos/list/add-button';

import UserSearch from '../modules/main/users/search';
import Header from '../components/header';

const headerOptions = {
  title: null as null,
  headerShadowVisible: false,
  headerTintColor: colors.background,
  // headerLeft: Logo,
  headerStyle: {
    backgroundColor: colors.main,
  },
};

const RootStack = createNativeStackNavigator();

const TodoStack = createNativeStackNavigator();
const FeedStack = createNativeStackNavigator();
const DiscoverStack = createNativeStackNavigator();
const NotificationsStack = createNativeStackNavigator();
const UsersStack = createNativeStackNavigator();

const MainStackComponent = () => {
  return (
    <TodoStack.Navigator screenOptions={{  }}>
      <TodoStack.Screen options={{
        header: () => <Header type='title' title='To-do list' addTodo />,
        // ...headerOptions,
        // headerLeft: () => <PageTitle title='To-do list'/>,
        // headerRight: () => <AddTodoButton />,
      }} name='TodosStack' component={Todos} />
      <TodoStack.Screen options={{
        ...headerOptions,
        headerBackVisible: true,
        // headerBackTitleVisible: true,
      }} 
      name='CreateTodoStack' component={CreateTodos} />
    </TodoStack.Navigator>
  );
};

// const FeedStackComponent = () => {
//   return (
//     <FeedStack.Navigator>
//       <FeedStack.Screen options={headerOptions} name='FeedStack' component={Feed} />
//     </FeedStack.Navigator>
//   );
// };

const DiscoverStackStackComponent = () => {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen options={headerOptions} name='DiscoverStack' component={Discover} />
    </DiscoverStack.Navigator>
  );
};

const NotificationsStackComponent = () => {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen options={{
        header: () => <Header type='title' title='Notifications' />,
      }} name='NotificationsScreen' component={Notifications} />
    </NotificationsStack.Navigator>
  );
};

const UsersStackComponent = () => {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen options={{
        header: () => <Header type='user-search' />
      }}
      name='UsersScreen' component={Users} />
    </UsersStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'menu';

          if (route.name === "To-do's") iconName = 'file-tray-full';
          if (route.name === 'Feed') iconName = 'list-circle';
          if (route.name === 'Discover') iconName = 'earth-sharp';
          if (route.name === 'Users') iconName = 'people';
          if (route.name === 'Notifications') iconName = 'md-notifications-sharp';

          //@ts-ignore
          return <Ionicons name={iconName} size={size} color={color} />
        },
        headerShown: false,
        tabBarActiveTintColor: colors.main,
      })}
    >
      <Tab.Screen name="To-do's" component={MainStackComponent} />
      {/* <Tab.Screen name='Feed' component={FeedStackComponent} /> */}
      <Tab.Screen name='Discover' component={DiscoverStackStackComponent} />
      <Tab.Screen name='Users' component={UsersStackComponent} />
      <Tab.Screen name='Notifications' component={NotificationsStackComponent} />
    </Tab.Navigator>
  );
}

const rootStack = () => {
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={() => ({
            headerShown: false,
          })}
        >
          <RootStack.Screen name='Init' component={Init} />
          <RootStack.Screen name='Home' component={TabNav}/>
          <RootStack.Screen name='Landing' component={Welcome} />
          <RootStack.Screen name='Login' component={Login} />
          <RootStack.Screen name='Signup' component={Signup} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
    
  )
};

export default rootStack;
