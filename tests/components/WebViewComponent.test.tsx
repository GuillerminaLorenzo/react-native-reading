import React from 'react';
import render, { act } from 'react-test-renderer';
import WebViewComponent from '../../components/WebViewComponent';
import { WebView } from 'react-native-webview';

describe('WebViewComponent', () => {
  const source = {
    html: '<h1>Test Heading</h1>',
  };

  it('renders a WebView component', () => {
    const setPageHeading = jest.fn();
    const webviewRef = { current: null };

    const tree = render.create(
      <WebViewComponent source={source} setPageHeading={setPageHeading} webviewRef={webviewRef} />,
    );

    expect(tree.root.findByType(WebView)).toBeTruthy();
  });

  it('calls setPageHeading when receiving a message', () => {
    const setPageHeading = jest.fn();
    const webviewRef = { current: null };

    const tree = render.create(
      <WebViewComponent source={source} setPageHeading={setPageHeading} webviewRef={webviewRef} />,
    );

    act(() => {
      tree.root.findByType(WebView).props.onMessage({ nativeEvent: { data: '[{"top": 0}]' } });
    });

    expect(setPageHeading).toHaveBeenCalledWith([{ top: 0 }]);
  });
});

