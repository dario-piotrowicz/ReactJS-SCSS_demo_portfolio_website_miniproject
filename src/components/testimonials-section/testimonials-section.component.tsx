import React, { FunctionComponent } from 'react';
import './testimonials-section.styles.scss';

interface TestimonialPerson {
  imgSrc: string;
  name: string;
  location: string;
}

interface TestimonialBoxParams {
  text: string;
  person: TestimonialPerson;
}

const TestimonialBox: FunctionComponent<TestimonialBoxParams> = ({
  text,
  person,
}) => {
  return (
    <div className="testimonial-box">
      <p className="testimonial-text">{text}</p>
      <div className="person-container">
        <img src={person.imgSrc} alt={person.name} />
        <p>
          {person.name}, {person.location}
        </p>
      </div>
    </div>
  );
};

const testimonials: TestimonialBoxParams[] = [
  {
    text: `
    Wow this demo project is really cool and well made, I would be shocked to hear that a single
    developer did it!
    `,
    person: {
      imgSrc: 'images/testimonials/person1.jpg',
      name: 'Beard Guy',
      location: 'Somewhere',
    },
  },
  {
    text: `
    I Like the Demo Portfolio because it has been implemented using React and Typescript, that's pretty cool.
    `,
    person: {
      imgSrc: 'images/testimonials/person2.jpg',
      name: 'Girl',
      location: 'Somewhere else',
    },
  },
  {
    text: `
    This website is ok I guess.
    `,
    person: {
      imgSrc: 'images/testimonials/person3.jpg',
      name: 'John',
      location: 'In a City',
    },
  },
  {
    text: `
    I am not sure but I get a feeling that the webpack/babel setup for this react project has been set manually.
    `,
    person: {
      imgSrc: 'images/testimonials/person4.jpg',
      name: 'Beanie Girl',
      location: 'In another City',
    },
  },
];

const TestimonialsSection: FunctionComponent = () => {
  return (
    <section id="testimonials">
      <div className="centering-container">
        <h2>Testimonials</h2>
        <div className="bottom-line" />
        <p className="text-intro">
          Take a look at what my (totally real) clients say...
        </p>
        <div className="content">
          {testimonials.map((t, idx) => (
            <TestimonialBox key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
