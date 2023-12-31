import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Tab from '../components/Tab';
import tabsData from '../data/tabs.json';
import DummyTable from '../components/Tabs/dummyTable';
import { Spinner } from '../components/Spinner';
export const AppRouter = () => (
  <Router>
    <div>
      <Header tabs={tabsData} />
      <Routes>
        {tabsData.map((tab) => (
          <>
            <Route
              index
              element={
                <div className="container">
                  <DummyTable />
                </div>
              }
            />

            <Route
              key={tab.id}
              path={`/:${tab.id}`}
              element={<Tab tabs={tabsData} />}
            />
          </>
        ))}
      </Routes>
    </div>
  </Router>
);
