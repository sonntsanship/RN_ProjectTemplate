
import React, { Component } from 'react';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  InteractionManager
} = require('react-native');

var Spinner = require('react-native-spinkit');
//Component
var { Actions} = require('react-native-router-flux');

var Debug = require('../../Util/Debug');
var Themes = require('../../Themes');
var Include = require('../../Include');
var Define = require('../../Define');

//  var SCTVScrollableTabBarContainer = require('./SCTVScrollableTabBarContainer');
//
// var SCTVNotifyButton = require('../elements/SCTVNotifyButton');
var ButtonWrap = require('../elements/ButtonWrap');
// Actions
// var NewsActions_MiddleWare = require('../../actions/NewsActions_MiddleWare');
// var UserActions_MiddleWare = require('../../actions/UserActions_MiddleWare');

//
var  HomeScreen = React.createClass({
  propTypes: {
    style:React.PropTypes.any,
  },

  getDefaultProps: function() {
    return {
    };
  },

  statics:{
    nameScreen:'HomeScreen',
    sceneConfig:{
      hideNavBar:true,
    },
    // renderNavigationBar:function(){
    //   return (
    //       <View style={{left:50,width:5,height:100,backgroundColor:'#555'}}/>
    //   //     // <SCTVNotifyButton/>
    //     );
    // },
    renderRightButton: function(){
      return (
        <View style={Themes.Current.screen.rightButtonWrapNavBar}>
          <Include.Text>Test</Include.Text>
        </View>
        // <SCTVNotifyButton/>
      );
    },

    renderLeftButton: function(scene){
      return (
        <ButtonWrap onPress={()=>{Actions.SecondScreen()}}>
          <View style={Themes.Current.screen.leftButtonWrapNavBar}>
            <Include.Image style={{width:20,height:20 }} source={Define.assets.Home_screen.home_icon_menu}/>
          </View>
        </ButtonWrap>
      );
    },

    renderTitle:function(scene){
      return(
        <View style={Themes.Current.screen.titleWrapNavBarCenter}>
          <Include.Text style={Themes.Current.text.navBartitle}>{scene.title}</Include.Text>
        </View>
      )
    }
  },

  componentWillMount:function(){
    var self = this;
    var {dispatch,} = self.props;
    // dispatch(UserActions_MiddleWare.getVipList());
  },

  render:function(){
    var self = this;
    // <SCTVNavigatorTabBar/>
    return(
      <View style={[Themes.Current.screen.bodyView,self.bodyStyle]}>
        <ButtonWrap onPress={()=>{Actions.SecondScreen({abs:"abs"});}}>
          <Spinner type={'Bounce'} color={'black'} style={{height: 50,width:50}} />
        </ButtonWrap>
      </View>
    )
  }
});

var styles = StyleSheet.create({

})


module.exports = (HomeScreen);
