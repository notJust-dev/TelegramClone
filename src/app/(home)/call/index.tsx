import {
  User,
  StreamVideoClient,
  StreamVideo,
  StreamCall,
  CallContent,
} from '@stream-io/video-react-native-sdk';
import { Text } from 'react-native';

const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY;
const userId = '8512033c-5ce5-4bb1-822e-cecc02ea97fa';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODUxMjAzM2MtNWNlNS00YmIxLTgyMmUtY2VjYzAyZWE5N2ZhIn0.MqreLbPewrlQM6BCWtsWXVHtQkdgC5B2c0SzHZz9pWM';
const callId = 'default_6b2b4ae2-2622-46b0-b016-2cbc8d64ac63';
const user: User = { id: userId };

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('default', callId);
call.join({ create: true });

export default function CallScreen() {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <CallContent />
      </StreamCall>
    </StreamVideo>
  );
}
