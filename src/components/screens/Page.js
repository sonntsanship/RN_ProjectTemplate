
var _ = require('lodash')
//LIB
import React  from 'react';
import {
  View,
  InteractionManager
} from 'react-native';


// import { connect } from 'react-redux';
var Spinner = require('react-native-spinkit');
//action

//components
// var Define = require('../../Define');
var Debug = require('../../Util/Debug');
var Themes = require('../../Themes');
// var Util = require('../../Util/Util');
// var Include = require('../../Include');

import ReactComponent from '../ReactComponent'

// var {popupActions} = require('../popups/PopupManager');
// var {globalVariableManager}= require('../modules/GlobalVariableManager');

export default class Page extends ReactComponent{
  static componentName = 'UnNamedPage'
  // static defaultProps = {}
  // static propTypes = {}
  constructor(props){
    super(props);
    this.state={
      loading:true,
    }
  }
  onRefresh(){
    Debug.log(this.constructor.componentName + ':onRefresh',Debug.level.USER_TRACKER);
  }
  onGetMore(){
    Debug.log(this.constructor.componentName + ':onGetMore',Debug.level.USER_TRACKER);
  }
  shouldComponentUpdate(){
    let ret = true;
    Debug.log(this.constructor.componentName + ':shouldComponentUpdate:'+ret);
    return ret;
  }
  renderPageContent(){} // implement by child
  renderContent(){
    var content = null;
    if (this.state.loading) {
      content=(
        <View
            pointerEvents={'auto'}
            style={[Themes.current.screen.bodyView,this.props.bodyStyle]}>
          <Spinner type={'Wave'} color={Themes.current.factor.spinnerColor} />
        </View>
      ) ;
    }
    else{
      if (_.isFunction(this.renderPageContent) ) {
        content = this.renderPageContent();
      }else{
        Debug.log(this.constructor.componentName+':no renderPageContent',Debug.level.ERROR)
        content = null;
      }
    }
    return(content)
  }
  componentDidMount(){
    super.componentDidMount()
    InteractionManager.runAfterInteractions(() => {
      this.setState({loading:false});
      this.onRefresh();
    });
  }
}
