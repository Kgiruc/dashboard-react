import { waitFor } from "@testing-library/react";
import { describe } from "vitest";
import ProductsForm from "../ProductsForm";

describe("ProductsForm componenets", () => {
    it("render names"), async() => {
        render(<ProductsForm />)
    await waitFor(() => {
        screen.getByText('nazwa produktu')
        screen.getByText('ilosc')
        screen.getByRole('img', {name: 'add_logo'})
    })
    }
})