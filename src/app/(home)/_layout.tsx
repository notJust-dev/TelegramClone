import { Stack } from 'expo-router';
import ChatProvider from '../../providers/ChatProvider';

export default function HomeLayout() {
  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ChatProvider>
  );
}
