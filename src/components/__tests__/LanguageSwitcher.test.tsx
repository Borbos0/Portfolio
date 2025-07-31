import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LanguageSwitcher from "../LanguageSwitcher";
import i18n from "../../i18n";

describe("LanguageSwitcher", () => {
  it("changes language when a flag is clicked", async () => {
    render(<LanguageSwitcher />);
    const button = screen.getByRole("button", { name: /english/i });
    await userEvent.click(button);
    await waitFor(() => expect(i18n.language).toBe("en"));
  });
});
