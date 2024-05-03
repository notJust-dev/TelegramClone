import { router } from 'expo-router';
import { ChannelList } from 'stream-chat-expo';
import { useAuth } from '../../../providers/AuthProvider';

export default function MainTabScreen() {
  const { user } = useAuth();
  return (
    <ChannelList
      filters={{ members: { $in: [user.id] } }}
      onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
    />
  );
}
