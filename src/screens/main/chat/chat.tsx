import React from 'react';
import { ScrollView, Menu, Pressable, HamburgerIcon, Box } from 'native-base';

export default function Chat() {
    return (
        <ScrollView bg="white">
            <Box paddingLeft="3">
                <Menu
                    w="190"
                    trigger={(triggerProps) => {
                        return (
                            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                <HamburgerIcon />
                            </Pressable>
                        )
                    }}>
                    <Menu.Item>방 만들기</Menu.Item>
                </Menu>
            </Box>
        </ScrollView>
    );
}