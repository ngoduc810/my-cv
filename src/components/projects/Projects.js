import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000});
  }, [])
  return (
    <Container id='Projects'>
      <div className='container'>
        <div className='row' data-aos= 'zoom-in'>
          <Title className='col-12'>
              <div>
                  Projects
              </div>
          </Title>
        </div>
        <div className='row' data-aos='flip-left'>
          <ProjectsImg1 className='col-lg-6 my-2'>
            <img src='./image/project1.PNG' alt='project1' />
          </ProjectsImg1>
          <ProjectInfor className='col-lg-6 my-2'>
            <h2>COLECTION E-COMMERCE</h2>
            <h4>An E-commerce website to sell luxury item. This project was built using React, Html & Css, JavaScript, Bootstrap, Firebase</h4>
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
              <div>Firebase</div>
            </SkillProject>
            <SkillProject>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="text-projecs-arrow w-5 mr-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              <div>JavaScript</div>
            </SkillProject>
            <SkillProject>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="text-projecs-arrow w-5 mr-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              <div>Context API</div>
            </SkillProject>
            <Buttons>
              <a className='btn btn-outline-warning' href='https://project-app-31ffb.web.app/' target='_blank' rel='noreferrer'>View Website</a>
              <a className='btn btn-outline-warning ms-3' href='https://github.com/ngoduc810/project-col.git' target='_blank' rel='noreferrer'>View Source</a>
            </Buttons>
          </ProjectInfor>
        </div>
        <div className='row' data-aos='flip-right'>
          <Project2 />
        </div>
        <div className='row' data-aos='fade-up-right'>
          <Project3 />
        </div>
        <div className='row' data-aos='fade-down-left'>
          <Project4 />

        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  padding: 50px 0;
  background-color: ${e => e.theme.body2};
`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;

    div {
        font-size: 30px;
        font-weight: 500;
        letter-spacing: 3px;
        border-bottom: 2px solid #c8992d;
        color: ${e => e.theme.clr};
    }
`
const ProjectInfor = styled.div `
  color: ${e => e.theme.clr};
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

export default Projects