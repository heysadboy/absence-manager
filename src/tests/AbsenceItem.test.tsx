import renderer from 'react-test-renderer';
import  AbsenceItem from '../components/AbsenceItem';
import { IAbsence, IMember } from '../util/Interfaces';


test('AbsenceItem.tsx snapshot testing', () => {

  const member: IMember = {
    crewId: 1,
    id: 1,
    image: "image link",
    name: "name",
    userId: 1
  };

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
    <AbsenceItem member={member} absence={absence}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});