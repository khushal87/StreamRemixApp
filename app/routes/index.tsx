import { StreamChatType } from "../types/index";
import "../styles/index.css";

import { apiKey, userId, userToken } from "../utils/stream.server";
import { StreamChat } from "stream-chat";
import {
    Chat,
    Channel,
    ChannelHeader,
    ChannelList,
    MessageList,
    MessageInput,
    Thread,
    Window,
} from "stream-chat-react";

const chatClient = StreamChat.getInstance<StreamChatType>("q95x9hkbyd6p");
chatClient.connectUser(
    { id: "ron" },
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicm9uIn0.eRVjxLvd4aqCEHY_JRa97g6k7WpHEhxL7Z4K4yTot1c"
);

// export let loader: LoaderFunction = async () => {
//     const data = await chatClient;

//     return CircularJSON.stringify(data);
// };

export default function Index() {
    // const data = useLoaderData<string>();
    // const chatClient = CircularJSON.parse(data);
    // console.log(chatClient);

    return (
        <Chat client={chatClient}>
            <ChannelList showChannelSearch />
            <Channel>
                <Window>
                    <ChannelHeader />
                    <MessageList />
                    <MessageInput focus />
                </Window>
                <Thread />
            </Channel>
        </Chat>
    );
}
