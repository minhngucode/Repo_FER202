import { useTheme } from "./useTheme";
import { Button, Container } from "react-bootstrap";

const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container
      fluid
      className={`theme-container ${theme.background === "#ffffff" ? "" : "dark-theme"}`}
    >
      <Button className="theme-toggle-btn" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </Container>
  );
};

export default Theme;
