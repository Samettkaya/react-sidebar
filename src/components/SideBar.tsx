import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa' 
import "./SideBar.css"
import { SidebarData } from './SideBarData'

const Sidebar: React.FunctionComponent = () => {

    const [close, setClose] = useState(false)
    const showSidebar = () => setClose(!close)

    const Navbar = styled.div`
    overflow: hidden;
    background-color: #333;
    position: sticky;
    top: 0;
    width: 100%;
    height:56px
`

const MenuIconOpen = styled(Link)<{close: boolean}>`
display: ${({ close}) => close ? 'flex' : 'none'};
    justify-content: start;
    font-size: 1.5rem;
    margin-left: 2rem;
    margin-top:16px;
    color: #ffffff;
    width:24px;
`

const MenuIconClose = styled(Link)<{close: boolean}>`
    display: ${({ close}) => close ? 'none' : 'flex'};
    justify-content: start;
    font-size: 1.5rem;
    margin-left: 2rem;
    margin-top:16px;
    color: #ffffff;
    width:24px;
`

const SidebarMenu = styled.div<{close: boolean}>`
    width: ${({ close}) => close ? '250px' : '70px'};
    height: 100vh;
    background-color: red;
    position: fixed;
    boottom:0;
    transition: .4s;
    &:hover {
        width:250px
     
    }
`

const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;
`

const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    

   
`
const Icon =styled.div `
    
color:white
   
`
const Title =styled.div <{close: boolean}>`
    display:${({ close}) => close ? 'inline' : 'none'};
    color:white

}


   
`



    return (
        <>
           <Navbar>
           <MenuIconClose close={close} to="#" onClick={showSidebar}>
                    <FaIcons.FaTimes />
                </MenuIconClose>
                <MenuIconOpen close={close} to="#" onClick={showSidebar}>
                    <FaIcons.FaBars />
                </MenuIconOpen>
            </Navbar>

            <SidebarMenu className='sideBarMenu' close={close}>
                

                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems  key={index}>
                            <MenuItemLinks to={item.path}>
                                <Icon>
                                    {item.icon}
                                </Icon>
                                <Title className='title' close={close}>
                                    <span style={{marginLeft: '16px'}}>{item.title}</span>
                                </Title>
                                
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </SidebarMenu>
          
        </>
    )
}

export default Sidebar
