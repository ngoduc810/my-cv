import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Aos from 'aos';
import emailjs from 'emailjs-com'

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e)

        emailjs.sendForm('service_pxopszh', 'template_8r9t7ge', form.current, 'Yc3Sf4KfnGWwHbzC2')
        .then(result => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        }
        )
        alert('Email Send!')
    }
    useEffect(() => {
        Aos.init({ duration: 1000});
      }, [])
  return (
      
    <Container id='Contact'>
        <div className='container'  data-aos='fade-left'>
                <Title className='col-12'>
                    <div>
                        Contact
                    </div>
                </Title>
                <div className='row'>
                    <div className='col-md-6'>
                        <Infor>Contact Info</Infor>
                        <ContactInfor>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.696 14.943c-4.103 4.103-11.433 2.794-11.433 2.794S4.94 10.421 9.057 6.304c2.281-2.281 6.061-2.187 8.45.189s2.471 6.168.189 8.45zm-4.319-7.91l-1.174 2.416-2.416 1.174 2.416 1.174 1.174 2.416 1.174-2.416 2.416-1.174-2.416-1.174-1.174-2.416z"></path></svg>
                            <div>Address: Bac Ninh, Viet Nam</div>
                        </ContactInfor>
                        <ContactInfor>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"></path></svg>
                            <div>Phone: 0339773774</div>
                        </ContactInfor>
                        <ContactInfor>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path></svg>
                            <div>Email: ngovanduc810@gmail.com</div>
                        </ContactInfor>
                    </div>
                    <div className='col-md-6'>
                        <Infor>Contact Form</Infor>
                        <FromContact ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input placeholder='Your name ...' type='text' name='user_name'></input>
                            <label>Email</label>
                            <input placeholder='Your email ...' type='email' name='user_email'></input>
                            <label>Message</label>
                            <textarea placeholder='Your message ...' name='message'></textarea>
                            <button className='btn btn-outline-primary' type='submit' name='submit'>Send</button>
                        </FromContact>
                    </div>
                </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    background-color: ${e => e.theme.body1};
    padding: 50px 0;
`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    div {
        font-size: 30px;
        font-weight: 500;
        letter-spacing: 3px;
        border-bottom: 2px solid #c8992d;
        color: ${e => e.theme.clr};
    }
`
const Infor = styled.h3`
    color: ${e => e.theme.clr};
`

const ContactInfor = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 30px 0;

    svg {
        height: 20px;
        width: 20px;
        color: ${e => e.theme.clr};

    }
    div {
        color: ${e => e.theme.clr};
        margin-left: 10px;
    }
`
const FromContact = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    label {
        margin: 10px 0;
        color: ${e => e.theme.clr}
    }
    input {
        width: 80%;
        height: 30px;
        padding-left: 10px;
        outline: none;
        border-radius: 4px;
        border: 1px solid ${e => e.theme.clr}
    }
    textarea {
        width: 80%;
        height: 150px;
        padding-left: 10px;
        outline: none;
        border-radius: 4px;
        border: 1px solid ${e => e.theme.clr}
    }

    button {
        margin: 20px 0;
    }

`

export default Contact