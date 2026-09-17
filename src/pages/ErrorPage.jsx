import { Container } from "react-bootstrap";

export default function ErrorPage() {
  return (
    <main className="error-page">
      <Container className="error-card">
        <h1>Oops!</h1>
        <p>Page not found</p>
      </Container>
    </main>
  );
}