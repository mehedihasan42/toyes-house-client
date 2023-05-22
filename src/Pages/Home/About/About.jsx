import React from 'react';

const About = () => {
    return (
        <div className='my-20 bg-neutral lg:mx-4 rounded py-8'>
            <h2 className='font-bold lg:font-extrabold text-xl bg-slate-300 mx-auto w-32 rounded p-4'>About Us</h2>
            <p className='w-2/3 mx-auto bg-base-200 p-8 my-8 rounded'>We understand that every child is unique, which is why we value inclusivity and diversity in our
             toy selection. From classic toys that have stood the test of time to innovative and modern designs,
             we strive to provide options that cater to different interests, abilities, and learning styles. We
             want to be a reliable source for parents, caregivers, and educators to find toys that align with 
             their values and contribute to children's holistic development.</p>
             <img className='w-2/3 lg:w-1/3 h-96 mx-auto rounded' src="https://i.ibb.co/0mmfXrk/ddtcutyv.jpg" alt="" />
             <h2>commit</h2>
        </div>
    );
};

export default About;