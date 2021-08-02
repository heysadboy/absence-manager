import renderer from 'react-test-renderer';
import HeaderBar from '../components/HeaderBar';
import { EAbsenceType } from '../util/Enums';

test('HeaderBar.tsx snapshot testing', () => {
    const setDateRange = () => {}
    const setAbsenceType = () => {}

    const component = renderer.create(
        <HeaderBar title="Header Bar" absenceType={EAbsenceType.all} setDateRange={setDateRange} setAbsenceType={setAbsenceType} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});