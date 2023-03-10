/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Alert, Text, TouchableOpacity, View, Image } from 'react-native';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import {
    appThemeColor,
    blackcolor,
    commonstyles,
    Dark_graycolor,
    dot_color,
    graycolor,
    light_blue,
    line_color,
    medium_gray,
} from '../styles/commonstyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class HomeRasiphalaluItemTwo extends React.PureComponent {
    render() {
        let decode = require('html-entities-decoder');
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        this.props?.navigation.navigate('Details', {
                            item: this.props?.item,
                            detailsData: this.props?.propsdata,
                        });
                    }}>
                    {/* <View style={commonstyles.HomeComp2MainView}> */}
                    <View style={{
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        flex: 1,
                        margin: 5,
                        borderBottomColor: medium_gray,
                        borderBottomWidth: 1.5,
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{marginRight: 5, flexDirection: 'row' }}>
                            <Image
                                    source={require('../Assets/Images/weekly.jpeg')}
                                
                                    style={{ width: 120, height: 90, borderRadius:5,resizeMode:'contain'}}
                                />
                            </View>
                            <View style={{ flex: 2,alignItems:'center',marginVertical:20 }}>
                                <Text
                                    numberOfLines={2}
                                    ellipsizeMode="tail"
                                    style={{
                                        color: blackcolor,
                                        fontFamily: 'Mandali-Bold',
                                        fontSize: 18,
                                        lineHeight: 29,
                                        }}>ఈ వారం రాశి ఫలాలు {' '}({(this.props?.item?.horoscope_date)})
                                </Text>
                            </View>
                        </View>
                        {/* more text */}
                        <View style={{justifyContent:'flex-end',alignItems:'flex-end',alignSelf:'flex-end'}}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props?.navigation.navigate('రాశిఫలాలు‌');
                                }}>
                                <Text style={{
                                    fontFamily: 'RobotoCondensed-Regular',
                                    fontSize: 18, color: appThemeColor,
                                }}>More . . .</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    {/* </View> */}
                </TouchableOpacity>

            </View>
        );
    }
}
export default HomeRasiphalaluItemTwo;
