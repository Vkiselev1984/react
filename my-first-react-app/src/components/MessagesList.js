import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StyledListItem = styled(ListItem)({
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
});

const messages = [
    { id: 1, text: 'Hi, how are you?' },
    { id: 2, text: 'Im fine, thanks!' },
    { id: 3, text: 'Whats new?' },
    { id: 4, text: 'Working on a new project.' },
];

const MessagesList = () => {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                List of messages
            </Typography>
            <List>
                {messages.map((message) => (
                    <StyledListItem key={message.id}>
                        <ListItemText primary={message.text} />
                    </StyledListItem>
                ))}
            </List>
        </div>
    );
};

export default MessagesList;