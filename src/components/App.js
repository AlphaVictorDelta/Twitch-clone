import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" component={StreamCreate} />
                <Route path="/streams/show" component={StreamShow} />
                <Route path="/streams/edit" component={StreamEdit} />
                <Route path="/streams/delete" component={StreamDelete} />
            </div>
        </BrowserRouter>
    );
};

export default App;