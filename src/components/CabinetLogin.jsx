import React, { Component }  from 'react';
import { connect } from 'react-redux';

import { history } from '../redux';
import { alertActions } from '../redux/actions';
import { CabinetPage } from '../pages/CabinetPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';


class CabinetLogin extends React.Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    _handleTabChange(index) {
        // console.log('Selected tab index', index);
    }

    render() {
        const { alert, closePopUp } = this.props;

        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-12">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                            { localStorage.getItem('user') ? 
                                <CabinetPage closePopUp={closePopUp} /> 
                              : 
                                <ModalTabs />
                            }  
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const ModalTabs = () => (
    <div className="modalTabs">
        <Tabs selected={ 0 }>
            <TabList>
                <Tab>
                    <Button>Login</Button>
                </Tab>
                <Tab>
                    <Button>Register</Button>
                </Tab>
            </TabList>

            <TabPanel>
                <LoginPage />
            </TabPanel>

            <TabPanel>
                <RegisterPage />
            </TabPanel>
        </Tabs>
    </div>
)

class Tabs extends Component {
    state = { selected: this.props.selected };

    setSelected(selected) {
            if (selected !== this.state.selected) {
            this.setState({ selected })
        }
    }
  
    handleClick(tab) {
        return () => this.setSelected(tab)
    }
  
    renderTabList(child) {
        let tab = 0

        return React.cloneElement(child, {
            children: React.Children.map(child.props.children, (childTab) => {
            if (childTab.type.name === "Tab") {
                const _isActive = (tab === this.state.selected)
                const _onClick = this.handleClick(tab)
                tab++
                return React.cloneElement(childTab, { _isActive, _onClick })
            }
                return childTab
            }),
        })
    }
  
    renderChildren(children) {
        let panel = 0

        return React.Children.map(children, (child) => {
            if (child.type.name === "TabList") {
                return this.renderTabList(child)
            }

            if (child.type.name === "TabPanel") {
                const _isActive = (panel === this.state.selected)
                panel++
                return React.cloneElement(child, { _isActive })
            }
            return child
        })
    }
  
    render() {
        return (
            <div className="Tabs">
                { this.renderChildren(this.props.children) }
            </div>
        )
    }
}
  
const TabList = ({ children }) => (
    <ul className="TabList">
        { children }
    </ul>
)

const Tab = ({
    _onClick,
    _isActive,
    children,
    }) => (
        <li
            className={ `Tab  ${ _isActive ? "is-active" : "" }` }
            onClick={ _onClick }>
                { children }
        </li>
)
  
const TabPanel = ({
    _isActive,
    children,
    }) => (
        <div className={ `TabPanel  ${ _isActive ? "is-active" : "" }` }>
            { children }
        </div>
)

  
const Button = ({ children }) => (
    <button className="Button">
        { children }
    </button>
)


const connectedApp = connect(mapState, actionCreators)(CabinetLogin);
export { connectedApp as CabinetLogin };