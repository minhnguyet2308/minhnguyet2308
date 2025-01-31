import TabNavigator from "@/app/navigators";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SigninScreen from "./(tabs)/(auth)/signin";
import SignupScreen from "./(tabs)/(auth)/signup";
import ReaderService from "./(tabs)/(service)/readerService";
import ReaderDetailService from "./(tabs)/(service)/readerDetailService";
import ReaderNav from "@/app/navigators/readerNav";
import { useAuth } from "@/context/authContext";
import ShopDetail from "./(tabs)/(shop)/shopDetail";
import Cart from "./(cart)/cart";
import { CartProvider } from "@/context/CartContext";
import OrderConfirmation from "./(cart)/orderConfirmation";
import PaymentScreen from "./(cart)/payment";
import PaymentResultScreen from "./(cart)/paymentresult";
import ReaderServiceBooking from "./(tabs)/(service)/readerServiceBooking";
import ServiceConfirmation from "./(tabs)/(service)/serviceConfirmation";
import ServiceResultScreen from "./(tabs)/(service)/serviceResult";

const Stack = createStackNavigator();
const App = () => {
  const { isAuthenticated, user } = useAuth();
  return (
    <CartProvider>
      <Stack.Navigator
        initialRouteName={
          isAuthenticated && user?.role === "Customer"
            ? "TabNavigator"
            : isAuthenticated
            ? "ReaderNav"
            : "signin"
        }
      >
        <Stack.Screen
          name="signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signin"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReaderService"
          component={ReaderService}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReaderDetailService"
          component={ReaderDetailService}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReaderNav"
          component={ReaderNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShopDetail"
          component={ShopDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderConfirmation"
          component={OrderConfirmation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentResult"
          component={PaymentResultScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReaderServiceBooking"
          component={ReaderServiceBooking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ServiceConfirmation"
          component={ServiceConfirmation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ServiceResult"
          component={ServiceResultScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </CartProvider>
  );
};

export default App;
