import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
        <div className='container'>
            <Social>
                <a href='https://twitter.com/VncNg76023707' target='_blank' rel="noreferrer" >
                    <i className="fa fa-twitter"></i>
                </a>
                <a href='https://www.facebook.com/tambiet.nhe.75054/' target='_blank' rel="noreferrer" className='ms-5'>
                    <i className="fa fa-facebook"></i>
                </a>
                <a href='https://www.linkedin.com/in/v%C4%83n-%C4%91%E1%BB%A9c-ng%C3%B4-a22164233/' target='_blank' rel="noreferrer" className='ms-5'>
                    <i className="fa fa-linkedin"></i>
                </a>
            </Social>
            <Copyright>
                <div>Copyright © 2022 All Rights Reserved.</div>
            </Copyright>
        </div>
    </Container>
  )
}
const Container = styled.div`
    background-color: ${e => e.theme.body2};
    padding: 20px 0;
`
const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        font-size: 30px;
        color: ${e => e.theme.clr};
        transition: all 0.3s ease;
        &:hover {
            color: #c8992d;
            transform: scale(1.2)
        }
    }
`
const Copyright = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    color: ${e => e.theme.clr};
`

export default Footer