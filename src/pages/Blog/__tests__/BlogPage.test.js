import ReactDOM from 'react-dom'
import BlogPage from '../BlogPage';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BlogPage />, div);
});
