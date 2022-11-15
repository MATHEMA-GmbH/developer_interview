# A shopping trip
The goal of this assignment is to write a programm that simulates a shopping experience. Multiple person can go to a shop and add products to their basket. In the end either one or all together want to checkout and receive a invoice.

## Software requirements
* https://stackblitz.com/ (rxjs)

## Requirements
> the section [Interfaces](#interfaces) can help you understand the following informations

- implement a function `addProductPerson1(product: Product)`
    - a function call accumulates the given product into an observable
- implement a function `checkoutPerson1()`
    - a function call triggers a console log
    - the log contains the followin informations
        - products: Array<Product>
            - all products added by `addProductPerson1`
        - fullPrice: number
            - the accumulated price from the above `products`
- repeat the previous two tasks and adapt the functiosn for another person
    - `addProductPerson2(product: Product)`
    - `checkoutPerson2()`
- implement a function `checkout()`
    - a function call triggers a console log
    - the log contains the following informations
        - products: Array<Product>
            - all products added by `addProductPerson1` and `addProductPerson2`
        - fullPrice: number
            - the accumulated price from the above `products`

## Technical Notes
- each requirement step is either one commit or in a single folder inside the project
- each console log is only triggered by a subscription
- inside subscriptions there is only console log call
 
## Interfaces
> the following interfaces can be implemented and used
> it is no requirement to implement and use them

##### Product
- name: string
- price: number

##### Invoice
- products: Array<Product>
- fullPrice: number