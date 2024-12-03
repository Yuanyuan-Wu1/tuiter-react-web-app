import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

test('renders app', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    // 添加更多有意义的测试
});
