import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'

function Project2() {
    useEffect(() => {
        Aos.init({ duration: 1000});
      }, [])
  return (
    <Container className='row'>
        <ProjectInfor className='col-lg-6'>
            <h2>BAKERY E-COMMERCE</h2>
            <h4>An E-commerce website to sell luxury item. This project was built using React, Html & Css, JavaScript, Bootstrap</h4>
            <SkillProject>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="text-projecs-arrow w-5 mr-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                <div>HTML & CSS</div>
            </SkillProject>
            <SkillProject>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="text-projecs-arrow w-5 mr-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                <div>ReactJS</div>
            </SkillProject>
            <SkillProject>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="text-projecs-arrow w-5 mr-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                <div>Redux</div>
            </SkillProject>
            <SkillProject>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="text-projecs-arrow w-5 mr-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                <div>JavaScript</div>
            </SkillProject>
            <Buttons>
                <a className='btn btn-outline-warning' href='https://bakery33-4352b.web.app/' target='_blank' rel='noreferrer'>View Website</a>
                <a className='btn btn-outline-warning ms-3' href='https://github.com/ngoduc810/bakeryshop.git' target='_blank' rel='noreferrer'>View Source</a>
            </Buttons>
        </ProjectInfor>
        <ProjectsImg1 className='col-lg-6'>
            <img src='./image/project2.PNG' alt='project1' />
        </ProjectsImg1>
    </Container>
  )
}

const Container = styled.div`
    border-top: 5px dotted ${e => e.theme.clr};
    padding: 50px 0;
    margin: 50px 0;
`
const ProjectInfor = styled.div`
    color: ${e => e.theme.clr2};
`

const ProjectsImg1 = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`
const SkillProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;
  svg {
    width: 20px;
    height: 20px;
  }
  div {
    margin-left: 10px;
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 30px 0;
`

export default Project2