import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Layouts/Home';
import Announcements from './Layouts/Announcements';
import Money from './Layouts/Money';
import Erasmus from './Layouts/Feriha/Erasmus';
import WorkAndTravel from './Layouts/Feriha/WorkAndTravel';
import Agh from './Layouts/Feriha/AGH';
import AkademikKariyer from './Layouts/Feriha/AkademikKariyer';
import Interrail from './Layouts/Feriha/Interrail';
import DoguEkspresi from './Layouts/Feriha/DoguEkspresi';
import WWoof from './Layouts/Feriha/WWoof';

const App = () => {
  return (
    <BrowserRouter>
      <div>
          <Route path='/' component={Home} exact />
          <Route path='/announcements' component={Announcements} exact/>
          <Route path='/contact-us' component={Money} exact />
          <Route path='/kumbara' component={Erasmus} exact />
          <Route path='/kumbara/erasmus' component={Erasmus} exact />
          <Route path='/kumbara/work-and-travel' component={WorkAndTravel} exact />
          <Route path='/kumbara/agh' component={Agh} exact />
          <Route path='/kumbara/interrail' component={Interrail} exact />
          <Route path='/kumbara/dogu-ekspresi' component={DoguEkspresi} exact />
          <Route path='/kumbara/akademik-kariyer' component={AkademikKariyer} exact />
          <Route path='/kumbara/wwoof' component={WWoof} exact />
      </div>
    </BrowserRouter>
  );
};

export default App;
