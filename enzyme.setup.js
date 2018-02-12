// http://airbnb.io/enzyme/docs/installation/index.html#working-with-react-16
/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
