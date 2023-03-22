import { waitFor } from "@testing-library/react";
import { describe } from "vitest";
import ListCarts from "../ListCarts";


describe("ListCart componenets", () => {
    it("should render button delete"), async() => {
        render(<ListCarts />)
        await waitFor(() => {
            screen.getByRole('img', {name: 'delete_logo'})
        })
    }
     it("should render button charts"), async() => {
        render(<ListCarts />)
        await waitFor(() => {
            screen.getByRole('img', {name: 'charts_logo'})
        })
    }
    it("should render Koszyk"), async() => {
        render(<ListCarts />)
        await waitFor(() => {
            screen.getByText('Koszyk 1')
        })
    }
    it("should render Ilosc sztuk"), async() => {
        render(<ListCarts />)
        await waitFor(() => {
            screen.getByText('ilość sztuk: 5')
        })
    }
})