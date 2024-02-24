import Shops from './Proje1/Shops';
import MainItem from './Proje1/MainItem';
import Content from './Proje1/Content/Content';
import Home from './Proje1/Home';
import Panel from './Proje1/Content/Panel';
import Users from './Proje1/Content/Users';
import PrivateRoute from './Proje1/Content/PrivateRoute';
let routes = [
  { path: '/Home', element: <Home /> },
  { path: '/', element: <Users /> },
  { path: '/shop', element: <Shops /> },
  { path: '/shop/:Item', element: <MainItem /> },
  { path: '/panel', element: <PrivateRoute><Panel /></PrivateRoute> },
  {
    path: '/Content/*', element: <PrivateRoute><Content /></PrivateRoute>, children: [
      {
        path: 'setting', element:
          <div>
            <p style={{ textAlign: "center" }}>setting</p>
            <h1 style={{ textAlign: "center" }}>This is setting Page and content about setting</h1>
          </div>
      },
      {
        path: 'dashboard', element:
          <div>
            <p style={{ textAlign: "center" }}>Dashboard</p>
            <h1 style={{ textAlign: "center" }}>This is Dashboard Page and content about Dashboard</h1>
          </div>
      }
    ]
  },
]
export default routes