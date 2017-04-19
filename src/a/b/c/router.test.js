import {history as hrt} from './../../../stores/Router'
import createRouterContext from 'react-router-test-context'
import { mount } from 'enzyme';
import React from 'react';
const context = createRouterContext({history: hrt});

it('pressing BtnsGroup.ActivityFlowBtns should change route to desired flow', async () => {
  const wrapper = mount(<Layout />, { context });

  const CreateContentBtn = wrapper.find('.Btn').at(1);
  CreateContentBtn.simulate('click');

  function assertCorrectPath(ev) {
    expect(ev.pathname).toEqual('/content'); //running `npm test` works well
  }
  await wrapper.context().router.history.subscribe(assertCorrectPath);
});