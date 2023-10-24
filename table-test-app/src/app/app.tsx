import React from 'react';
import { Global as GlobalStyles, css } from '@emotion/react';
import { Container } from './app.styled';


export const App: React.FunctionComponent = () => (
  <>
        {/* <AppRoutes /> */}
      <Container>
        <GlobalStyles
          styles={css`
            #root,
            body {
              margin: 0;
              scroll-behavior: smooth;
              overflow-x: hidden;
              scrollbar-width: none;
              -ms-overflow-style: none; /* IE 10+ */
              scrollbar-width: none; /* Firefox */
              &::-webkit-scrollbar {
                /* chrome based */
                width: 0px;
              }
            }
            #root {
              position: relative;
            }
          `}
        />
        <p>
          Hallo world!!!!.
        </p>
    </Container>
  </>
);