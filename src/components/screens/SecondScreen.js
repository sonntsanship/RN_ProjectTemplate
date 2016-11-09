var _ = require('lodash')

//LIB
import React  from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  InteractionManager
} from 'react-native';

var {Actions} = require('react-native-router-flux');
import { connect } from 'react-redux';
var Spinner = require('react-native-spinkit');
//action

//components
var Define = require('../../Define');
var Debug = require('../../Util/Debug');
var Themes = require('../../Themes');
var Util = require('../../Util/Util');
var Include = require('../../Include');

var {popupActions} = require('../popups/Popup');
var {globalVariableManager}= require('../modules/GlobalVariableManager');

var ButtonWrap = require('../elements/ButtonWrap');

//screens
import Screen from './Screen'

// popups
var DefaultPopup = require('../popups/DefaultPopup');

// actions
var RDActions = require('../../actions/RDActions');
var RDActionsTypes = require('../../actions/RDActionsTypes');
//variable

// var styles = StyleSheet.create({
//
// })

//

class SecondScreen extends Screen{
  constructor(props){
    super(props);
    this.constructor.sceneConfig = _.merge(this.constructor.sceneConfig,
    {

    })
  }
  // static renderRightButton(scene){
  //   return (
  //     <View style={Themes.current.screen.rightButtonWrapNavBar}>
  //       <Include.Text>RightButton</Include.Text>
  //     </View>
  //   )
  // }
  // static renderLeftButton(scene){
  //   return (
  //     <View style={Themes.current.screen.leftButtonWrapNavBar}>
  //       <Include.Text>LeftButton</Include.Text>
  //     </View>
  //   )
  // }
  static renderTitle(scene){
    return(
      <View style={Themes.current.screen.titleWrapNavBarCenter}>
        <Include.Text style={Themes.current.text.navBartitle}>title</Include.Text>
      </View>
    )
  }

  onRefresh(){
    super.onRefresh();
    var {dispatch} = this.props;
    // dispatch(RDActions.AppState.setDirectOnRequest(RDActionsTypes.AppState.constants.APP_STATE_DIRECT_LIST['PORTRAIT']))
  }

  onGetMore(){
    super.onGetMore();
    var {dispatch} = this.props;
  }
  renderContent(){
    var {dispatch} = this.props;
    var content = null;
    content =(
      <ScrollView
          style={[Themes.current.screen.bodyView,this.props.bodyStyle]}
          removeClippedSubviews ={true}
          refreshControl ={
            <RefreshControl
              refreshing={false? true:false}
              onRefresh={this.onRefresh}
              colors={Themes.current.factor.refreshingColor}
              progressBackgroundColor={Themes.current.factor.refreshingBackgroudColor}/>
          }
          scrollEventThrottle={200}
          onScroll={(event)=>{
              if (event.nativeEvent.contentOffset.y > (event.nativeEvent.contentSize.height-event.nativeEvent.layoutMeasurement.height-Define.constants.getMoreHeight)) {
                // self.onGetMore();
              }
            }}>
        <Include.Text>SecondScreen</Include.Text>
      </ScrollView>
    )
    return content;
  }
  componentDidMount(){
    super.componentDidMount();
  }
}


/**
 * [selectActions description]
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
function selectActions(state) {
  return {
    appState: state.AppState,
    navigator: state.Navigator,
  }
}

module.exports=connect(selectActions, undefined, undefined, {withRef: true})(SecondScreen);
// export default SecondScreen