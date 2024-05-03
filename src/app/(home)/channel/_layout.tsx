import { Stack } from 'expo-router';

export default function ChannelStack() {
  return (
    <Stack>
      <Stack.Screen name="[cid]" options={{ headerShown: false }} />
    </Stack>
  );
}
