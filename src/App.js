import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);

  const handleSend = () => {
    if (message.trim() !== '') {
      const updatedChats = [...chats, message];
      localStorage.setItem('chats', JSON.stringify(updatedChats));
      setChats(updatedChats);
      setMessage('');
    }
  };

  const handleShowMessages = () => {
    const storedChats = localStorage.getItem('chats');
    const parsedChats = storedChats ? JSON.parse(storedChats) : [];
    console.log('Stored Chats:', parsedChats);
    setChats(parsedChats); // Set chats state if needed for display in the UI
  };
  
  return (
    <div className="App">
      <div className="content">
        {/* Lorem Ipsum content */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales. Facilisis magna etiam tempor orci. Blandit libero volutpat sed cras ornare. Sed cras ornare arcu dui. Pretium quam vulputate dignissim suspendisse in est ante. Porttitor lacus luctus accumsan tortor posuere. Egestas dui id ornare arcu odio ut sem. Est placerat in egestas erat imperdiet sed euismod nisi. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Quisque sagittis purus sit amet. Nulla facilisi nullam vehicula ipsum. Mauris nunc congue nisi vitae. Auctor neque vitae tempus quam pellentesque nec nam. Vitae turpis massa sed elementum tempus egestas. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Id faucibus nisl tincidunt eget nullam non nisi. Sem viverra aliquet eget sit amet tellus.</p>
        <p>Viverra orci sagittis eu volutpat. Sed vulputate mi sit amet mauris. Vulputate enim nulla aliquet porttitor. Tristique sollicitudin nibh sit amet commodo nulla. Sed cras ornare arcu dui. Eu volutpat odio facilisis mauris sit. Quis viverra nibh cras pulvinar mattis nunc sed. Tincidunt praesent semper feugiat nibh sed pulvinar proin. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Risus feugiat in ante metus dictum at tempor. Convallis convallis tellus id interdum velit. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Accumsan tortor posuere ac ut consequat. Posuere morbi leo urna molestie at. Odio euismod lacinia at quis risus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Quis auctor elit sed vulputate mi. Vulputate sapien nec sagittis aliquam malesuada.</p>
        <p>Mi eget mauris pharetra et ultrices neque ornare. Praesent elementum facilisis leo vel fringilla est ullamcorper. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Curabitur vitae nunc sed velit dignissim sodales. A condimentum vitae sapien pellentesque. Risus commodo viverra maecenas accumsan. Nisi quis eleifend quam adipiscing vitae proin. Sed adipiscing diam donec adipiscing tristique risus nec. Purus in mollis nunc sed. Placerat vestibulum lectus mauris ultrices eros. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nisl nunc mi ipsum faucibus. Id ornare arcu odio ut sem nulla pharetra. Tortor posuere ac ut consequat semper viverra nam. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Nam aliquam sem et tortor consequat id porta. Cursus vitae congue mauris rhoncus aenean vel. Elementum facilisis leo vel fringilla. Blandit libero volutpat sed cras ornare arcu. Diam volutpat commodo sed egestas egestas.</p>
        <p>Netus et malesuada fames ac turpis. Quam adipiscing vitae proin sagittis nisl rhoncus. Mi eget mauris pharetra et ultrices. Vel facilisis volutpat est velit egestas dui id ornare arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ipsum consequat nisl vel pretium lectus. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Sed felis eget velit aliquet sagittis id. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Pharetra sit amet aliquam id. Lectus sit amet est placerat in. Nulla malesuada pellentesque elit eget gravida. Felis eget velit aliquet sagittis. Diam phasellus vestibulum lorem sed risus ultricies. Aliquet nec ullamcorper sit amet risus nullam. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.</p>
        <p>At elementum eu facilisis sed odio morbi quis commodo odio. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Odio morbi quis commodo odio. Et malesuada fames ac turpis egestas sed tempus urna et. Malesuada pellentesque elit eget gravida cum sociis natoque. Morbi tempus iaculis urna id volutpat lacus laoreet. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Senectus et netus et malesuada fames ac turpis egestas integer. Justo eget magna fermentum iaculis. Cursus eget nunc scelerisque viverra mauris in. Eget duis at tellus at. Ut consequat semper viverra nam. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Aliquet bibendum enim facilisis gravida neque. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Senectus et netus et malesuada fames ac. At erat pellentesque adipiscing commodo elit at imperdiet dui. Ullamcorper a lacus vestibulum sed arcu. Aenean et tortor at risus viverra adipiscing at in.</p>

        {/* Chat section */}
        <div className="chat-container">
          <input
            type="text"
            id="chat"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSend}>Send</button>
          <button onClick={handleShowMessages}>Show messages</button>
        </div>
      </div>
    </div>
  );
};

export default App;