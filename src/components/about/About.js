import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos';

function About() {
    useEffect(() => {
        Aos.init({ duration: 1000});
      }, [])
  return (
    <Container id='About'>
        <div className='container'>
            <div className='row' data-aos='zoom-in'>
                <Title className='col-md-12'>
                    <div >
                        About Me
                    </div>
                </Title>
            </div>
            <div className='row my-5' data-aos='fade-down-right'>
                <Infor className='col-md-6 py-3'  >
                    <h1>Get To Know Me!</h1>
                    <h3>My name is Ngo Van Duc</h3>
                    <div>I started learning how to code in October 2021 and spent most of my day experimenting with HTML, CSS and JavaScript, React.
                        I enjoy coding and the challenge of learning something new everyday. My goal is to pursue a career in the field of front-end development.</div>
                </Infor>
                <Infor className='col-md-6 py-3'>
                    <h1>Education</h1>
                    <h3>2016 - 2020</h3>
                    <div>Electronics and Telecommunications Engineering Technology - Ha Noi University of Industry(HaUI)</div>
                </Infor>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    background-color: ${e => e.theme.body2};
    padding: 100px 0;
`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        font-size: 30px;
        font-weight: 500;
        letter-spacing: 3px;
        border-bottom: 2px solid #c8992d;
        color: ${e => e.theme.clr};
    }
`

const Infor = styled.div`
    h1 {
        color: ${e => e.theme.clr}
    }
    h3 {
        color: ${e => e.theme.clr2}
    }
    div{
        color: ${e => e.theme.clr2}
    }

`

export default About