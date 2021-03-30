import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () =>{
	if(!localStorage.getItem('username')) return <LoginForm/>
    return (
			<ChatEngine
				height="100vh"
				userName={localStorage.getItem('username')}
				userSecret={localStorage.getItem('password')}
				projectID="2d49e31a-7b30-4390-99ef-f7e7ab996d31"
				renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
			/>
		);
}

export default App;