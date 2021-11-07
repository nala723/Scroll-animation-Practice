import "./styles.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Particle from "./Particle";
import Particle2 from "./Particle2";
import Gradients from "./Gradients";
import GsapPrac from "./GsapPrac";

export default function App() {
  return (
    <Router>
      <Container>
        <LinkBox>
          <LinkTitle to="/">Particle</LinkTitle>
          <LinkTitle to="/particle2">Particle2</LinkTitle>
          <LinkTitle to="/gradients">Gradients</LinkTitle>
          <LinkTitle to="/gsappract">GsapPractice</LinkTitle>
        </LinkBox>
        <Switch>
          <Route exact path="/" component={Particle} />
          <Route path="/particle2" component={Particle2} />
          <Route path="/gradients" component={Gradients} />
          <Route path="/gsappract" component={GsapPrac} />
        </Switch>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: inherit;
  height: inherit;
  text-align: center;
`;

const LinkBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkTitle = styled(Link)`
  color: grey;
`;
