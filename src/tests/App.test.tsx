import renderer from 'react-test-renderer';
import App from '../components/App';

test('App.tsx snapshot testing', () => {
    const component = renderer.create(
        <App />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});