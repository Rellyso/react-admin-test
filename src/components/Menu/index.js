import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { DashboardMenuItem, MenuItemLink, getResources } from 'react-admin';

// icons
import DefaultIcon from '@material-ui/icons/ViewList';
import WebIcon from '@material-ui/icons/Web';

const Menu = ({ onMenuClick, logout }) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);
    return (
        <>
            <DashboardMenuItem 
                onClick={onMenuClick} 
                sidebarIsOpen={open} 
                style={{
                    height: '60px',
                    fontWeight: 'normal',
                    transition: 'all .4s ease'
                }}
                activeStyle={{
                    backgroundColor: '#eee',
                    fontWeight: 'bold',
                }}
                leftIcon={}
            />
            
            {resources.map(resource => (
                <MenuItemLink
                    style={{
                        height: '60px',
                        fontWeight: 'normal',
                        transition: 'all .4s ease'
                    }}
                    activeStyle={{
                        backgroundColor: '#eee',
                        fontWeight: 'bold',
                    }}
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={
                        (resource.options && resource.options.label) ||
                        resource.name
                    }
                    leftIcon={
                        resource.icon ? <resource.icon /> : <DefaultIcon />
                    }
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                />
            ))}

            <MenuItemLink
                style={{
                    height: '60px',
                    backgroundColor: '#ccdbfd'
                }}
                activeStyle={{
                    backgroundColor: '#eee'
                }}
                to="/"
                primaryText="Visitar website"
                leftIcon={<WebIcon color="primary" />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />

            {isXSmall && logout}
        </>
    );
};

export default Menu;