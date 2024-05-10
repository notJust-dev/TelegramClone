import {
  StreamCall,
  CallContent,
  useStreamVideoClient,
} from '@stream-io/video-react-native-sdk';

const callId = 'default_6b2b4ae2-2622-46b0-b016-2cbc8d64ac63';

export default function CallScreen() {
  const client = useStreamVideoClient();
  const call = client.call('default', callId);
  call.join({ create: true });

  return (
    <StreamCall call={call}>
      <CallContent />
    </StreamCall>
  );
}
