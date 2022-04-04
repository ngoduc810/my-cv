import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'

function Project4() {
    useEffect(() => {
        Aos.init({ duration: 1000});
      }, [])
  return (
    <Container className='row'>
        <ProjectInfor className='col-lg-4'>
            <h2>PHOTO ADD</h2>
            <h4>An website to add picture photo. This project was built using React, Html & Css, JavaScript</h4>
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
                <div>Redux-toolkit</div>
            </SkillProject>
            <SkillProject>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="text-projecs-arrow w-5 mr-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                <div>JavaScript</div>
            </SkillProject>
            <Buttons>
                <a className='btn btn-outline-warning' href='https://photo-app-30899.web.app/photo' target='_blank' rel='noreferrer'>View Website</a>
                <a className='btn btn-outline-warning ms-3' href='https://github.com/ngoduc810/photoapp.git' target='_blank' rel='noreferrer'>View Source</a>
            </Buttons>
        </ProjectInfor>
        <ProjectsImg1 className='col-lg-8'>
            <img src='./image/project4.PNG' alt='project1' />
        </ProjectsImg1>
    </Container>
  )
}

const Container = styled.div`
    margin: 50px 0;
    padding: 50px 0;
    border-top: 5px dotted ${e => e.theme.clr};
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

export default Project4