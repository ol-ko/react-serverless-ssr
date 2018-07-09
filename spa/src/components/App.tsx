import * as React from 'react';

import * as styles from "./App.scss";

interface AppProps {
    message: string,
};

export default function({ message }: AppProps ) {
    return <h1 className={styles.blah}>Hello {message}<a>red?</a></h1>;
};
