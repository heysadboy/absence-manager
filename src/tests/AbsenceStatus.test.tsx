import renderer from 'react-test-renderer';
import  AbsenceStatus from '../components/AbsenceStatus';
import { IAbsence } from '../util/Interfaces';


test('AbsenceStatus.tsx snapshot testing', () => {

  const absence: IAbsence = {
    admitterId: 1,
    admitterNote: "admitter note",
    confirmedAt: "2020-12-12",
    createdAt: "2020-12-12",
    crewId: 1,
    endDate: "2020-12-12",
    id: 1,
    memberNote: "member note",
    rejectedAt: "2020-12-12",
    startDate: "2020-12-12",
    type: "vacation",
    userId: 1
  }

  const component = renderer.create(
    <AbsenceStatus absence={absence}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});