/**
 * Created by llitfkitfk on 2/10/17.
 */
import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from "react-native-router-flux";
import HomeView from "./containers/HomeView";
import SideMenu from "./components/drawer/SideMenu";
import AppEventEmitter from "./common/AppEventEmitter";
import Constants from "./common/Constants";
import MenuIcon from './images/menu_burger.png';

class Routes extends Component {


    componentDidMount() {
        this.appClick = AppEventEmitter.addListener(Constants.EmitCode.AppClick, () => {
            console.log('app click');
        });
    }

    componentWillUnmount() {
        this.appClick.remove();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" />
                <Router>
                    <Stack key="root">
                        <Drawer
                            hideNavBar
                            key="drawer"
                            contentComponent={SideMenu}>
                            <Scene hideNavBar>
                                <Scene key="home" component={HomeView} />
                                <Scene key="home1" component={HomeView} />
                            </Scene>

                        </Drawer>
                    </Stack>
                </Router>
            </View>
        )
    }
}

export default Routes;