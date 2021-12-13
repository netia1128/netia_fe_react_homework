import './index.css';
import { Grid, Row, Col } from './components/Grid.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

function App() {
  return (
    <div className="App">
      <Grid>
        <Row>
          <Col size={1}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Sidebar />
          </Col>
          <Col size={2}>
            <Content />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Footer />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
