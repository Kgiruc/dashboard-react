import { waitFor } from "@testing-library/react";
import { describe } from "vitest";
import ListCarts from "../../baskets/ListCarts";
import Create from "../Create";

describe("Create componenets", () => {
    it("render names"), async() => {
        render(<Create />)
    await waitFor(() => {
        screen.getByText('nazwa produktu')
        screen.getByText('ilość')
        screen.getByText('iPhone 9 x1')
        screen.getByRole('img', {name: 'add_basket_logo'})
    })
    }
})