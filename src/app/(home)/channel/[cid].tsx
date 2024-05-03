import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Channel as ChannelType } from 'stream-chat';
import {
  Channel,
  MessageInput,
  MessageList,
  useChatContext,
} from 'stream-chat-expo';

export default function ChannelScreen() {
  const [channel, setChannel] = useState<ChannelType | null>(null);
  const { cid } = useLocalSearchParams<{ cid: string }>();

  const { client } = useChatContext();

  useEffect(() => {
    const fetchChannel = async () => {
      const channels = await client.queryChannels({ cid });
      setChannel(channels[0]);
    };

    fetchChannel();
  }, [cid]);

  if (!channel) {
    return <ActivityIndicator />;
  }

  return (
    <Channel channel={channel} audioRecordingEnabled>
      <MessageList />
      <SafeAreaView edges={['bottom']}>
        <MessageInput />
      </SafeAreaView>
    </Channel>
  );
}
