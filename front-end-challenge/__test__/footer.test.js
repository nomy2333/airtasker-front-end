import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../src/Components/footer';

// configure({ adapter: new Adapter() });


describe('Footer', () => {
    it('case:  footer_discl', () => {
        const wrapper = shallow(<Test />);

        expect(wrapper.find('.footer_discl').length).toEqual(1);
    });
});