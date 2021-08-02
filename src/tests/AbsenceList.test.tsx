import renderer from 'react-test-renderer';
import AbsenceList from '../components/AbsenceList';
import { IAbsence, IMemberList } from '../util/Interfaces';


test('AbsenceList.tsx snapshot testing', () => {

    const members: IMemberList = {
        1: {
            crewId: 1,
            id: 1,
            image: "image link",
            name: "name 1",
            userId: 1
        },
        2: {
            crewId: 1,
            id: 1,
            image: "image link",
            name: "name 2",
            userId: 1
        }
    };

    const absences: IAbsence[] = [
        {
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
        },
        {
            admitterId: 2,
            admitterNote: "admitter note",
            confirmedAt: "2020-12-12",
            createdAt: "2020-12-12",
            crewId: 2,
            endDate: "2020-12-12",
            id: 2,
            memberNote: "member note",
            rejectedAt: "2020-12-12",
            startDate: "2020-12-12",
            type: "vacation",
            userId: 2
        }

    ]

    const component = renderer.create(
        <AbsenceList members={members} absences={absences} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});