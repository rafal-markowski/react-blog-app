import React, { Component } from 'react';

import { Box, Input } from '../styles/all-styles';

class Newsletter extends Component {
    render() {
        return (
            <Box>
                <Input type="text" placeholder="Newsletter" />
            </Box>
        );
    }
}

export default Newsletter;