import { StreamChat } from "stream-chat";
import { StreamChatType } from "../types";
import CircularJSON from "circular-json";

const apiKey = process.env.REACT_APP_STREAM_KEY as string;
const userId = process.env.REACT_APP_USER_ID as string;
const userToken = process.env.REACT_APP_USER_TOKEN as string;

// const chatClientInstance = StreamChat.getInstance<StreamChatType>(apiKey);

// const chatClient = chatClientInstance;

export { apiKey, userId, userToken };
