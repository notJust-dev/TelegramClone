import { Redirect, Stack } from 'expo-router';
import ChatProvider from '../../providers/ChatProvider';
import { useAuth } from '../../providers/AuthProvider';
import VideoProvider from '../../providers/VideoProvider';

export default function HomeLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <ChatProvider>
      <VideoProvider>
        <Stack>
          <Stack.Screen name="call/index" />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </VideoProvider>
    </ChatProvider>
  );
}
