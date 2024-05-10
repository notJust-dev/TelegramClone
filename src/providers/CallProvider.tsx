import { useCalls } from '@stream-io/video-react-native-sdk';
import { router, useSegments } from 'expo-router';
import { PropsWithChildren, useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CallProvider({ children }: PropsWithChildren) {
  const calls = useCalls();
  const call = calls[0];
  const { top } = useSafeAreaInsets();
  const segments = useSegments();
  const isOnCallScreen = segments[1] === 'call';

  useEffect(() => {
    if (!call) {
      return;
    }
    if (!isOnCallScreen && call.state.callingState === 'ringing') {
      router.push(`/call`);
    }
  }, [call, isOnCallScreen]);

  return (
    <>
      {children}
      {call && !isOnCallScreen && (
        <Pressable
          onPress={() => router.push(`/call`)}
          style={{
            position: 'absolute',
            backgroundColor: 'lightgreen',
            top: top + 40,
            left: 0,
            right: 0,
            padding: 10,
          }}
        >
          <Text>
            Call: {call.id} ({call.state.callingState})
          </Text>
        </Pressable>
      )}
    </>
  );
}
