import React from 'react';
import render, { act } from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  it('should render successfully', () => {
    const tree = render.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has 2 children', () => {
    const tree = render.create(<App />).toJSON() as any;
    expect(tree.children.length).toBe(2);
    expect(tree.children).toMatchSnapshot();

    // children[0] tests
    expect(tree.children[0].type).toEqual('View');
    expect(tree.children[0].children[0].type).toEqual('RNCWebView');

    // children[1] tests
    expect(tree.children[1].type).toEqual('View');
    expect(tree.children[1].children.length).toBe(2);
  });

  // onMessage test
//   it('has onMessage function', () => {
//     const pageHeading = [{top: 0}, {top: 100}, {top: 200}];
//     const component = render.create(<App pageHeading={pageHeading} />);
//     const instance = component.root;
//     const webview = (component.toJSON() as any).children[0].children[0];
//     act(() => {
//         if (webview && webview.props.onMessage) {
//           webview.props.onMessage({nativeEvent: {data: JSON.stringify(pageHeading)}});
//         }
//       });
//     expect(instance.props.pageHeading).toEqual(pageHeading);
//   });
});
