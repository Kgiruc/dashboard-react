import { waitFor } from "@testing-library/react";
import { describe } from "vitest";
import ListProducts from "../ListProducts";

describe("Create componenets", () => {
    it("render names"), async() => {
        render(<ListProducts />)
    await waitFor(() => {
        screen.getByText('ilość')
        screen.getByText('iPhone 9')
        screen.getByRole('img', {name: 'trash_logo'})
    })
    }
})