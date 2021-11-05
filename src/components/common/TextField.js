import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField({ name, change }) {
    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <TextField
                style={{ marginTop: 20 }}
                fullWidth
                className="text-input"
                label={`Search a ${name}`}
                id="search"
                onChange={(e) => change(e.target.value)}
            />
        </Box>
    );
}
