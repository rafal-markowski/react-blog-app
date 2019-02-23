import styled from 'styled-components';

import Center from './Center';

const Label = styled(Center)`
`;

Label.defaultProps = {
    direction: 'row',
    x: null,
    y: "true",
    as: 'label'    
};

export default Label;