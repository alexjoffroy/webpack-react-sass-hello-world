import React from 'react';
import { findDOMNode } from 'react-dom';
import { renderIntoDocument } from 'react-addons-test-utils';

const component = '../src/HelloWorld.js';
jest.unmock(component);

const HelloWorld = require(component);

console.log(HelloWorld);

describe('HelloWorld', () => {
  
  it('should render a "section"', () => {

    const instance = renderIntoDocument(
      <HelloWorld />
    );
    expect( findDOMNode(instance).nodeName ).toEqual( 'SECTION' );

  });

  it('should have the "HelloWorld" class', () => {

    const instance = renderIntoDocument(
      <HelloWorld />
    );
    expect( findDOMNode(instance).className ).toContain( 'HelloWorld' );

  });

});