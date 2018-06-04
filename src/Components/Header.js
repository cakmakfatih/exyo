import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

import Logo from './../Assets/logo.png';

class Header extends React.Component {
    state = {
        toggleMenu:false,
        modal:false
    };
    render(){
        let { navMinified, from } = this.props;
        let { toggleMenu } = this.state;
        return (
            <header className="app-header-container" style={ navMinified === true ? { maxHeight:70 } : { maxHeight:130 }}>
                <div className="app-header" >
                    <img src={Logo} alt="logo" style={ navMinified === true ? {maxHeight:60} : {maxHeight:100} } />
                    <i className={"fas fa-bars side-menu"} onClick={() => this.setState({modal:!this.state.modal})} />
                    <div className={"modal-header"} style={this.state.modal === true ? {display:'flex'} : {display:'none'}}>
                        <aside className={"sidenav"}>
                            <nav>
                                <NavLink to={'/'} className="link-default" activeClassName={"active"} exact>EXYO</NavLink>
                                <NavLink to={'/kumbara/erasmus'} className="link-default" activeClassName={"active"} exact>Erasmus</NavLink>
                                <NavLink to={'/kumbara/agh'} className="link-default" activeClassName={"active"} exact>AGH</NavLink>
                                <NavLink to={'/kumbara/akademik-kariyer'} className="link-default" activeClassName={"active"} exact>Akademik Kariyer Yolunda</NavLink>
                                <NavLink to={'/kumbara/interrail'} className="link-default" activeClassName={"active"} exact>Interrail</NavLink>
                                <NavLink to={'/kumbara/dogu-ekspresi'} className="link-default" activeClassName={"active"} exact>Doğu Ekspresi</NavLink>
                                <NavLink to={'/kumbara/wwoof'} className="link-default" activeClassName={"active"} exact>WWOOF</NavLink>
                                <NavLink to={'/announcements'} className="link-default" activeClassName={"active"} exact>Duyurular</NavLink>
                                <NavLink to={'/contact-us'} className="link-default" activeClassName={"active"} exact>İletişim</NavLink>
                            </nav>
                        </aside>
                    </div>
                    <nav className="app-navbar">
                        <NavLink to={'/'} className="link-default" activeClassName={"active"} exact>EXYO</NavLink>
                        <div className={"menu-cont"}>
                            <NavLink to={'/kumbara'} onMouseOut={() => this.setState({toggleMenu:!this.state.toggleMenu})} onMouseOver={() => this.setState({toggleMenu:!this.state.toggleMenu})} className="link-default" activeClassName={"active"}>Kumbara</NavLink>
                            <div className={"menu"} onMouseOut={() => this.setState({toggleMenu:false})} onMouseOver={() => this.setState({toggleMenu:true})} style={toggleMenu === true ? { display: 'flex'} : {display: 'none'}}>
                                <NavLink to={'/kumbara/erasmus'} className="link-default-small" activeClassName={"active"} exact>Erasmus</NavLink>

                                <NavLink to={'/kumbara/work-and-travel'} className="link-default-small" activeClassName={"active"} onMouseOut={() => this.setState({toggleMenu:!this.state.toggleMenu})} exact>Work and Travel</NavLink>
                                <NavLink to={'/kumbara/agh'} className="link-default-small" activeClassName={"active"} exact>AGH</NavLink>
                                <NavLink to={'/kumbara/akademik-kariyer'} className="link-default-small" activeClassName={"active"} exact>Akademik Kariyer Yolunda</NavLink>
                                <NavLink to={'/kumbara/interrail'} className="link-default-small" activeClassName={"active"} exact>Interrail</NavLink>
                                <NavLink to={'/kumbara/dogu-ekspresi'} className="link-default-small" activeClassName={"active"} exact>Doğu Ekspresi</NavLink>
                                <NavLink to={'/kumbara/wwoof'} className="link-default-small" activeClassName={"active"} exact>WWOOF</NavLink>


                            </div>
                        </div>
                        <NavLink to={'/announcements'} className="link-default" activeClassName={"active"} exact>Duyurular</NavLink>
                        <NavLink to={'/contact-us'} className="link-default" activeClassName={"active"} exact>İletişim</NavLink>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
