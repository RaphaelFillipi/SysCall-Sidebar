import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByAltText } = render(<Root name="Testapp" />);
    expect(getByAltText(/Ícone de contatos/i)).toBeInTheDocument();
  });
});
