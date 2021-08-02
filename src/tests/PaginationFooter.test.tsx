import renderer from 'react-test-renderer';
import PaginationFooter from '../components/PaginationFooter';
import { TPageIndex } from '../util/Types';

test('PaginationFooter.tsx snapshot testing', () => {
    const setPageIndex = () => { }
    const pageIndex: TPageIndex = { start: 0, end: 0, total: 10 };

    const component = renderer.create(
        <PaginationFooter pageIndex={pageIndex} setPageIndex={setPageIndex} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});