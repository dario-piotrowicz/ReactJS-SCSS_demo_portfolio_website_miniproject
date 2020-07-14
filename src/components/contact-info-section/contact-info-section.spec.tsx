import React from 'react';
import { mount } from 'enzyme';
import ContactInfoSection from './contact-info-section.component';

describe('contact-info section component', () => {
  it('should match its snapshot', () => {
    expect(mount(<ContactInfoSection />)).toMatchSnapshot();
  });
});
