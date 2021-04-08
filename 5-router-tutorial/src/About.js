import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const detail = query.detail === 'true'
    return (
        <div>
            <h1>Intro.</h1>
            <p>this project is for pracwticing using react router</p>
            {detail && <p>more info..</p>}
        </div>
    );
};

export default About;