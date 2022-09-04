// Dependencies scoped imports
import React from 'react';

// Project scoped imports

// Module scoped imports
import { StyledRoot, StyledMessage } from './styles';
import { {{name}}Props } from './types';

/**
 * @module {{$atomsOrMoleculesOrOrganisms}}
 * @description {{$description}}
 */
const {{name}} = ({ sx, classes, children, ...rootProps }: {{name}}Props) => 
  (
    <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
      <StyledMessage className={classes?.message} gutterBottom>
        {{name}}
      </StyledMessage>

      {children}
    </StyledRoot>
  );
  
export default {{name}};
