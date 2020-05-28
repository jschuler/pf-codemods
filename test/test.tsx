import { Title, Title as MyTitle } from '@patternfly/react-core';

export const Thing1 = () => <MyTitle size="md">Title</MyTitle>;
export const Thing2 = () => <Title size="md">Title</Title>;

import { List, ListVariant } from '@patternfly/react-core';

export const MyList = (
  <List variant={ListVariant.plain} />
)

import { Button, ButtonVariant as MyButtonVaraitn } from '@patternfly/react-core';

export const MyButton = (
  <Button variant={MyButtonVaraitn.plain} />
)

enum MyPfEnums {
  plain = 'plain',
  primary = 'primary'
}

export const MyButtonWithCustomEnum = (
  <Button variant={MyPfEnums.plain} />
)

import { Tab, TitleSize } from '@patternfly/react-core';
const tabText = <TabTitleText>After</TabTitleText>;
const TabTextComp = () => <TabTitleText>After</TabTitleText>;
export const TestTab = <Tab title="hello">Content</Tab>;
export const TestTab2 = <Tab title={<TabTitleText>hello</TabTitleText>}>Content</Tab>;
export const TestTab3 = <Tab title={'hello'}>Content</Tab>;
export const TestTab3a = <Tab title={5}>Content</Tab>;
export const TestTab4 = <Tab title={tabText}>Content</Tab>;
export const TestTab5 = <Tab title={<TabTextComp />}>Content</Tab>;
export const TestTab6 = <Tab title={<div>hello</div>}>Content</Tab>;

import { Wizard } from '@patternfly/react-core'; 
// should change to hasNoBodyPadding
export const WizA = <Wizard hasBodyPadding={ false } /> // hasNoBodyPadding = true
// should remove the prop since hasNoBodyPadding defaults to false
export const WizB = <Wizard hasBodyPadding /> // hasNoBodyPadding = false
export const WizC = <Wizard hasBodyPadding={ true } /> // hasNoBodyPadding = false