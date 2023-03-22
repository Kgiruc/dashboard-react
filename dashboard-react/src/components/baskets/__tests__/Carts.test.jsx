import { it, describe } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Carts from "../Carts";

describe("Carts components", () => {
    it("should render button", async () => {
      render(<Carts />);
      await waitFor(() => {
        screen.getByText("dodaj koszyk")
      })
    });

    it("should render list of baskets", async () => {
        render(<Carts />);
        await waitFor(() => {
            screen.getByText("koszyk 1")
        })
    })
  
    it("check if h1 element is in the document", () => {
      render(<Carts />);
      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toBeInTheDocument();
    });
  });