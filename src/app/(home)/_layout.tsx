import { Redirect, Stack } from 'expo-router';
import ChatProvider from '../../providers/ChatProvider';
import { useAuth } from '../../providers/AuthProvider';
import VideoProvider from '../../providers/VideoProvider';
import CallProvider from '../../providers/CallProvider';
import NotificationsProvider from '../../providers/NotifcationsProvider';

export default function HomeLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <ChatProvider>
      <NotificationsProvider>
        <VideoProvider>
          <CallProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
          </CallProvider>
        </VideoProvider>
      </NotificationsProvider>
    </ChatProvider>
  );
}
