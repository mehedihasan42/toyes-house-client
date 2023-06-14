import React from 'react';

const About = () => {
    return (
        <div className='my-20 bg-base-200 lg:mx-4 rounded py-8'>
            <h2 className='font-bold lg:font-extrabold text-xl bg-slate-300 mx-auto w-32 rounded p-4'>About Us</h2>
            <p className='lg:w-2/3 mx-auto bg-base-200 p-8 my-8 rounded'>We understand that every child is unique, which is why we value inclusivity and diversity in our
             toy selection. From classic toys that have stood the test of time to innovative and modern designs,
             we strive to provide options that cater to different interests, abilities, and learning styles. We
             want to be a reliable source for parents, caregivers, and educators to find toys that align with 
             their values and contribute to children's holistic development.</p>
             <img className='w-full h-64 lg:w-1/3 lg:h-96 lg:mx-auto rounded' src="https://media.istockphoto.com/id/1193569086/photo/plastic-zoo-animal-toys.jpg?s=2048x2048&w=is&k=20&c=-HkZMS2_upB6krv5tgA-gKU1wmQU7qLSbcTJAf4OMnU=" alt="" />
        </div>
    );
};

export default About;