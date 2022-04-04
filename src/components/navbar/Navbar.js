import React, { useState } from 'react'
import styled from 'styled-components'

function Navbar(props) {
    const {themeToggle} = props;
    const [btnToggle, setBtnToggle] = useState(false)
    console.log(btnToggle)
  return (
    <Content>
        <nav className="navbar navbar-expand-lg navbar-light">
            {btnToggle && 
            <OverLay>
                <button onClick={() => setBtnToggle(!btnToggle)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <svg color='white' stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M11.9995 17.9583a1.137 1.137 0 01-1.137-1.136V7.2347a1.138 1.138 0 012.275 0v9.5896c0 .626-.51 1.134-1.138 1.134m7.4397 2.4398a1.137 1.137 0 01-1.14-1.1379V4.7958a1.138 1.138 0 012.276 0v14.4654c0 .627-.51 1.136-1.138 1.136M15.7193 24a1.137 1.137 0 01-1.138-1.136V1.138a1.138 1.138 0 012.276 0v21.726c0 .627-.509 1.136-1.138 1.136m-7.4366-3.1599a1.137 1.137 0 01-1.138-1.136V4.2979a1.138 1.138 0 012.276 0v15.4064c0 .628-.51 1.137-1.138 1.137m-3.7199-4.9889a1.137 1.137 0 01-1.138-1.135V9.2857a1.138 1.138 0 012.276 0v5.4318c0 .626-.51 1.135-1.138 1.135z"></path></svg>
                </button>
                <Title onClick={() => setBtnToggle(!btnToggle)} className="nav-link" aria-current="page" href="#">Home</Title>
                <Title onClick={() => setBtnToggle(!btnToggle)} className="nav-link" href="#About">About</Title>
                <Title onClick={() => setBtnToggle(!btnToggle)} className="nav-link" href="#Skills">Skills</Title>
                <Title onClick={() => setBtnToggle(!btnToggle)} className="nav-link" href='#Projects'>Projects</Title>
                <Title onClick={() => setBtnToggle(!btnToggle)} className="nav-link" href='#Contact'>Contact</Title>
            </OverLay>
            }
            <div className="container">
                <Name href="#">Ngo Van Duc</Name>
                <button onClick={() => setBtnToggle(!btnToggle)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <svg color='#c8992d' stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M11.9995 17.9583a1.137 1.137 0 01-1.137-1.136V7.2347a1.138 1.138 0 012.275 0v9.5896c0 .626-.51 1.134-1.138 1.134m7.4397 2.4398a1.137 1.137 0 01-1.14-1.1379V4.7958a1.138 1.138 0 012.276 0v14.4654c0 .627-.51 1.136-1.138 1.136M15.7193 24a1.137 1.137 0 01-1.138-1.136V1.138a1.138 1.138 0 012.276 0v21.726c0 .627-.509 1.136-1.138 1.136m-7.4366-3.1599a1.137 1.137 0 01-1.138-1.136V4.2979a1.138 1.138 0 012.276 0v15.4064c0 .628-.51 1.137-1.138 1.137m-3.7199-4.9889a1.137 1.137 0 01-1.138-1.135V9.2857a1.138 1.138 0 012.276 0v5.4318c0 .626-.51 1.135-1.138 1.135z"></path></svg>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <NavBarInfor>
                        <Title className="nav-link" aria-current="page" href="#">Home</Title>
                        <Title className="nav-link" href="#About">About</Title>
                        <Title className="nav-link" href="#Skills">Skills</Title>
                        <Title className="nav-link" href='#Projects'>Projects</Title>
                        <Title className="nav-link" href='#Contact'>Contact</Title>
                    </NavBarInfor>
                </div>
                <Switchbtn>
                    <input type="checkbox" id='switch' onClick={themeToggle}/>  
                    <div className="switch-color"></div>  
                    <label htmlFor='switch'></label>
                </Switchbtn>
            </div>
        </nav>
    </Content>
  )
}

const OverLay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${e => e.theme.body1};

    button {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        font-size: 40px;
        svg {
            color: ${e => e.theme.clr}

        }
    }

`

const Content = styled.nav`
    background-color: ${prop => prop.theme.body1};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    a {
        color: ${e => e.theme.clr};
    }
`

const Title = styled.a`
    display: flex;
    align-items: center;
    color: ${e => e.theme.clr};
    margin-right: 20px;
    text-decoration: none;
    letter-spacing: 3px;
`

const NavBarInfor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
`

const Name = styled.a`
    font-size: 20px;
    text-decoration: none;
    /* color: #c8992d;         */
`

const Switchbtn = styled.div`
    width: 50px;  
    height: 25px;  
    border-radius: 25px;  
    box-shadow: 5px 5px 15px 5px #cfd8dc;  
    position: relative;  
    margin-left: 20px;

    input {
        display: none;
        width: 100%;
    }
    div {
        width: 50px;  
        height: 25px;  
        left: 0;  
        top: 0;  
        background: #dc3545;  
        border-radius: 25px;  
        z-index: 0;  
        position: absolute;  
        transition: all 500ms cubic-bezier(0.34, 1.36, 0.2, 1);
        border: 1px solid black;
    }
    label {
        width: 25px;  
        height: 25px;  
        border-radius: 50%;  
        background: #6f42c1;  
        position: absolute;  
        top: 0;  
        left: 0px;  
        box-shadow: 2px 2px 10px 2px #cfd8dc;  
        z-index: 2;  
        cursor: pointer;  
        transition: all 1s cubic-bezier(0.34, 1.36, 0.2, 1);

        &::after {
            font-family: "Font Awesome 5 Free";
            font-weight: 600;  
            font-size: 18px;  
            content: "D";  
            position: absolute;  
            right: 6px;  
            top: 0px;  
            color: white;
        }
    }

    input:checked ~ label {
        transform: translatex(30px) rotatez(360deg);
    }

    input:checked ~ div {  
        background: #00e676;  
    }  

    

`

export default Navbar