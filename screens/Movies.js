import React from "react";
import {Text, TouchableOpacity} from "react-native";
export default ({navigation}) => (
<>
    <Text>Movies</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Go to Details Go to Details Go to Details Go to Details Go to Details Go to Details Go to Details Go to Details Go to Details Go to Details Go to Details Go to Details Go to Details </Text>
    </TouchableOpacity>
</>
);