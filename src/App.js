import './index.css';
import Header from './components/Header.js';
import { Grid, Row, Col } from './components/Grid.js';

function App() {
  return (
    <div className="App">
      <Grid>
        <Row>
          <Col size={1}>
            <Header />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
