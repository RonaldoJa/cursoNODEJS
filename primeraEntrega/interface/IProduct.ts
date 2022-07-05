

export interface BaseParams<IDType = number> {
    id: IDType
}

export interface ProductDetails {
    name: string,
    description: string,
    code: number,
    url: string,
    price: number,
    stock: number,
}

export interface APIResponse<Data> {
    data: Data,
    message: string
}

export interface Empty {

}


