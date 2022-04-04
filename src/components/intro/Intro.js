import React from 'react'
import styled from 'styled-components'

function Intro() {
  return (
    <Container>
        <ContainerMD className='container'>
            <Row className='row'>
                <Information className='col-md-6 my-3'>
                    <h1>I'm A Frontend Web Developer</h1>
                    <h5>I Love Building Beautiful Web Experience</h5>
                    <Buttons>
                        <a href='#About' className='btn btn-outline-warning'>About Me</a>
                        <a href='#Projects' className='btn btn-outline-warning ms-2'>Projects</a>
                    </Buttons>
                    <IntroSocial>
                        <a href='https://twitter.com/VncNg76023707' target='_blank' rel="noreferrer" >
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href='https://www.facebook.com/tambiet.nhe.75054/' target='_blank' rel="noreferrer" className='ms-5'>
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/v%C4%83n-%C4%91%E1%BB%A9c-ng%C3%B4-a22164233/' target='_blank' rel="noreferrer" className='ms-5'>
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </IntroSocial>
                </Information>
                <Avatar className='col-md-6 my-3'>
                    <div></div>
                    <img  src='./image/avatar.jpg' alt='avatar' />
                </Avatar>
            </Row>
        </ContainerMD>
    </Container>
  )
}



const Container = styled.div`
    background-color: ${e => e.theme.body1};
    margin-top: 49px;
    padding: 120px 0;
`
const ContainerMD = styled.div `
    height: 100%;
`

const Row = styled.div`
    height: 100%;
`

const Information = styled.div`
    height: calc(100vh -70px);
    color: ${e => e.theme.clr};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h1 {
        margin-bottom: 20px;
    }
`

const Buttons = styled.div`
    margin: 20px 0;
`
const IntroSocial = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
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


const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
        height: 300px;
        width: 200px;
        border-radius: 10px;
    }
    div {
        position: absolute;
        border: 2px solid #c8992d; 
        height: 300px;
        width: 200px;
        border-radius: 10px;
    }

`


export default Intro