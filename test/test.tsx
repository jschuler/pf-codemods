import { Title, Title as MyTitle, TabTitleText } from '@patternfly/react-core';

export const Thing1 = () => <MyTitle headingLevel="h2" size="md">Title</MyTitle>;
export const Thing2 = () => <Title headingLevel="h2" size="md">Title</Title>;

import { List, ListVariant, TabTitleText } from '@patternfly/react-core';

export const MyList = (
  <List variant={ListVariant.plain} />
)

import { Button, ButtonVariant as MyButtonVaraitn, TabTitleText } from '@patternfly/react-core';

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

import { Tab, TabTitleText } from '@patternfly/react-core';
const tabText = <TabTitleText>After</TabTitleText>;
const TabTextComp = () => <TabTitleText>After</TabTitleText>;
export const TestTab = <Tab title={<TabTitleText>hello</TabTitleText>}>Content</Tab>;
export const TestTab2 = <Tab title={<TabTitleText>hello</TabTitleText>}>Content</Tab>;
export const TestTab3 = <Tab title={<TabTitleText>hello</TabTitleText>}>Content</Tab>;
export const TestTab3a = <Tab title={<TabTitleText>5</TabTitleText>}>Content</Tab>;
export const TestTab4 = <Tab title={<TabTitleText>{tabText}</TabTitleText>}>Content</Tab>;
export const TestTab5 = <Tab title={<TabTitleText><TabTextComp /></TabTitleText>}>Content</Tab>;
export const TestTab6 = <Tab title={<TabTitleText><div>hello</div></TabTitleText>}>Content</Tab>;

import { Table, cellWidth } from "@patternfly/react-table";
export const TableA = <Table cells={[{ transforms: [cellWidth(100)] }]}></Table>;
/*
import { Table, cellWidth } from "@patternfly/react-table";
        <Table cells={[{ transforms: [cellWidth(100)] }]}></Table>
*/

import { Table, cellWidth, cellHeightAuto } from '@patternfly/react-table';
export const TableB = <Table cells={[{ transforms: [ cellWidth(100)  ] }]}></Table>
export const TableBB = <Table cells={[{ transforms: [  cellWidth(100) ] }]}></Table>
export const TableC = <Table cells={[{ transforms: [  ] }]}></Table>
/*
import { Table, TableHeader, TableBody, cellWidth, cellHeightAuto } from '@patternfly/react-table';
        <Table cells={[{ transforms: [cellWidth(100)] }]}></Table>
*/