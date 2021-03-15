import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () =>{
    return (
			<ChatEngine
				height="100vh"
				userName="kidung"
				userSecret="fajar"
				projectID="2d49e31a-7b30-4390-99ef-f7e7ab996d31"
				renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
			/>
		);
}

export default App;